export type ItemInfo = {
    name: string;
    code: string;
    currentPrice: number;
    deltaPrice: number;
    adr: string;
}

export type DealInfo = {
    date: string;
    type: DealType;
    count: number;
    itemInfo: ItemInfo;
}

export class MemberInfo {
    private _memberId: string;
    public readonly dealInfoList: Array<DealInfo>;

    public get memberId() {
        return this._memberId;
    }

    public constructor(memberId: string) {
        this._memberId = memberId;
        this.dealInfoList = new Array<DealInfo>();
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
                dealInfoList: [
                    {
                        date: string,
                        type: DealType,
                        count: number,
                        itemInfo: {
                            name: string,
                            code: string,
                            currentPrice: number,
                            deltaPrice: number,
                            adr: string
                        }
                    }
                ]
            }
        ]
    }
];