import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import SinglePlayer from "./src/screens/SinglePlayer";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Single: SinglePlayer
  },
  {
    initialRouteName: 'Home',
    headerMode:"none"
  }
);

export default createAppContainer(navigator);