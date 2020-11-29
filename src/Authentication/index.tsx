import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from '../components/Navigation';

import Onboarding, {assets as onboardingAssets} from './Onboarding';
import Welcome, {assets as welcomeAssets} from './Welcome';
import Login from './Login';
export const assets = [...onboardingAssets, welcomeAssets]

const AuthenticantionStack  = createStackNavigator<Routes>();
export const AuthenticationNavigator = () => (
  <AuthenticantionStack.Navigator headerMode="none">
    <AuthenticantionStack.Screen  name="Onboarding" component={Onboarding} />
    <AuthenticantionStack.Screen  name="Welcome" component={Welcome} />
    <AuthenticantionStack.Screen  name="Login" component={Login} />
  </AuthenticantionStack.Navigator>
);