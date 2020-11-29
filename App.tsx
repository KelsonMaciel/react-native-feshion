import * as React from 'react';
import {
  assets as AuthenticationAssets,
  AuthenticationNavigator
} from './src/Authentication';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {LoadAssets, theme} from './src/components'

import {ThemeProvider} from '@shopify/restyle';

const assets =  [...AuthenticationAssets];

const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-SemiBold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
};

export default function App() {
  return (
    <ThemeProvider {...{theme}}>
        <LoadAssets {...{fonts, assets}}>
          <SafeAreaProvider>
            <AuthenticationNavigator />
          </SafeAreaProvider>
        </LoadAssets>
    </ThemeProvider>
  
  );
}
