import * as ReactNavigation from 'react-navigation'
import { createStackNavigator } from "react-navigation";

import LearningScreen from "./../screens/learning/LearningScreen";
import VideoPlayScreen from "./../screens/learning/VideoPlayScreen";

export const learningStackNavigation = (defaultRoute) => createStackNavigator(
	{
		LearningScreen: {
			screen: LearningScreen
		},
		VideoPlayScreen: {
			screen: VideoPlayScreen
		}
	},
	{
		initialRouteName: defaultRoute || "LearningScreen",
  	headerMode: "none",
	}
);
