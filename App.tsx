import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Onboarding, Welcome} from './src/Authentication';
import {LoadAssets, theme} from './src/components'

import {ThemeProvider} from '@shopify/restyle';

const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-SemiBold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
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
    <ThemeProvider {...{theme}}>
        <LoadAssets {...{fonts}}>
        <AuthenticationNavigator />
        </LoadAssets>
    </ThemeProvider>
  
  );
}
