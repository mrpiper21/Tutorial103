import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/home/Home";
import Details from "../../screens/home/Details";
import Message from "../../screens/home/Message";
import Chat from "../../screens/home/Chat";

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
        <protectedStack.Screen name="Details" component={Details} />
        <protectedStack.Screen name="Message" component={Message} />
        <protectedStack.Screen name="Chat" component={Chat} />
      </protectedStack.Navigator>
    </NavigationContainer>
  );
};

export default ProtectedNavigation;
