import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";

const Register = () => {
  return (
    <View className="flex-1 items-start mt-16 p-5">
      {/**Header with left arrow*/}
      <View className="">
        <AntDesign size={24} name="arrowleft" />
        <View className="top-7 space-y-2">
          <Text className="font-bold text-2xl">Welcome to Homelyn</Text>
          <Text>Let's create your account first</Text>
        </View>
      </View>
      {/**Form */}
      <View className="top-20 flex-col space-y-10">
        <View>
          <Text className="font-bold text-lg">Full Name</Text>
          <View
            style={{ width: hp(46), borderRadius: hp(2) }}
            className="flex-row space-x-3 top-6 border-2 border-gray-400 p-4"
          >
            <FontAwesome name="user-o" size={24} color="black" />
            <TextInput placeholder="Enter your username" />
          </View>
        </View>

        <View className="">
          <Text className="font-bold text-lg">Phone number</Text>
          <View
            style={{ width: hp(46), borderRadius: hp(2) }}
            className="flex-row space-x-3 top-6 border-2 border-gray-400 p-4"
          >
            <Feather name="phone" size={24} color="black" />
            <TextInput placeholder="Enter your Phone number" />
          </View>
        </View>

        <View className="">
          <Text className="font-bold text-lg">Password</Text>
          <View
            style={{ width: hp(46), borderRadius: hp(2) }}
            className="flex-row space-x-3 top-6 border-2 border-gray-400 p-4"
          >
            <Feather name="lock" size={24} color="black" />
            <TextInput placeholder="Enter your password" />
          </View>
        </View>
      </View>

      {/**Agree and continue btn */}
      <View className="top-52 items-center justify-center space-y-6">
        <TouchableOpacity
          style={{
            width: hp(36),
            backgroundColor: "black",
            borderRadius: hp(2),
            alignItems: "center",
            justifyContent: "center",
            padding: 23,
            left: 45,
          }}
        >
          <Text className="text-white text-lg">Agree and Continue</Text>
        </TouchableOpacity>
        {/**Footer */}
        <View className="left-10">
          <Text>
            Have an account?
            <Text className="text-blue-600"> Login</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Register;
