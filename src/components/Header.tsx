import React from 'react';
import {Box, IconButton, Icon, HStack, ArrowBackIcon, Heading} from 'native-base';
import {useNavigate} from 'react-router-native';
import {Image, StatusBar} from 'react-native';
import Constants from 'expo-constants';
import {useTheme} from '../theme';


export function Header(
  {
    title,
  }: {
    title: string;
  }) {
  const {theme} = useTheme();
  const assets = theme.assets;
  const navigate = useNavigate();
  return (
    <Box>
      <Image
        key={assets[assets.length - 1]}
        source={assets[assets.length - 1]}
        style={{
          width: '100%',
          height: 100,
          position: 'absolute'
        }}
      />
      <StatusBar backgroundColor={'transparent'} translucent={true}/>
      <HStack
        alignItems="center"
        py={2}
        // mb={{base: 8, md: 0}}
        width={{base: '100%', lg: '768px'}}
        alignSelf={{base: 'stretch', md: 'center'}}
        ml={{base: 0, md: '-16px'}}
        style={{
          paddingTop: Constants.statusBarHeight,
        }}
      >
        <IconButton
          position="relative"
          left={{base: 0, md: 1}}
          icon={
            <ArrowBackIcon/>
          }
          onTouchStart={()=>{
            navigate(-1);
          }}
          _pressed={{bg: 'transparent'}}
          colorScheme="coolGray"
        />

        <Heading
          ml={4}
          mx="auto"
          fontSize={18}
          _light={{
            color: 'trueGray.700',
          }}
          _dark={{
            color: 'trueGray.700',
          }}
        >
          {title}
        </Heading>
        {/* {isLargeScreen ? (
					<IconButton
						size="md"
						icon={
							<Icon
								as={
									colorMode == 'dark' ? (
										<Ionicons name="sunny" color="white" />
									) : (
										<Ionicons name="moon" color="black" />
									)
								}
								size="lg"
							/>
						}
						onPress={toggleColorMode}
						mr={{ base: 3, md: 0 }}
					/>
				) : (
					<></>
				)} */}
      </HStack>
    </Box>
  );
}
