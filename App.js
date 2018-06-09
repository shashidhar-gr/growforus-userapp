import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './client/screens/Login';
import Home from './client/screens/Home';
import Registration from './client/screens/Registration';
import FarmList from './client/screens/FarmList';
import FarmDetails from './client/screens/FarmDetails';
import LandingPage from './client/screens/LandingPage';
import { createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <RootStack />      
    );
  }
}

const RootStack = createStackNavigator(
  {
    'Login': Login,
    'FarmList': FarmList
  },
  {
    initialRouteName: 'Login',
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

// const RootStack = createStackNavigator(
//   {
//     'Home': Home,
//     'Login': Login,
//     'Registration': Registration,
//     'FarmList': FarmList,
//     'FarmDetails': FarmDetails,
//     'LandingPage': LandingPage
//   },
//   {
//     initialRouteName: 'Login',
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: '#1d6dba',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }
//   }
// );
