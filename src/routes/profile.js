import * as ReactNavigation from 'react-navigation'
import { createStackNavigator } from "react-navigation";

import ProfileScreen from "./../screens/profile/ProfileScreen";
import FollowersScreen from "./../screens/profile/FollowersScreen";

export const profileStackNavigation = (defaultRoute) => createStackNavigator(
	{
		ProfileScreen: {
			screen: ProfileScreen
		},

		FollowersScreen: {
			screen: FollowersScreen
		},
	},
	{
		initialRouteName: defaultRoute || "ProfileScreen",
		headerMode: "none",
	}
);
