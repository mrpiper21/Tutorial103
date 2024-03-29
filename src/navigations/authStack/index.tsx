import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../../screens/auth/Login";
import Register from "../../screens/auth/Register";
import Splash from "../../screens/loaders/splash";

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <AuthStack.Screen name="Splash" component={Splash} />
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Register" component={Register} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;
