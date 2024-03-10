import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../../screens/home/Home";
import DetailNavigation from "../details";

const HomeStack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={DetailNavigation} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;
