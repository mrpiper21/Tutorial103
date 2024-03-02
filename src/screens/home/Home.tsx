import { View, Text, TextInput, ScrollView, Image } from "react-native";
import React from "react";
import { Ionicons, MaterialIcons, Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import BgCard from "../../components/cards/BgCard";
import SmCard from "../../components/cards/SmCard";
import Searchbar from "../../components/search";
import { getDimension, getPlatform } from "../../helpers/globalHelpers";
import { useUser } from "../../context/userContext";

const Home = () => {
  const user = useUser();

  return (
    <View className="flex-1 mt-12 mx-2">
      {/**Location and notifiaction  */}
      <View className="justify-between flex-row px-6">
        <View className="items-center justify-center flex-row space-x-2">
          <Ionicons name="location-outline" size={24} color="black" />
          <Text className="text-lg">Purworderto, IND</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>
        <Octicons name="bell" size={24} color="black" />
      </View>

      {/** Header */}
      <View className="px-6 top-7">
        <Text>Hello, {user?.user.name}👋</Text>
        <Text className="font-bold text-3xl">Let's find best hotel</Text>
      </View>
      {/**Search bar */}
      <Searchbar />
      {/**Vetical scroll images */}
      <View className="top-20 ">
        <View className="flex-row justify-between items-center px-5">
          <Text className="text-lg font-bold">Recomened Hotel</Text>
          <Text>See All</Text>
        </View>
        <View className="">
          {/**Card */}
          <ScrollView horizontal={true}>
            <BgCard />
          </ScrollView>
          {/**Recommended Hotels */}
          <SmCard />
        </View>
      </View>

      {/**Recommendation View */}
    </View>
  );
};

export default Home;
