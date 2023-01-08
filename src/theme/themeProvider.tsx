import React, { useState} from 'react';
import {ITheme, ThemeContext, ThemeContextType, ThemeTypes} from './theme';
import zao from './skin/zao.json';
import mi from './skin/mi.json';
import mo from './skin/mo.json';
import un from './skin/un.json';
import wan from './skin/wan.json';

const ZaoImg = [
  require('./skin/zao/tail_bg.png'),
  require('./skin/zao/tail_icon_main.png'),
  require('./skin/zao/tail_icon_selected_main.png'),
  require('./skin/zao/tail_icon_channel.png'),
  require('./skin/zao/tail_icon_selected_channel.png'),
  require('./skin/zao/tail_icon_myself.png'),
  require('./skin/zao/tail_icon_selected_myself.png'),
  require('./skin/zao/head_bg.jpg')
];
const MiImg = [
  require('./skin/mi/tail_bg.png'),
  require('./skin/mi/tail_icon_main.png'),
  require('./skin/mi/tail_icon_selected_main.png'),
  require('./skin/mi/tail_icon_channel.png'),
  require('./skin/mi/tail_icon_selected_channel.png'),
  require('./skin/mi/tail_icon_myself.png'),
  require('./skin/mi/tail_icon_selected_myself.png'),
  require('./skin/mi/head_bg.jpg')
];
const UNImg = [
  require('./skin/un/tail_bg.png'),
  require('./skin/un/tail_icon_main.png'),
  require('./skin/un/tail_icon_selected_main.png'),
  require('./skin/un/tail_icon_channel.png'),
  require('./skin/un/tail_icon_selected_channel.png'),
  require('./skin/un/tail_icon_myself.png'),
  require('./skin/un/tail_icon_selected_myself.png'),
  require('./skin/un/head_bg.jpg')
];
const WanImg = [
  require('./skin/wan/tail_bg.png'),
  require('./skin/wan/tail_icon_main.png'),
  require('./skin/wan/tail_icon_selected_main.png'),
  require('./skin/wan/tail_icon_channel.png'),
  require('./skin/wan/tail_icon_selected_channel.png'),
  require('./skin/wan/tail_icon_myself.png'),
  require('./skin/wan/tail_icon_selected_myself.png'),
  require('./skin/wan/head_bg.jpg')
];
const MoImg = [
  require('./skin/mo/tail_bg.png'),
  require('./skin/mo/tail_icon_main.png'),
  require('./skin/mo/tail_icon_selected_main.png'),
  require('./skin/mo/tail_icon_channel.png'),
  require('./skin/mo/tail_icon_selected_channel.png'),
  require('./skin/mo/tail_icon_myself.png'),
  require('./skin/mo/tail_icon_selected_myself.png'),
  require('./skin/mo/head_bg.jpg')
];


export interface IThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<IThemeProviderProps> = ({children}) => {
  const [theme, setTheme] = useState<ThemeTypes>(ThemeTypes.ZAO);
  const [themeData, setThemeData] = useState<ITheme>({
    type: ThemeTypes.ZAO,
    data: zao.data,
    assets: ZaoImg
  });
  const changeTheme = (t: ThemeTypes) => {
    switch (t) {
      case ThemeTypes.MI:
        setThemeData({
          ...themeData,
          type: ThemeTypes.MI,
          data: mi.data,
          assets: MiImg
        });
        break;
      case ThemeTypes.MO:
        setThemeData({
          ...themeData,
          type: ThemeTypes.MO,
          data: mo.data,
          assets: MoImg
        });
        break;
      case ThemeTypes.UN:
        setThemeData({
          ...themeData,
          type: ThemeTypes.UN,
          data: un.data,
          assets: UNImg
        });
        break;
      case ThemeTypes.WAN:
        setThemeData({
          ...themeData,
          type: ThemeTypes.WAN,
          data: wan.data,
          assets: WanImg
        });
        break;
      case ThemeTypes.ZAO:
        setThemeData({
          ...themeData,
          type: ThemeTypes.ZAO,
          data: zao.data,
          assets: ZaoImg
        });
        break;
    }
    setTheme(t);
  };

  const value: ThemeContextType = {
    theme: themeData,
    changeTheme
  };
  return <ThemeContext.Provider value={value}>
    {children}
  </ThemeContext.Provider>;
};
