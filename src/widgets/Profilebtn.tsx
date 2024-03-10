import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { getDimension } from "../helpers/globalHelpers";

interface Buttontext {
  text: string;
}

const Profilebtn: React.FC<Buttontext> = ({ text }) => {
  const { width } = getDimension();
  return (
    <TouchableOpacity style={{ width: width * 0.35 }}>
      <View className="bg-blue-500 items-center justify-center p-3 rounded-full">
        <Text className="text-white">{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Profilebtn;
