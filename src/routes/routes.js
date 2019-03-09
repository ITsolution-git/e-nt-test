import { createSwitchNavigator, createStackNavigator } from "react-navigation";
import { loginNavigation } from "./login";

export const allRoutes = createSwitchNavigator(
  {
    home: {
      screen: loginNavigation
    }
  },
  {
    initialRouteName: "home"
  }
);
