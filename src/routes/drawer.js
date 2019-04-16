import { createDrawerNavigator, createBottomTabNavigator } from "react-navigation";
import { Icon, Input, Button, Text } from 'react-native-elements';
import React, { PureComponent, Fragment } from "react";

import { homeStackNavigation } from "./home";
import { searchStackNavigation } from "./search";
// import LearnStack from "./learn";
// import NotificationStack from "./notification";
import { profileStackNavigation } from "./profile";

import DrawerSidebar from '../components/layouts/DrawerSidebar';
// import EntreTabbar from '../components/layouts/EntreTabbar';

const tabRouteConfigs = (settings) => {
  return {
    HomeTab: {
      screen: homeStackNavigation(settings.defaultHomeRoute)
    },
    SearchTab: {
      screen: searchStackNavigation()
    },
    ProfileTab: {
      screen: profileStackNavigation()
    }
  }
};
  

const tabConfigs = ['HomeTab', 'SearchTab', 'ProfileTab'];

const createTab = (settings) => {
  return createBottomTabNavigator(
    tabRouteConfigs(settings),
    {
      headerMode: "none",
      swipeEnabled: true,

      // tabBarComponent: EntreTabbar,

      tabBarOptions: {
        activeTintColor: '#000000',
        inactiveTintColor: '#B2B2B2',
        showLabel: false,
        style: {
          height: 40
        }
      },

      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'HomeTab') {
            return <Icon name={'home'} size={25} color={tintColor} />;
          } else if (routeName === 'SearchTab') {
            return <Icon name={'search'} size={25} color={tintColor} />;
          } else if (routeName === 'ProfileTab') {
            return <Icon name={'account'} type={'material-community'} size={25} color={tintColor} />;
          }
        }
      }),
    }
  );
}


export const drawerNavigation = createDrawerNavigator(
  {
    HomeDrawer: {
      screen: createTab({
        tabName: 'HomeTab',
        defaultHomeRoute: 'HomeScreen'
      })
    },
    // SupportDrawer: {
    //   screen: createTab({
    //     tabName: 'SupportTab',
    //     defaultHomeRoute: 'SupportScreen'
    //   })
    // },

    // SettingsDrawer: {
    //   screen: createTab({
    //     tabName: 'SettingsTab',
    //     defaultHomeRoute: 'SettingsScreen'
    //   })
    // },

    // TOSDrawer: {
    //   screen: createTab({
    //     tabName: 'TOSTab',
    //     defaultHomeRoute: 'TOSScreen'
    //   })
    // },
    ProfileDrawer: {
      screen: createTab({
        tabName: 'ProfileTab',
        defaultHomeRoute: 'SupportScreen'
      })
    },
  },
  {
    headerMode: "none",
    initialRouteName: 'HomeDrawer',
    navigationOptions: {
      headerVisible: false,

    },
    contentComponent: DrawerSidebar,
    drawerWidth: 300,
  }
)
