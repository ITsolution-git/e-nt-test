import * as ReactNavigation from 'react-navigation'
import { createStackNavigator } from "react-navigation";

import SearchScreen from "./../screens/search/SearchScreen";

export const searchStackNavigation = createStackNavigator(
	{
		SearchScreen: {
			screen: SearchScreen
		}
	},
	{
		initialRouteName: "SearchScreen",
    headerMode: "none",
	}
);
