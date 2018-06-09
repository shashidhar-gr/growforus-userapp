import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import { Login } from './screens/Login';
import { Registration } from './screens/Registration';
import { HomeRouter } from './HomeRouter';
import { Profile } from './screens/Profile'
import { Component } from 'react';
import { View, Text } from 'react-native';

export const SignedOut = createStackNavigator(
  {
    'Registration': Registration,
    'SignIn': Login
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#1d6dba',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

export const SignedIn = createBottomTabNavigator({
  Home: HomeRouter,
  Profile: Profile
});

export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};

