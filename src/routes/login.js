import { createStackNavigator } from "react-navigation";
import Login from "./../screens/auth/Login";
import Signup from "./../screens/auth/Signup";
import Landing from '../screens/auth/Landing';
import YourPhoneNumber from '../screens/auth/YourPhoneNumber';
import ForgotPassword from '../screens/auth/ForgotPassword';

export const loginNavigation = createStackNavigator(
  {
    Landing: {
      screen: Landing
    },
    Login: {
      screen: Login
    },
    Signup: {
      screen: Signup
    },
    YourPhoneNumber: {
      screen: YourPhoneNumber
    },
    ForgotPassword: {
      screen: ForgotPassword
    }
  },
  {
    headerMode: "none",
    initialRouteName: 'Landing',
    navigationOptions: {
      headerVisible: false,
    }
  }
)

//More about header Mode: https://reactnavigation.org/docs/en/stack-navigator.html
