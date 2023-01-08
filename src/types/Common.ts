export enum MemberEnums {
  ZAO = 'zao',
  WAN = 'wan',
  MO = 'mo',
  UN = 'un',
  MI = 'mi',
}

export interface IMember {
  LastName: string;
  FirstName: string;
  NickName: string[];
  BiliId: string;
}

export type MembersType = {
  [key in MemberEnums]: IMember
};

export const Members: MembersType = <MembersType>{
  [MemberEnums.ZAO]: {
    LastName: '白',
    FirstName: '露早',
    NickName: ['早早'],
    BiliId: '露早GOGO'
  },
  [MemberEnums.WAN]: {
    LastName: '唐',
    FirstName: '莞儿',
    NickName: ['莞莞'],
    BiliId: '莞儿睡不醒'
  },
  [MemberEnums.MO]: {
    LastName: '苏',
    FirstName: '虞莫',
    NickName: ['莫莫'],
    BiliId: '虞莫MOMO'
  },
  [MemberEnums.UN]: {
    LastName: '姜',
    FirstName: '柚恩',
    NickName: ['海王'],
    BiliId: '柚恩不加糖'
  },
  [MemberEnums.MI]: {
    LastName: '安',
    FirstName: '米诺',
    NickName: ['大米'],
    BiliId: '米诺高分少女'
  }
}
