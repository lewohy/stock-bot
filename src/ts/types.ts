import { ItemInfo } from './stock';

export class DealInfo {
    public date: string;
    public type: DealType;
    public count: number;
    public itemInfo: ItemInfo;

    public constructor(date: string, type: DealType, count: number, itemInfo: ItemInfo) {
        this.date = date;
        this.type = type;
        this.count = count;
        this.itemInfo = itemInfo;
    }
}

export class MemberInfo {
    private static readonly INITIAL_MONEY = 1000000;

    private _memberId: string;
    public money: number;
    public readonly dealInfoList: Array<DealInfo>;

    public get memberId() {
        return this._memberId;
    }

    public constructor(memberId: string) {
        this._memberId = memberId;
        this.dealInfoList = new Array<DealInfo>();
    }

    public clearDealInfo(): void {
        while (this.dealInfoList.length > 0) {
            this.dealInfoList.pop();
        }

        this.money = MemberInfo.INITIAL_MONEY;
    }
}

export class GuildInfo {
    private _guildId: string;
    public readonly memberInfoList: Array<MemberInfo>;

    public get guildId() {
        return this._guildId;
    }

    public constructor(guildId: string) {
        this._guildId = guildId;
        this.memberInfoList = new Array<MemberInfo>();
    }

    public getMemberInfo(memberId: string): MemberInfo {
        for (let i = 0; i < this.memberInfoList.length; i++) {
            if (this.memberInfoList[i].memberId === memberId) {
                return this.memberInfoList[i];
            }
        }

        return null;
    }
}

export enum DealType {
    Buy, Sell
}

export type InfoJSON = [
    {
        _guildId: string,
        memberInfoList: [
            {
                _memberId: string,
                money: number,
                dealInfoList: [
                    {
                        date: string,
                        type: DealType,
                        count: number,
                        itemInfo: {
                            name: string,
                            code: string,
                            location: string,
                            price: number,
                            deltaPrice: number,
                            adr: string
                        }
                    }
                ]
            }
        ]
    }
];