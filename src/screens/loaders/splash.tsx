import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Splash = () => {
  const navigation = useNavigation() as any;

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 3000);
  });

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <LottieView
        style={{ width: hp(45), height: hp(45) }}
        source={require("../../../assets/welcome.json")}
        autoPlay
        loop
      />
    </View>
  );
};

export default Splash;
