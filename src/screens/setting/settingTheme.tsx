import {Button, Center, FormControl, Modal, Select} from 'native-base';
import {ThemeTypes, useTheme} from '../../theme';
import React from 'react';

export interface ISettingThemeProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SettingTheme(props: ISettingThemeProps) {
  const {isOpen, onClose} = props;
  const {theme, changeTheme} = useTheme();

  return <Center>
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content maxWidth="400px">
        {/*<Modal.CloseButton />*/}
        <Modal.Header>设置主题</Modal.Header>
        <Modal.Body>
          <Select defaultValue={theme.type} onValueChange={(v) => changeTheme(v as ThemeTypes)}>
            <Select.Item label="米诺" value={ThemeTypes.MI}/>
            <Select.Item label="柚恩" value={ThemeTypes.UN}/>
            <Select.Item label="露早" value={ThemeTypes.ZAO}/>
            <Select.Item label="莞儿" value={ThemeTypes.WAN}/>
            <Select.Item label="虞莫" value={ThemeTypes.MO}/>
          </Select>
        </Modal.Body>
        {/*<Modal.Footer>*/}
        {/*  <Button.Group space={2}>*/}
        {/*    <Button variant="ghost" colorScheme="blueGray" onPress={() => {*/}
        {/*      console.log('aaa');*/}
        {/*      onClose();*/}
        {/*    }}>*/}
        {/*      取消*/}
        {/*    </Button>*/}
        {/*    <Button onPress={() => {*/}
        {/*      console.log('bbb');*/}
        {/*      onClose();*/}
        {/*    }}>*/}
        {/*      保存*/}
        {/*    </Button>*/}
        {/*  </Button.Group>*/}
        {/*</Modal.Footer>*/}
      </Modal.Content>
    </Modal>
  </Center>;
}
