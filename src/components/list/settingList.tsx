import {
  Box,
  Center,
  ChevronRightIcon,
  Divider,
  Heading,
  HStack, Icon,
  Text,
  useColorModeValue,
  useToken,
  VStack
} from 'native-base';
import {useTheme} from '../../theme';


export interface ISettingListProps {
  id: string;
  name: string;
  items: ISettingListItem[];
}

export interface ISettingListItem {
  icon: JSX.Element;
  id: string;
  name: string;
  onTap: () => any;
}

export function SettingList(props: ISettingListProps) {
  const {id, name, items} = props;
  const {theme} = useTheme();
  const [lightBg, darkBg] = useToken(
    'colors',
    ['coolGray.50', 'blueGray.900'],
    'blueGray.900',
  );
  const bgColor = useColorModeValue(lightBg, darkBg);
  return (
    <VStack
      backgroundColor={'white'}
    >
      <Heading
        pl={16}
        pt={4}
        pb={2}
        fontSize="16"
        color={'green.400'}
      >
        {name}
      </Heading>
      <Box
        width={'100%'}
      >
        <VStack width={'100%'} mb={2} space={1} alignItems="center">
          {
            items.map(item => {
              return (
                <HStack
                  key={item.id}
                  width={'100%'}
                  pl={4}
                  pr={4}
                  onTouchEnd={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    item.onTap();
                  }}
                  justifyContent={'space-between'}
                >
                  <Box flexDirection={'row'} alignItems={'center'}>
                    <Box w={12}>
                      {item.icon}
                    </Box>
                    <Text
                      color="coolGray.600"
                    >
                      {item.name}
                    </Text>
                  </Box>
                  <Box flexDirection={'row'} alignItems={'center'}>
                    <ChevronRightIcon size={4}/>
                  </Box>
                </HStack>
              );
            })
          }
        </VStack>
      </Box>
      <Divider thickness={0.5}/>
    </VStack>
  );
}
