import * as ReactNavigation from 'react-navigation'
import { createStackNavigator } from "react-navigation";

import HomeScreen from "./../screens/home/HomeScreen";
import PostScreen from "./../screens/home/PostScreen";

export const homeStackNavigation = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen
    },
    PostScreen: {
      screen: PostScreen
    }
  },
  {
    initialRouteName: "HomeScreen",
    headerMode: "none",
  }
);
