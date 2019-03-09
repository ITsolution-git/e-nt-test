import { createStackNavigator } from "react-navigation";
import Login from "./../screens/auth/login";
import Signup from "./../screens/auth/signup";

export const loginNavigation = createStackNavigator(
  {
    login: {
      screen: Login
    },
    signup: {
      screen: Signup
    }
  },
  {
    headerMode: "none"
  }
));

//More about header Mode: https://reactnavigation.org/docs/en/stack-navigator.html
