import { View, Text, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Usercard from "../../components/cards/Usercard";
import Searchbar from "../../components/search";

const Message = () => {
  return (
    <View className="flex">
      <View className="mt-20 flex flex-row justify-between mx-4">
        {/**Header */}
        <Text className="font-bold text-2xl">Message</Text>
        <AntDesign name="bells" size={24} color="black" />
      </View>
      <View>
        <Searchbar />
      </View>
      <View className="mt-20 mx-2">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          horizontal={false}
        >
          <Usercard />
        </ScrollView>
      </View>
    </View>
  );
};

export default Message;
