import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Onboarding, Welcome} from './src/Authentication';
import {LoadAssets, Theme} from './src/components'

import {ThemeProvider} from '@shopify/restyle';

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf.html"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf.html"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf.html"),
};

const AuthenticantionStack  = createStackNavigator();
const AuthenticationNavigator = () => (
  <AuthenticantionStack.Navigator headerMode="none">
    <AuthenticantionStack.Screen  name="Onboarding" component={Onboarding} />
    <AuthenticantionStack.Screen  name="Welcome" component={Welcome} />
  </AuthenticantionStack.Navigator>
);

export default function App() {
  return (
    <ThemeProvider {...Theme}>
        <LoadAssets {...{fonts}}>
        <AuthenticationNavigator />
        </LoadAssets>
    </ThemeProvider>
  
  );
}
