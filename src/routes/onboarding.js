import { createStackNavigator } from "react-navigation";
import WelcomeScreen from "./../screens/onboarding/WelcomeScreen";

export const onboardingNavigation = createStackNavigator(
  {
    WelcomeScreen: {
      screen: WelcomeScreen
    },
  },
  {
    headerMode: "none",
    initialRouteName: 'WelcomeScreen',
    navigationOptions: {
      headerVisible: false,
    }
  }
)

//More about header Mode: https://reactnavigation.org/docs/en/stack-navigator.html
