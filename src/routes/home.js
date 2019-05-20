import * as ReactNavigation from 'react-navigation'
import { createStackNavigator } from "react-navigation";

import HomeScreen from "./../screens/home/HomeScreen";
import PostScreen from "./../screens/home/PostScreen";
import SupportScreen from "./../screens/home/SupportScreen";
import SettingsScreen from "./../screens/home/SettingsScreen";
import TOSScreen from "./../screens/home/TOSScreen";
import PrivacyPolicyScreen from "./../screens/home/PrivacyPolicyScreen";

export const homeStackNavigation = (defaultRoute) => createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen
    },
    PostScreen: {
      screen: PostScreen
    },
    SupportScreen: {
      screen: SupportScreen
    },
    SettingsScreen: {
      screen: SettingsScreen
    },
    TOSScreen: {
      screen: TOSScreen
    },
    PrivacyPolicyScreen: {
      screen: PrivacyPolicyScreen
    }
  },
  {
    initialRouteName: defaultRoute || "SettingsScreen",
    // initialRouteName: "PrivacyPolicyScreen",
    headerMode: "none",
  }
);
