import * as ReactNavigation from 'react-navigation'
import { createSwitchNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import { connect } from 'react-redux'
import React, { PureComponent, Fragment } from "react";
import { View, Text, TouchableOpacity } from "react-native"
// Note: Removed this from Npm dependencies also 
import firebase from "react-native-firebase";
import { loginNavigation } from "./login";
import { drawerNavigation } from "./drawer";
import { onboardingNavigation } from "./onboarding";




//Protected Routes 

class AuthChecker extends PureComponent {
  constructor() {
    super()

  }
  componentWillMount() {
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user && this.props.isAuthenticated) {
        return this.props.navigation.navigate('drawer');
    //   } else {
    //     return this.props.navigation.navigate('Landing');
    //   }
    // });
  }


  render() {
    return (
      <View>
        <Text>Loading..</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.profile.isAuthenticated,
  }
};


const AuthCheckerRoute = connect(mapStateToProps)(AuthChecker)


const allRoutes = createSwitchNavigator(
  {
    authChecker: {
      screen: AuthCheckerRoute
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
    initialRouteName: "authChecker"
  }
);

const Navigator = createAppContainer(allRoutes);


// const AppNavigator = connect(state => ({
//   state: state.nav,
// }))(createReduxContainer(allRoutes, 'root'));

export default Navigator;