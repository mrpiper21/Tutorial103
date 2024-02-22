import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/home/Home";

const protectedStack = createNativeStackNavigator();

const ProtectedNavigation = () => {
  return (
    <NavigationContainer>
      <protectedStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <protectedStack.Screen name="Home" component={Home} />
      </protectedStack.Navigator>
    </NavigationContainer>
  );
};

export default ProtectedNavigation;