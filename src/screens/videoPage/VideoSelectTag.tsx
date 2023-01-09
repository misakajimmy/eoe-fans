import {Center, HStack, Text} from 'native-base';
import {Image} from 'react-native';
import {MemberEnums, Members} from '../../types';
import {useTheme} from '../../theme';
import {useState} from 'react';

export interface IVideoSelectTag {
  onChange: (selected: MemberEnums | undefined) => void;
}

export function VideoSelectTag({onChange}: IVideoSelectTag) {
  const {theme} = useTheme();
  const [selected, setSelected] = useState<MemberEnums | undefined>();

  return <HStack
    space={4}
    justifyContent="center"
    ml={2}
    mr={2}
    // flexDirection={'row'}
  >
    {
      [
        {
          id: MemberEnums.ZAO,
          name: Members.zao.FirstName,
          image: require('../../theme/skin/emoji/gogo队.webp')
        },
        {
          id: MemberEnums.UN,
          name: Members.un.FirstName,
          image: require('../../theme/skin/emoji/柚恩蜜.webp')
        },
        {
          id: MemberEnums.WAN,
          name: Members.wan.FirstName,
          image: require('../../theme/skin/emoji/小莞熊.webp')
        },
        {
          id: MemberEnums.MI,
          name: Members.mi.FirstName,
          image: require('../../theme/skin/emoji/酷诺米.webp')
        },
        {
          id: MemberEnums.MO,
          name: Members.mo.FirstName,
          image: require('../../theme/skin/emoji/美人虞.webp')
        }
      ].map((info, index) => {
        return <Center
          flex={1}
          key={info.name}
          borderColor={selected === info.id ? theme.data.tail_color_selected : 'warmGray.400'}
          borderStyle={'solid'}
          borderWidth={0.5}
          borderRadius={12}
          backgroundColor={'white'}
          onTouchStart={() => {
            if (selected !== info.id) {
              setSelected(info.id);
              onChange(info.id)
            } else {
              setSelected(undefined);
              onChange(undefined);
            }
          }}
        >
          <Image
            source={info.image}
            style={{
              height: 40,
              width: 40,
            }}
          />
          <Text
            fontSize={12}
            color={'warmGray.600'}
          >
            {info.name}
          </Text>
        </Center>
      })
    }

  </HStack>
}
