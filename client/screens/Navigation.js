import { React } from 'react';
import { TabNavigtor } from 'react-native';

import {  FarmList } from "../screens/FarmList";
import {  MyFarm } from "../screens/Home";
import {  Profile } from "../screens/Registration";

export const Tab = TabNavigator({
    Home: {
      screen: FarmList,
    },
    MyFarm: {
      screen: MyFarm,
    },
    Profile: {
      screen: Profile,
    }
  }, {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: '#f2f2f2',
      activeBackgroundColor: "#2EC4B6",
      inactiveTintColor: '#666',
      labelStyle: {
        fontSize: 22,
        padding: 12
      }
    }
  });