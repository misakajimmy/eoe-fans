import React from 'react';

export interface ThemeContextType {
  theme: ITheme;
  changeTheme: (theme: ThemeTypes) => any;
}

export const ThemeContext = React.createContext<ThemeContextType>(null!);

export function useTheme() {
  return React.useContext(ThemeContext);
}

export enum ThemeTypes {
  EOE= 'eoe',
  ZAO= 'zao',
  MI = 'mi',
  UN = 'un',
  WAN = 'wan',
  MO = 'mo',
}

export interface ThemeData {
  color_mode: string,
  color: string,
  color_second_page: string,
  tail_color: string,
  tail_color_selected: string,
  tail_icon_ani: string,
  tail_icon_ani_mode: string,
  head_myself_mp4_play: string,
  tail_icon_mode: string,
  side_bg_color: string
}

export interface ThemeIcon {

}

export interface ITheme {
  type: ThemeTypes;
  data: ThemeData;
  assets: any[];
}
