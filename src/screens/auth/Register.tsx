import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import Button from "../../widgets/Button";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: hp(5) }} className="flex-1 mx-4">
      {/**Header with left arrow*/}
      <View className="space-y-3">
        <Text className="font-semibold text-2xl">Welcome to Homelyn</Text>

        <Text className="text-lg text-[#A7AEC1]">
          Let's create your account first
        </Text>
      </View>

      {/**Form */}
      <View className="space-y-5 w-full h-full " style={{ marginTop: hp(10) }}>
        <View className="space-y-4">
          {/**Name Details  */}
          <Text className="text-base font-bold">Full Name</Text>

          <View className=" flex flex-row space-x-3 items-center">
            <FontAwesome name="user-o" size={24} color="black" />
            <TextInput
              className="bg-white border-1 p-3 rounded-2xl"
              placeholder="Enter your full name"
            />
          </View>
        </View>

        <View className="space-y-4">
          {/**Phone Details  */}
          <Text className="text-base font-bold">Phone Number</Text>

          <View className=" flex flex-row space-x-3 items-center">
            <Feather name="phone" size={24} color="black" />
            <TextInput
              className="bg-white border-1 p-3 rounded-2xl"
              placeholder="Enter your number"
            ></TextInput>
          </View>
        </View>

        <View className="space-y-4">
          {/**Password Details  */}
          <Text className="text-base font-bold">Password</Text>

          <View className=" flex flex-row space-x-3 items-center">
            <Feather name="lock" size={24} color="black" />
            <TextInput
              className="bg-white border-1 p-3 rounded-2xl"
              placeholder="choose a password"
            />
          </View>
        </View>

        {/**Agree and continue btn */}

        <View
          className="flex justify-center items-center"
          style={{ padding: hp(7) }}
        >
          <Button name="Register" screenName="Home" />
        </View>

        <View>
          <Text>
            Have an account?
            <Text
              onPress={() => navigation.navigate("Login")}
              className="text-blue-800"
            >
              Login
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Register;
