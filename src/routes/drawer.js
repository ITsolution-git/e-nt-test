import { createDrawerNavigator } from "react-navigation";
import HomeScreen from "./../screens/main/HomeScreen";

import DrawerSidebar from '../components/layouts/DrawerSidebar';

export const drawerNavigation = createDrawerNavigator(
  {
    HomeScreen: {
      screen: HomeScreen
    },
  },
  {
    headerMode: "none",
    initialRouteName: 'HomeScreen',
    navigationOptions: {
      headerVisible: false,

    },
    contentComponent: DrawerSidebar,
    drawerWidth: 300,
  }
)
