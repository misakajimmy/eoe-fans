import {Box, Button, Divider, Icon, IconButton, Input, Text} from 'native-base';
import {Image, StatusBar} from 'react-native';
import Constants from "expo-constants";
import React, {useState} from 'react';
import {useTheme} from '../theme';
import {AntDesign} from '@expo/vector-icons';
import {useNavigate} from 'react-router-native';
import {VideoOriginal} from './videoPage/VideoOriginal';

export enum CopyrightEnum {
  Original = 1,
  Reproduced = 2,
}

export function Video() {
  const navigate = useNavigate();
  const [copyright, setCopyright] = useState<CopyrightEnum>(1);
  const navigateSetting = () => {
    navigate(`/setting`);
  };
  const {theme} = useTheme();
  const assets = theme.assets;

  const onSwitchCopyright = (c: CopyrightEnum) => {
    setCopyright(c);
  };

  return <Box>
    <Box style={{
      height: 56 + Constants.statusBarHeight,
      backgroundColor: '#212121'
    }}>
      <StatusBar backgroundColor={'transparent'} translucent={true}/>
      <Image
        key={assets[assets.length - 1]}
        source={assets[assets.length - 1]}
        style={{
          width: '100%',
          height: 56 + Constants.statusBarHeight,
        }}
      />
      <Box
        position={'absolute'}
        display={'flex'}
        flexDirection={'row'}
        pl={4}
        pr={4}
        mt={2}
        style={{
          width: '100%',
          justifyContent: 'space-between',
          paddingTop: Constants.statusBarHeight,
        }}
      >
        <Box
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Button
            width={10}
            h={10}
            borderRadius={24}
            onTouchStart={navigateSetting}
          >
          </Button>
        </Box>
        <Box
          flexDirection={'row'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box
            onTouchStart={() => {
              onSwitchCopyright(CopyrightEnum.Original);
            }}
            h={'40px'}
          >
            <Text
              fontSize={24}
              fontWeight={'bold'}
              color={'warmGray.600'}
            >
              二创
            </Text>
            {
              copyright === CopyrightEnum.Original &&
              <Divider
                  thickness={2}
              />
            }
          </Box>
          <Box
            h={'40px'}
            ml={2}
            onTouchStart={() => {
              onSwitchCopyright(CopyrightEnum.Reproduced);
            }}
          >
            <Text
              fontSize={24}
              fontWeight={'bold'}
              color={'warmGray.600'}
            >
              切片
            </Text>
            {
              copyright === CopyrightEnum.Reproduced &&
              <Divider
                  thickness={2}
              />
            }
          </Box>
        </Box>
        <Box
          justifyContent={'center'}
          alignItems={'center'}
        >
          <IconButton
            width={10}
            h={10}
            icon={
              <Icon size={6} color={'coolGray.50'} as={AntDesign} name={'search1'}/>
            }
            color={'coolGray.50'}
            onTouchStart={navigateSetting}
          >
          </IconButton>
        </Box>
      </Box>
    </Box>
    <VideoOriginal/>
  </Box>
}
