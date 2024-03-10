import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./../../../screens/home/Details";
import Message from "./../../../screens/home/Message";
import Chat from "./../../../screens/home/Chat";

const DetailStack = createNativeStackNavigator();

const DetailNavigation = () => {
  return (
    <DetailStack.Navigator
      initialRouteName="Details"
      screenOptions={{
        headerShown: false,
      }}
    >
      <DetailStack.Screen name="details" component={Details} />
      <DetailStack.Screen name="Message" component={Message} />
      <DetailStack.Screen name="Chat" component={Chat} />
    </DetailStack.Navigator>
  );
};

export default DetailNavigation;
