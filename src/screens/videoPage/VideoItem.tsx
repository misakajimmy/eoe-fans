import {Box, Center, Icon, Text, VStack, ZStack} from "native-base";
import {Api} from '../../api';
import IVideo = Api.Video.IVideo;
import {Image} from 'react-native';
import React from 'react';
import {Foundation, Entypo} from '@expo/vector-icons';
import {secondToDate} from '../../components/time';

export interface IVideoItemProps {
  video: IVideo;
}

export function VideoItem({video}: IVideoItemProps) {
  console.log(video);
  return (
    <Box
      flex={1}
      rounded="2xl"
      position="relative"
      style={{
        minHeight: 192
      }}
      w="100%"
    >
      <Box
        borderRadius={4}
        borderWidth={0.5}
        w="100%"
        h='100%'
        overflow={'hidden'}
        borderColor={'warmGray.200'}
      >
        <ZStack
          style={{
            height: 128
          }}
        >
          <Image
            source={{
              uri: video.pic
            }}
            style={{
              width: '100%',
              height: 128,
              position: 'absolute',
            }}
          />
          <Box
            w={'100%'}
            height={32}
            justifyContent={'flex-end'}
            ml={0}
            pb={1}
          >
            <Box
              flexDirection={'row'}
              justifyContent={'space-between'}
              pl={2}
              pr={2}
            >
              <Box
                flexDirection={'row'}
                alignItems={'center'}
              >
                <Icon
                  size={2} mr={0.5} color={'white'} as={Entypo} name={'controller-play'}
                  borderWidth={0.5}
                  borderStyle={'solid'}
                  borderColor={'white'}
                  borderRadius={2}
                />
                <Text
                  color={'white'}
                  fontSize={10}
                >
                  {video.view < 10000 ? video.view : (video.view / 10000).toFixed(1).toString() + '万'}
                </Text>
                <Icon ml={2} mr={0.5} size={2} color={'white'} as={Entypo} name={'list'}
                      borderWidth={0.5}
                      borderStyle={'solid'}
                      borderColor={'white'}
                      borderRadius={2}
                />
                <Text
                  color={'white'}
                  fontSize={10}
                >
                  {video.danmaku}
                </Text>
              </Box>
              <Box>
                <Text
                  color={'white'}
                  fontSize={10}
                >
                  {secondToDate(parseInt(video.danmaku.toString()))}
                </Text>
              </Box>
            </Box>
          </Box>
        </ZStack>
        <Box>
          <Text
            height={'36px'}
            fontSize={12}
            numberOfLines={2}
            ellipsizeMode={'tail'}
            ml={2}
            mr={2}
            mt={2}
            mb={1}
          >
            {video.title}
          </Text>
        </Box>
        <Box
          ml={2}
          mr={2}
          mb={1}
          alignItems={'center'}
          flexDirection={'row'}
        >
          <Center
            style={{
              paddingLeft: 2,
              paddingRight: 2,
            }}
            height={'14px'}
            borderWidth={0.5}
            borderStyle={'solid'}
            borderColor={'warmGray.400'}
            borderRadius={4}
          >
            <Text
              fontSize={8}
              color={'warmGray.400'}>
              UP
            </Text>
          </Center>
          <Text
            ml={0.5}
            fontSize={12}
            color={'warmGray.400'}
          >
            {video.name}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
