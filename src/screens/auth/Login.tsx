import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome from "react-native-vector-icons//FontAwesome";
const Login = () => {
  return (
    <View className="flex-1 px-5 items-center">
      {/**Left arrow Header*/}
      <View className="top-20 right-20">
        <AntDesign size={24} name="arrowleft" />
        <View className="top-7 space-y-2">
          <Text className="font-bold text-2xl">Welcome to Homelyn</Text>
          <Text>Please login to your account</Text>
        </View>
      </View>

      {/**form input */}
      <View className="mt-40">
        <View className="flex flex-col">
          <Text className="font-bold text-lg">Phone Number</Text>
          <View
            className="flex flex-row items-center space-x-3 justify-start top-3 border-2 border-gray-400 rounded-xl p-1"
            style={{ width: hp(46) }}
          >
            <Feather name="phone" size={20} />
            <TextInput
              className="py-3"
              placeholder="Enter your number"
              style={{ width: hp(40) }}
            />
          </View>
        </View>
        <View className="flex flex-col top-8">
          <Text className="font-bold text-lg">Password</Text>
          <View
            className="flex flex-row items-center space-x-3 justify-start top-3 border-2 border-gray-400 rounded-xl p-1"
            style={{ width: hp(46) }}
          >
            <EvilIcons name="lock" size={35} />
            <TextInput
              className="py-3 "
              placeholder="Enter your Password"
              style={{ width: hp(40) }}
            />
          </View>
          <View className="top-6 flex-row justify-end">
            <Text className="text-[blue]">forgot Password?</Text>
          </View>
        </View>
      </View>
      {/**Login btn */}
      <TouchableOpacity
        style={{
          backgroundColor: "aqua",
          borderRadius: 30,
          width: hp(45),
          top: hp(15),
          height: hp(7),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      <View className="top-44">
        <Text>Or login with</Text>
      </View>
      {/**auth logos */}
      <View className="flex flex-row space-x-14 top-56 ">
        <View className="flex flex-row space-x-4 items-center justify-center p-5 w-36 rounded-full bg-white">
          <AntDesign size={24} name="google" />
          <Text className="text-lg">Google</Text>
        </View>
        <View className="flex flex-row space-x-4  items-center justify-center p-5 w-36 bg-blue-700 rounded-full">
          <FontAwesome size={24} name="facebook" color='white'/>
          <Text className="text-lg text-white ">Facebook</Text>
        </View>
      </View>

      {/**Alternate details */}
      <View style={{ top: hp(27)}}>
        <Text>Don’t have an account?
            <Text className="text-blue-500"> Register</Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;
