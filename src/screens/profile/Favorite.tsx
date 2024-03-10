import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import SmCard from "../../widgets/cards/SmallCard";

const Favorite = () => {
  return (
    <View className="flex px-5">
      <View className="flex flex-row items-center space-x-20 mt-20">
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text className="font-bold text-xl">Favorite</Text>
      </View>

      {/**favorite items */}
      <View className="mt-16">
        <Text className="text-lg font-bold">8 favorite items</Text>
        <View className="mt-6 items-start justify-center">
          <SmCard />
          <SmCard />
          <SmCard />
          <SmCard />
          <SmCard />
        </View>
      </View>
    </View>
  );
};

export default Favorite;
