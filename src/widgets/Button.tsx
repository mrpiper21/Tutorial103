import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

type ButtonProps = {
  name: string;
  screenName: string;
};

const Button: React.FC<ButtonProps> = ({ name, screenName }) => {
  const navigation = useNavigation() as any;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screenName)}
      style={{
        width: hp(30),
      }}
      className="bg-black p-3 rounded-full"
    >
      <Text className="text-white text-center font-bold">{name}</Text>
    </TouchableOpacity>
  );
};

export default Button;
