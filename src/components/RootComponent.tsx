import React, {useEffect} from 'react';
import {Box, useColorModeValue, useToken, View} from 'native-base';
import {Footer} from './footer/Footer';
import {RootRouter} from '../routers';
import {useLocation} from 'react-router-native';
import {useApi} from '../api';

export const Root = () => {
  const location = useLocation();
  const {requestVideo} = useApi();
  const [lightBg, darkBg] = useToken(
    'colors',
    ['coolGray.50', 'blueGray.900'],
    'blueGray.900',
  );
  const bgColor = useColorModeValue(lightBg, darkBg);
  console.log(bgColor);
  useEffect(()=>{
    requestVideo({
      order: 'pubdate',
      page: 0
    })
  },[]);

  return (
    <View
      // w={'100%'}
      h={'100%'}
      style={{
        backgroundColor: bgColor
      }}
      justifyContent={'space-between'}>
      <Box
      >
        <RootRouter/>
      </Box>
      {
        (['/', '/picture', '/videoPage', '/novel'].includes(location.pathname)) &&
        <Footer/>
      }
    </View>
  );
};
