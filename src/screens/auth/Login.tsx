import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import Button from "../../widgets/Button";

const Login = () => {
  const navigation = useNavigation() as any;

  return (
    <View
      style={{
        marginTop: hp(5),
      }}
      className="flex-1 mx-4"
    >
      {/**title message */}
      <View className="space-y-3">
        <Text className="font-semibold text-2xl">Welcome to Homelyn</Text>

        <Text className="text-[#A7AEC1]">Please Login into your account</Text>
      </View>

      {/**Details Input area  */}
      <View className="space-y-5 w-full h-full" style={{ marginTop: hp(10) }}>
        <View className="space-y-4">
          {/**Phone Details  */}
          <Text className="font-bold text-base">Phone Number</Text>

          <View>
            <TextInput
              className="bg-white border-1 p-3 rounded-2xl"
              placeholder="Enter your phone number"
            />
          </View>
        </View>

        <View className="space-y-4">
          {/**Phone Details  */}
          <Text className="font-bold text-base">Password </Text>

          <View>
            <TextInput
              className="bg-white border-1 p-3 rounded-2xl"
              placeholder="Enter your phone number"
            />
          </View>
        </View>

        <View className="flex items-end">
          <Text className="text-blue-400">Forgotten Password? </Text>
        </View>

        {/**Login Button */}
        <View
          style={{ paddingTop: hp(7) }}
          className="flex justify-center items-center"
        >
          <Button name="Login" screenName="Home" />
        </View>
        
        <View style={{ top: hp(4) }}>
          <Text>
            Don't have an account?
            <Text
              onPress={() => navigation.navigate("Register")}
              className="text-blue-600"
            >
              {" "}
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Login;
