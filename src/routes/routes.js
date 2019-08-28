import * as ReactNavigation from 'react-navigation'
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { connect } from 'react-redux'
import React, { PureComponent, Fragment } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
// Note: Removed this from Npm dependencies also 
import firebase from 'react-native-firebase';
import { loginNavigation } from './login';
import { drawerNavigation } from './drawer';
import { onboardingNavigation } from './onboarding';

import AuthChecker from '../screens/AuthChecker';

const allRoutes = createSwitchNavigator(
  {
    authChecker: {
      screen: AuthChecker
    },
    Auth: {
      screen: loginNavigation
    },
    drawer: {
      screen: drawerNavigation
    },
    onboarding: {
      screen: onboardingNavigation
    }
  },
  {
    initialRouteName: 'authChecker'
  }
);

const Navigator = createAppContainer(allRoutes);


// const AppNavigator = connect(state => ({
//   state: state.nav,
// }))(createReduxContainer(allRoutes, 'root'));

export default Navigator;