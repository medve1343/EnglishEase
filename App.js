import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import HangMan from "./src/screens/HangMan";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Hang: HangMan,
  },
  {
    initialRouteName: 'Hang',
    headerMode:"none"
  }
);

export default createAppContainer(navigator);