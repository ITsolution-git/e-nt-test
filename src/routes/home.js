import * as ReactNavigation from 'react-navigation'
import { createStackNavigator } from "react-navigation";

import HomeScreen from "./../screens/home/HomeScreen";

export const homeStackNavigation = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen
    }
  },
  {
    initialRouteName: "HomeScreen",
    headerMode: "none",
  }
);
