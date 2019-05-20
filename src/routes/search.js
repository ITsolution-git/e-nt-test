import * as ReactNavigation from 'react-navigation'
import { createStackNavigator } from "react-navigation";

import SearchScreen from "./../screens/search/SearchScreen";

export const searchStackNavigation = (defaultRoute) => createStackNavigator(
	{
		SearchScreen: {
			screen: SearchScreen
		}
	},
	{
		initialRouteName: defaultRoute || "SearchScreen",
    headerMode: "none",
	}
);
