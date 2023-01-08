import React, {useEffect} from "react";
import {Box, Center} from 'native-base';
import {Image} from 'react-native';
import {FooterItem} from './FooterItem';
import {useTheme} from '../../theme';
import {useNavigate} from "react-router-native";


export interface IFooterProps {

}

export function Footer(props: IFooterProps) {
  const [index, setIndex] = React.useState('video');
  const {theme, changeTheme} = useTheme();
  const navigate = useNavigate();

  const assets = theme.assets;

  useEffect(() => {
    // setTimeout(() => {
    //   changeTheme(ThemeTypes.ZAO);
    // }, 1000);
  }, []);

  const onSwitch = (id: string) => {
    setIndex(id);
    navigate(`/${id}`);
  };

  if (!!assets && assets.length > 0) {
    return (
      <Box
        position={'absolute'}
        bottom={0}
        width={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Image
          key={assets[0]}
          source={assets[0]}
          style={{
            width: '100%',
            height: 40,
          }}
        />

        <Box
          position={'absolute'}
          bottom={0}
          pb={'8px'}
          h={'48px'}
          width={'100%'}
          maxW={['400px']}
          flexDirection={'row'}
          alignItems={'center'}
        >

          <Center
            flex={1}
            onTouchStart={() => {
              onSwitch('video');
            }}
          >
            <FooterItem
              id={'video'}
              name={'视频'}
              index={index}
              defaultImg={assets[1]}
              selectedImg={assets[2]}
            />
          </Center>
          <Center
            flex={1}
            onTouchStart={() => {
              onSwitch('picture')
            }}
          >
            <FooterItem
              id={'picture'}
              name={'图库'}
              index={index}
              defaultImg={assets[3]}
              selectedImg={assets[4]}
            />
          </Center>
          <Center
            flex={1}
            onTouchStart={() => {
              onSwitch('novel')
            }}
          >
            <FooterItem
              id={'novel'}
              name={'音乐'}
              index={index}
              defaultImg={assets[5]}
              selectedImg={assets[6]}
            />
          </Center>
        </Box>
      </Box>
    );
  } else {
    return <Box></Box>;
  }
}
