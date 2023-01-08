import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {BaseTheme, ThemeProvider} from './src/theme';
import config from './nativebase.config';
import {NativeRouter} from "react-router-native";
import {Root} from './src/components/RootComponent';
import {ApiProvider} from './src/api';

export default function App() {
  return (
    <NativeBaseProvider theme={BaseTheme} config={config}>
      <NativeRouter>
        <ApiProvider>
          <ThemeProvider>
            <Root/>
          </ThemeProvider>
        </ApiProvider>
      </NativeRouter>
    </NativeBaseProvider>
  );
}
