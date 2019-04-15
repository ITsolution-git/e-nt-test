import * as ReactNavigation from 'react-navigation'
import { createSwitchNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import { connect } from 'react-redux'
import { createReduxContainer } from 'react-navigation-redux-helpers';

import { loginNavigation } from "./login";
import { drawerNavigation } from "./drawer";
import { onboardingNavigation } from "./onboarding";

const allRoutes = createSwitchNavigator(
  {
    auth: {
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
    initialRouteName: "drawer"
  }
);

const Navigator = createAppContainer(allRoutes);


const AppNavigator = connect(state => ({
  state: state.nav,
}))(createReduxContainer(allRoutes, 'root'));

export default Navigator;