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

   componentDidMount () {
     firebase.auth().onAuthStateChanged((user) => {
       console.log(user, !this.props.signup_process_intial, !this.props.isAuthenticated)
      if (user && this.props.isAuthenticated && this.props.signup_process_intial) {
        return this.props.navigation.navigate('drawer');
      } else if (user && !this.props.signup_process_intial && !this.props.isAuthenticated) {
        console.log(`user not ddsigned in`)
        return this.props.navigation.navigate('YourPhoneNumber');
      } else {
        console.log(`user not signed in`)
        return this.props.navigation.navigate('Landing');
        // No user is signed in.
      }
    });
   }

   async signout () {
     //TODO: Test
     console.log(`Inside Signout`)
    firebase.auth().signout()
   }

     render() {
      return (
          <View>
            	<TouchableOpacity onPress={()=> this.signout()}>
             <Text style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", height: 500, marginTop: 100}}> Loading...</Text>
             </TouchableOpacity>
          </View>
      );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.profile.isAuthenticated,
    signup_process_intial: state.profile.signup_process_intial
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