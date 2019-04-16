import * as ReactNavigation from 'react-navigation'
import { createStackNavigator } from "react-navigation";

import ProfileScreen from "./../screens/profile/ProfileScreen";

export const profileStackNavigation = (defaultRoute) => createStackNavigator(
  {
    ProfileScreen: {
      screen: ProfileScreen
    }
  },
  {
    initialRouteName: defaultRoute || "ProfileScreen",
    headerMode: "none",
  }
);
