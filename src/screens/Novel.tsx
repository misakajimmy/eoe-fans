import {Box, Select} from 'native-base';
import React from 'react';
import {ThemeTypes, useTheme} from '../theme';
import {Footer} from '../components/footer';

export function Novel() {
  const {changeTheme} = useTheme();
  return <Box>
    Novel
    <Select onValueChange={(v) => changeTheme(v as ThemeTypes)}>
      <Select.Item label="米诺" value={ThemeTypes.MI}/>
      <Select.Item label="柚恩" value={ThemeTypes.UN}/>
      <Select.Item label="露早" value={ThemeTypes.ZAO}/>
      <Select.Item label="莞儿" value={ThemeTypes.WAN}/>
      <Select.Item label="虞莫" value={ThemeTypes.MO}/>
    </Select>
  </Box>
}
