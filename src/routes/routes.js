import { createSwitchNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import { loginNavigation } from "./login";

 const allRoutes = createSwitchNavigator(
  {
    home: {
      screen: loginNavigation
    }
  },
  {
    initialRouteName: "home"
  }
);

const App = createAppContainer(allRoutes);


export default App