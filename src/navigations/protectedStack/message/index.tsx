import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Message from "../../../screens/home/Message";
import Chat from "../../../screens/home/Chat";

const MessageStack = createNativeStackNavigator();

const MessageNavigation = () => {
  return (
    <MessageStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MessageStack.Screen name="Message" component={Message} />
      <MessageStack.Screen name="Chat" component={Chat} />
    </MessageStack.Navigator>
  );
};

export default MessageNavigation;
