import { View, TextInput } from "react-native";
import React from "react";
import { Octicons, AntDesign } from "@expo/vector-icons";
import { getDimension } from "../../helpers/globalHelpers";

const Searchbar = () => {
  const { width } = getDimension();
  return (
    <View>
      <View
        className="flex-row top-16 items-center justify-between bg-slate-50 left-6 p-5 rounded-full"
        style={{ width: width * 0.9 }}
      >
        <View className="flex-row space-x-2 justify-center items-center">
          <Octicons name="search" size={28} color="black" />
          <TextInput
            className="py-1"
            placeholder="Search hotel"
            style={{ width: width / 3 }}
          />
        </View>
        <AntDesign name="indent-left" size={24} color="black" />
      </View>
    </View>
  );
};

export default Searchbar;
