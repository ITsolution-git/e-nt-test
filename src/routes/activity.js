import * as ReactNavigation from 'react-navigation'
import { createStackNavigator } from "react-navigation";

import ActivityScreen from "./../screens/activity/ActivityScreen";

export const activityStackNavigation = (defaultRoute) => createStackNavigator(
	{
		ActivityScreen: {
			screen: ActivityScreen
		}
	},
	{
		initialRouteName: defaultRoute || "ActivityScreen",
		headerMode: "none",
	}
);
