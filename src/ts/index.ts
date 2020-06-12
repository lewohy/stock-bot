import Discord from 'discord.js';
import path from 'path';
import util from 'util';
import fs from 'fs';
import commander, { Command, CommanderError, CommanderStatic, command, option } from 'commander';
import Stock from './stock';
import { ItemInfo, GuildInfo, MemberInfo, DealInfo, DealType, InfoJSON } from './types';
import config from '../config.json';

const CWD: string = process.env['INIT_CWD'] ? process.env['INIT_CWD'] : path.dirname(process.argv[0]);
const GUILD_INFO_PATH = CWD + '\\data\\info.json';

class StockBot {
    private prepared: boolean;
    private client: Discord.Client;
    private stock: Stock;
    private guildInfoList: Array<GuildInfo>;

    public constructor() {
        this.prepared = false;

        this.client = new Discord.Client();
        this.client.on('ready', this.onReady.bind(this));
        this.client.on('message', this.onMessage.bind(this));

        this.stock = new Stock();
        this.guildInfoList = new Array<GuildInfo>();
    }

    public async login(): Promise<void> {
        await this.client.login(config.TOKEN);
    }

    private async onReady(): Promise<void> {
        await this.client.user.setActivity('preparing...', {
            type: 'CUSTOM_STATUS'
        });
        this.loadGuildInfoList();

        let guildList = this.client.guilds.cache.array();

        guildList.forEach(guild => {
            let guildInfo = this.getGuildInfo(guild.id);
            if (guildInfo) {
                
                let memberList = guild.members.cache.array();
                
                memberList.forEach(member => {
                    if (!guildInfo.getMemberInfo(member.id)) {
                        guildInfo.memberInfoList.push(new MemberInfo(member.id));
                    }
                });
            } else {
                let guildInfo = new GuildInfo(guild.id);

                let memberList = guild.members.cache.array();
                
                memberList.forEach(member => {
                    guildInfo.memberInfoList.push(new MemberInfo(member.id));
                });

                
                this.guildInfoList.push(guildInfo);
            }
        });

        await this.client.user.setActivity('for help \'/stock -h\'', {
            type: 'CUSTOM_STATUS'
        });
    }

    private async onMessage(message: Discord.Message): Promise<void> {
        if (message.author.bot) {
            return;
        }

        if (message.content.startsWith('/stock')) {
            try {
                let argv = [''].concat(message.content.split(' '));
                let program = new Command();
                program.option('-h', '')
                    .option('--search <query>', '')
                    .option('-b, --buy <count>', '')
                    .option('-s, --sell <count>', '')
                    .option('-c, --code <code>', '')
                    .option('--show', '');
    
                program.exitOverride();

                let command = program.parse(argv);
                let options = command.opts();

                console.log(options);

                if (options.H) {
                    message.channel.send(
                        '검색 ``/stock --search ``__``query``__\n' +
                        '> 해당 query 검색, 검색 결과의 code 및 가격을 알려줌\n' +
                        '\n' +
                        '매수 ``/stock -b ``__``count``__`` -c ``__``code``__\n' +
                        '> 해당 code 에 해당하는 회사의 주식을 count만큼 구매\n' +
                        '\n' +
                        '매도 ``/stock -s ``__``count``__`` -c ``__``code``__\n' +
                        '> 해당 code 에 해당하는 회사의 주식을 count만큼 판매\n' +
                        '\n' +
                        '내 로그 보기 ``/stock --show\n' +
                        '> 내 정보를 보여줌\n' +
                        '\n' +
                        '왼쪽의 옵션을 오른쪽 구분으로 대체 가능\n' +
                        '``-b`` ``--buy``\n' +
                        '``-s`` ``--sell``\n' +
                        '``-c`` ``--code``\n' +
                        'ex)\n' +
                        '매수 ``/stock --buy ``__``count``__`` --code ``__``code``__\n'
                    );
                } else {
                    if (options.search) {
                        await this.search(message, options.search);
                    }

                    if (options.buy || options.sell) {
                        if (!options.code) {
                            throw new Error('The code is missing.');
                        }

                        if (!/^\d{6}$/.test(options.code)) {
                            throw new Error('The code is not valid.');
                        }

                        if (options.buy) {
                            let count = Number(options.buy);
                            if (isNaN(count)) {
                                throw new Error(`'${options.buy}' is not a number.`);
                            }

                            await this.buy(message, options.code, count);
                        }

                        if (options.sell) {
                            let count = Number(options.sell);
                            if (isNaN(count)) {
                                throw new Error(`'${options.sell}' is not a number.`);
                            }

                            await this.sell(message, options.code, count);
                        }

                        
                        this.saveGuildInfoList();
                    }

                    if (options.show) {
                        await this.show(message);
                    }
                }
            } catch (e) {
                if (e instanceof CommanderError) {
                    message.channel.send(`\`\`${e.message}\`\``);
                } else {
                    message.channel.send(`\`\`${e.message}\`\``);
                }

                console.error(e);
            }
        }
    }

    private async search(message: Discord.Message, query: string): Promise<void> {
        let msg = await message.channel.send('검색중...');
        let itemInfoList = await this.stock.search(query);

        if (itemInfoList) {
            msg.edit(itemInfoList.map(info => {
                return `\`\`${info.name}\`\` code: \`\`${info.code}\`\` 현재가: \`\`${info.currentPrice}\`\` 등락율: \`\`${info.adr}\`\``;
            }).join('\n'));
        } else {
            msg.edit(`\`\`${query}\`\` 검색결과 없음.`);
        }
    }

    private async buy(message: Discord.Message, code: string, count: number): Promise<void> {
        let itemInfo = await this.stock.getItemInfo(code);

        if (itemInfo === null) {
            message.channel.send(`\`\`${code}\`\`에 해당하는 회사를 찾을 수 없습니다.`);
            return;
        }

        let memebrInfo = this.getGuildInfo(message.guild.id).getMemberInfo(message.author.id);
        let dealInfo: DealInfo = {
            date: new Date().toLocaleString(),
            type: DealType.Buy,
            count: count,
            itemInfo: itemInfo
        };

        memebrInfo.dealInfoList.push(dealInfo);

        message.channel.send(`\`\`${message.member.nickname}\`\` 님이 \`\`${itemInfo.name}\`\`의 주식 \`\`${count}\`\`개, 총 \`\`${count * itemInfo.currentPrice}\`\`원 구매했습니다.`);
    }

    private async sell(message: Discord.Message, code: string, count: number): Promise<void> {
        let itemInfo = await this.stock.getItemInfo(code);

        if (itemInfo === null) {
            message.channel.send(`\`\`${code}\`\`에 해당하는 회사를 찾을 수 없습니다.`);
            return;
        }
        
        let memebrInfo = this.getGuildInfo(message.guild.id).getMemberInfo(message.author.id);

        let posessionCount = 0;
        memebrInfo.dealInfoList.forEach(dealInfo => {
            if (dealInfo.itemInfo.code == code) {
                if (dealInfo.type === DealType.Buy) {
                    posessionCount += dealInfo.count;
                } else if (dealInfo.type === DealType.Sell) {
                    posessionCount -= dealInfo.count;
                }
            }
        });

        if (count > posessionCount) {
            message.channel.send(`\`\`${message.member.nickname}\`\`님이 가지고 있는 \`\`${itemInfo.name}\`\`주식 갯수는 \`\`${posessionCount}\`\`개인데 \`\`${count}\`\`개를 팔려고 시도했습니다.`);
            return;
        }

        let dealInfo: DealInfo = {
            date: new Date().toLocaleString(),
            type: DealType.Sell,
            count: count,
            itemInfo: itemInfo
        };

        memebrInfo.dealInfoList.push(dealInfo);
        message.channel.send(`\`\`${message.member.nickname}\`\` 님이 \`\`${itemInfo.name}\`\`의 주식 \`\`${count}\`\`개, 총 \`\`${count * itemInfo.currentPrice}\`\`원 팔았습니다.`);
    }

    private async show(message: Discord.Message) {
        let memebrInfo = this.getGuildInfo(message.guild.id).getMemberInfo(message.author.id);
        let table = [
            `\`\`${message.member.nickname ? message.member.nickname : message.author.username}\`\`님의 거래 정보`,
            '```',
            ['date'.padStart(20), 'type'.padStart(10), 'count'.padStart(11), 'price'.padStart(11), 'name'.padStart(10)].join(''),
            '─'.repeat(62)
        ];
        let maxLossMoney = 0;
        let maxProfitMoney = 0;
        let currentMoney = 0;

        memebrInfo.dealInfoList.forEach(dealInfo => {
            currentMoney += (dealInfo.type == DealType.Buy ? -1 : 1) * dealInfo.itemInfo.currentPrice * dealInfo.count;

            if (currentMoney < maxLossMoney) {
                maxLossMoney = currentMoney;
            }

            if (currentMoney > maxProfitMoney) {
                maxProfitMoney = currentMoney;
            }

            let row = [
                dealInfo.date.padStart(20),
                (dealInfo.type == DealType.Buy ? 'buy' : 'sell').toString().padStart(10),
                dealInfo.count.toString().padStart(11),
                dealInfo.itemInfo.currentPrice.toString().padStart(11),
                dealInfo.itemInfo.name.toString().padStart(10),
            ].join('');

            table.push(row);
        });
        table.push('```');
        table.push(`최대 손실: \`\`${maxLossMoney}\`\``);
        table.push(`최대 이익: \`\`${maxProfitMoney}\`\``);
        table.push(`현재 돈: \`\`${currentMoney}\`\``);

        message.channel.send(table.join('\n'));
    }

    private getGuildInfo(guildId: string): GuildInfo {
        for (let i = 0; i < this.guildInfoList.length; i++) {
            if (this.guildInfoList[i].guildId === guildId) {
                return this.guildInfoList[i];
            }
        }

        return null;
    }

    private saveGuildInfoList() {
        fs.writeFileSync(GUILD_INFO_PATH, JSON.stringify(this.guildInfoList, null, 4));
    }

    private loadGuildInfoList() {
        if (!fs.existsSync(GUILD_INFO_PATH)) {
            this.guildInfoList = new Array<GuildInfo>();
            return;
        }

        let infoJSON = JSON.parse(fs.readFileSync(GUILD_INFO_PATH).toString()) as InfoJSON;

        infoJSON.forEach(guildJSON => {
            let guildInfo = new GuildInfo(guildJSON._guildId);
            guildJSON.memberInfoList.forEach(memberInfoJSON => {
                let memberInfo = new MemberInfo(memberInfoJSON._memberId);
                memberInfoJSON.dealInfoList.forEach(dealInfoJSON => {
                    let itemInfo: ItemInfo = {
                        name: dealInfoJSON.itemInfo.name,
                        code: dealInfoJSON.itemInfo.code,
                        currentPrice: dealInfoJSON.itemInfo.currentPrice,
                        deltaPrice: dealInfoJSON.itemInfo.deltaPrice,
                        adr: dealInfoJSON.itemInfo.adr,
                    }

                    let dealInfo: DealInfo = {
                        date: dealInfoJSON.date,
                        type: dealInfoJSON.type,
                        count: dealInfoJSON.count,
                        itemInfo: itemInfo,
                    };

                    memberInfo.dealInfoList.push(dealInfo);
                });

                guildInfo.memberInfoList.push(memberInfo);
            });

            this.guildInfoList.push(guildInfo);
        });
    }
}

let bot = new StockBot();
bot.login();