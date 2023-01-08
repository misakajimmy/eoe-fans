import {Box, Center, Icon, Text, VStack} from "native-base";
import {Header} from '../../components/Header';
import {SettingList} from '../../components/list';
import {Ionicons, AntDesign } from '@expo/vector-icons';
import {useState} from 'react';
import {SettingTheme} from './settingTheme';

export function Setting() {
  const [themeSetting, setThemeSetting] = useState(false);
  console.log('setting')
  return <Box
  >
    <Header title={'设置'}/>
    <Box>
      <SettingList
        id={'general'}
        name={'常规'}
        items={[
          {
            id: 'theme',
            name: '主题',
            icon: <Icon size={6} as={Ionicons} name={'color-palette'}/>,
            onTap: () => {
              setThemeSetting(true);
            }
          }
        ]}
      />
      <SettingList
        id={'about'}
        name={'关于'}
        items={[
          {
            id: 'about',
            name: '关于我们',
            icon: <Icon size={6} as={AntDesign} name={'infocirlceo'}/>,
            onTap: () => {
              setThemeSetting(true);
            }
          }
        ]}
      />
    </Box>
    <SettingTheme isOpen={themeSetting} onClose={()=>{
      console.log('close');
      setThemeSetting(false);
    }}/>
  </Box>;
}
