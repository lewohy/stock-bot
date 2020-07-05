import Discord, { Guild } from 'discord.js';
import path from 'path';
import util from 'util';
import fs from 'fs';
import commander, { Command, CommanderError, CommanderStatic, command, option } from 'commander';
import Stock, { ItemInfo } from './stock';
import { GuildInfo, MemberInfo, DealInfo, DealType, InfoJSON } from './types';
import chat from '../chat.json';
import config from '../config.json';

const CWD: string = process.env['INIT_CWD'] ? process.env['INIT_CWD'] : path.dirname(process.argv[0]);
const GUILD_INFO_PATH = CWD + '/data/info.json';

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
        this.loadGuildInfoList();

        let guildList = this.client.guilds.cache.array();

        guildList.forEach(guild => {
            let guildInfo = this.getGuildInfo(guild.id);
            if (guildInfo) {
                let memberList = guild.members.cache.array();
                
                memberList.forEach(member => {
                    if (!guildInfo.getMemberInfo(member.id)) {
                        let memberInfo = new MemberInfo(member.id);
                        memberInfo.clearDealInfo();
                        guildInfo.memberInfoList.push(memberInfo);
                    }
                });
            } else {
                let guildInfo = new GuildInfo(guild.id);

                let memberList = guild.members.cache.array();
                
                memberList.forEach(member => {
                    let memberInfo = new MemberInfo(member.id);
                    memberInfo.clearDealInfo();
                    guildInfo.memberInfoList.push(memberInfo);
                });

                
                this.guildInfoList.push(guildInfo);
            }
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
                    .option('--search <query>', '', (value, previous) => value.split(','))
                    .option('-b, --buy <count>', '')
                    .option('-s, --sell <count>', '')
                    .option('-c, --code <code>', '')
                    .option('--clear')
                    .option('--compare')
                    .option('--show', '');
    
                program.exitOverride();

                let command = program.parse(argv);
                let options = command.opts();

                console.log(options);

                if (options.H) {
                    await message.channel.send(chat.HELP.join('\n'));
                } else if (options.CLEAR) {
                    // this.clear(message);
                    // this.saveGuildInfoList();
                } else if (options.COMPARE) {
                    this.compare(message);
                } else {
                    if (options.search) {
                        await this.search(message, options.search);
                    }

                    if (options.buy || options.sell) {
                        let buyCount = Number(options.buy);
                        let sellCount = Number(options.sell);

                        if (options.buy && isNaN(buyCount)) {
                            throw new Error(`'${options.buy}' is not a number.`);
                        }

                        if (options.sell && isNaN(sellCount)) {
                            throw new Error(`'${options.sell}' is not a number.`);
                        }

                        if (!options.code) {
                            throw new Error('The code is missing.');
                        }

                        if (!/^\d{6}$/.test(options.code)) {
                            throw new Error('The code is not valid.');
                        }

                        if (options.buy) {
                            await this.buy(message, options.code, buyCount);
                        }

                        if (options.sell) {
                            await this.sell(message, options.code, sellCount);
                        }
                        
                        this.saveGuildInfoList();
                    }

                    if (options.show) {
                        await this.show(message);
                    }
                }
            } catch (e) {
                if (e instanceof CommanderError) {
                    await message.channel.send(`\`\`${e.message}\`\``);
                } else {
                    await message.channel.send(`\`\`${e.message}\`\``);
                }

                console.log(e);
            }
        }
    }

    private async clear(message: Discord.Message): Promise<void> {
        let memebrInfo = this.getGuildInfo(message.guild.id).getMemberInfo(message.author.id);
        memebrInfo.clearDealInfo();
        
        message.channel.send(`\`\`${this.getName(message.member)}\`\`님의 거래 내역을 초기화했습니다.`);
    }

    private async search(message: Discord.Message, queryList: Array<string>): Promise<void> {
        let msg = await message.channel.send('검색중...');

        let content = new Array<string>();

        let list = new Array<ItemInfo>();

        for (let query of queryList) {
            console.log(query);
            list = list.concat(await this.stock.searchItems(query));
        }

        list.forEach(info => {
            content.push(`\`\`${info.name}\`\` code: \`\`${info.code}\`\`현재가: \`\`${info.price}\`\` 전날 대비: \`\`${info.deltaPrice}\`\` 등락율: \`\`${info.adr}\`\``);
        });

        if (list === null) {
            content.push(`\`\`${queryList.join(', ')}\`\` 검색결과 없음.`);
        } else {
            content.push(`\`\`${list.length}\`\`개의 검색 결과`);
        }

        msg.edit(content.join('\n'));
    }

    private async buy(message: Discord.Message, code: string, count: number): Promise<void> {
        let itemInfo = await this.stock.getItemInfo(code);

        if (itemInfo === null) {
            message.channel.send(`\`\`${code}\`\`에 해당하는 회사를 찾을 수 없습니다.`);
            return;
        }

        let memebrInfo = this.getGuildInfo(message.guild.id).getMemberInfo(message.author.id);
        let dealInfo = new DealInfo(new Date().toLocaleString(), DealType.Buy, count, itemInfo);

        if (memebrInfo.money >= count * itemInfo.price) {
            memebrInfo.money -= count * itemInfo.price;
            message.channel.send(`\`\`${this.getName(message.member)}\`\` 님이 \`\`${itemInfo.name}\`\`의 주식 \`\`${count}\`\`개, 총 \`\`${count * itemInfo.price}\`\`원 구매했습니다.`);
            memebrInfo.dealInfoList.push(dealInfo);
        } else {
            message.channel.send(`\`\`${this.getName(message.member)}\`\` 님이 \`\`${count * itemInfo.price}\`\`원을 쓰려고 하는데 가지고 있는 돈이 \`\`${memebrInfo.money}\`\`원 입니다.`);
        }
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
            message.channel.send(`\`\`${this.getName(message.member)}\`\`님이 가지고 있는 \`\`${itemInfo.name}\`\`주식 갯수는 \`\`${posessionCount}\`\`개인데 \`\`${count}\`\`개를 팔려고 시도했습니다.`);
            return;
        }

        let dealInfo: DealInfo = {
            date: new Date().toLocaleString(),
            type: DealType.Sell,
            count: count,
            itemInfo: itemInfo
        };

        memebrInfo.dealInfoList.push(dealInfo);
        memebrInfo.money += count * itemInfo.price;
        message.channel.send(`\`\`${this.getName(message.member)}\`\` 님이 \`\`${itemInfo.name}\`\`의 주식 \`\`${count}\`\`개, 총 \`\`${count * itemInfo.price}\`\`원 팔았습니다.`);
    }

    private async show(message: Discord.Message) {
        let memebrInfo = this.getGuildInfo(message.guild.id).getMemberInfo(message.author.id);
        let table = [
            `\`\`${this.getName(message.member)}\`\`님의 거래 정보`,
            '```',
            ['code'.padStart(10), 'type'.padStart(10), 'count'.padStart(11), 'price'.padStart(11), 'name'.padStart(10)].join(''),
            '─'.repeat(52)
        ];
        let maxProfitMoney = 0;
        let currentMoney = 0;

        memebrInfo.dealInfoList.forEach(dealInfo => {
            currentMoney += (dealInfo.type == DealType.Buy ? -1 : 1) * dealInfo.itemInfo.price * dealInfo.count;

            if (currentMoney > maxProfitMoney) {
                maxProfitMoney = currentMoney;
            }

            let row = [
                dealInfo.itemInfo.code.padStart(10),
                (dealInfo.type == DealType.Buy ? 'buy' : 'sell').toString().padStart(10),
                dealInfo.count.toString().padStart(11),
                dealInfo.itemInfo.price.toString().padStart(11),
                ' '.repeat(6),
                dealInfo.itemInfo.name.toString()
            ].join('');

            table.push(row);
        });
        table.push('```');
        table.push(`최대 이익: \`\`${maxProfitMoney}\`\``);
        table.push(`현재 돈: \`\`${memebrInfo.money}\`\``);

        message.channel.send(table.join('\n'));
    }

    private async compare(message: Discord.Message): Promise<void> {
        //
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
                memberInfo.money = memberInfoJSON.money;

                memberInfoJSON.dealInfoList.forEach(dealInfoJSON => {
                    let itemInfo = new ItemInfo(
                        dealInfoJSON.itemInfo.name,
                        dealInfoJSON.itemInfo.code,
                        dealInfoJSON.itemInfo.price,
                        dealInfoJSON.itemInfo.deltaPrice,
                        dealInfoJSON.itemInfo.adr
                    );

                    let dealInfo = new DealInfo(
                        dealInfoJSON.date,
                        dealInfoJSON.type,
                        dealInfoJSON.count,
                        itemInfo
                    );

                    memberInfo.dealInfoList.push(dealInfo);
                });

                guildInfo.memberInfoList.push(memberInfo);
            });

            this.guildInfoList.push(guildInfo);
        });
    }

    private getName(member: Discord.GuildMember): string {
        return member.nickname ? member.nickname : member.user.username;
    }
}

let bot = new StockBot();
bot.login();