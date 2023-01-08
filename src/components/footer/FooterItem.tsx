import {Center} from 'native-base';
import {useTheme} from '../../theme';
import {useEffect, useRef, useState} from 'react';
import {Animated, Image} from 'react-native';

export interface IFooterItemProps {
  id: string;
  name: string;
  index: string;
  defaultImg: any;
  selectedImg: any;
}

export function FooterItem(props: IFooterItemProps) {
  const {id, index, name, defaultImg, selectedImg} = props;
  const {theme} = useTheme();
  const [current, setCurrent] = useState<boolean>(id === index);
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    opacity.setValue(0);
    translateY.setValue(48);
    setCurrent(id === index);
    const animate = Animated.parallel([
      Animated.timing(
        opacity,
        {
          useNativeDriver: true,
          toValue: 1,
          duration: 250
        }
      ),
      Animated.timing(
        translateY,
        {
          useNativeDriver: true,
          toValue: 0,
          duration: 250
        }
      )
    ]);
    animate.start();
  }, [index]);

  // console.log(defaultImg);
  // console.log(selectedImg);
  return (
    <Center
      _text={{
        fontSize: 12,
        color: current ? theme.data.tail_color_selected : theme.data.tail_color
      }}
    >
      {
        current ?
          <Animated.Image
            key={selectedImg}
            style={{
              width: 36,
              height: 36,
              opacity: opacity,
              transform: [{translateY: translateY}]
            }}
            source={selectedImg}/> :
          <Image
            key={defaultImg}
            style={{
              width: 36,
              height: 36
            }}
            source={defaultImg}/>
      }
      {name}
    </Center>
  );
}
