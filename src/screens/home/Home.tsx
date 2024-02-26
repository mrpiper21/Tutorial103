import { View, Text, TextInput, ScrollView, Image } from "react-native";
import React from "react";
import {
  Ionicons,
  MaterialIcons,
  Octicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation() as any;
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
        <Text>Hello, Kevin!👋</Text>
        <Text className="font-bold text-3xl">Let's find best hotel</Text>
      </View>
      {/**Search bar */}
      <View
        className="flex-row top-16 items-center justify-between bg-slate-50 left-6 p-5 rounded-full"
        style={{ width: hp(45) }}
      >
        <View className="flex-row space-x-2 justify-center items-center">
          <Octicons name="search" size={28} color="black" />
          <TextInput
            className="py-1"
            placeholder="Search hotel"
            style={{ width: hp(33) }}
          />
        </View>
        <AntDesign name="indent-left" size={24} color="black" />
      </View>
      {/**Vetical scroll images */}
      <View className="top-20 ">
        <View className="flex-row justify-between items-center px-5">
          <Text className="text-lg font-bold">Recomened Hotel</Text>
          <Text>See All</Text>
        </View>
        <View className="">
          <ScrollView horizontal={true} className="space-x-3">
            <View className="flex-col space-y-2 justify-center bg-slate-200 p-1">
              <Image
                source={{
                  uri: "https://www.luxuryhotelawards.com/wp-content/uploads/sites/8/2023/03/Thanes-Piamnamai-251-scaled.jpg",
                }}
                style={{
                  width: hp(33),
                  height: hp(16),
                  borderRadius: hp(2),
                }}
              />
              <View className="ml-3">
                <Text
                  className="text-lg font-semibold"
                  onPress={() => navigation.navigate("Details")}
                >
                  Mendiata hotel
                </Text>
                <Text>Barcelona, Street No 31 Central java</Text>
              </View>
              <View className="flex-row space-x-2 items-center ml-2">
                <View className="flex-row justify-center items-center space-x-2">
                  <MaterialCommunityIcons
                    name="bed-outline"
                    size={24}
                    color="blue"
                  />
                  <Text>2 Beds</Text>
                </View>
                <View className="flex-row justify-center items-center space-x-2">
                  <MaterialCommunityIcons name="wifi" size={24} color="blue" />
                  <Text>WiFi</Text>
                </View>
                <View className="flex-row space-x-2 justify-center items-center">
                  <AntDesign name="github" size={24} color="blue" />
                  <Text>Github</Text>
                  <Text></Text>
                </View>
              </View>
            </View>
            <View className="flex-col space-y-2 justify-center bg-slate-200 p-1">
              <Image
                source={{
                  uri: "https://www.wyndhamhotels.com/content/dam/creative-images/apac/text/3x2/Peninsula%20Excelsior%20Singapore,%20a%20Wyndham%20Hotel.jpg?downsize=700:*",
                }}
                style={{
                  width: hp(33),
                  height: hp(16),
                  borderRadius: hp(2),
                }}
              />
              <View className="ml-3">
                <Text>Mendiata hotel</Text>
                <Text>Barcelona, Street No 31 Central java</Text>
              </View>
              <View className="flex-row space-x-2 items-center ml-2">
                <View className="flex-row justify-center items-center space-x-2">
                  <MaterialCommunityIcons
                    name="bed-outline"
                    size={24}
                    color="blue"
                  />
                  <Text>2 Beds</Text>
                </View>
                <View className="flex-row justify-center items-center space-x-2">
                  <MaterialCommunityIcons name="wifi" size={24} color="blue" />
                  <Text>WiFi</Text>
                </View>
                <View className="flex-row space-x-2 justify-center items-center">
                  <AntDesign name="github" size={24} color="blue" />
                  <Text>Github</Text>
                </View>
              </View>
            </View>
          </ScrollView>
          {/**Recommended Hotels */}
          <View>
            <View className="">
              <Text>Nearby Hotel</Text>
              <View
                className="bg-white p-2 flex flex-row space-x-3"
                style={{ borderRadius: hp(2) }}
              >
                <Image
                  source={{
                    uri: "https://media-cdn.tripadvisor.com/media/photo-s/06/f8/e9/6a/grand-hyatt-washington.jpg",
                  }}
                  style={{ width: hp(12), height: hp(12), borderRadius: hp(2) }}
                />
                <View className="space-y-3">
                  <Text className="text-lg font-semibold">
                    Hyatt Washington Hotel
                  </Text>
                  <Text className="text-gray-400">Purwokerto, Glempang</Text>
                  <View className="flex flex-row space-x-4">
                    <Text className="text-blue-600">
                      $38 /<Text className="text-black">Night</Text>
                    </Text>
                    <View className="flex flex-row space-x-2">
                      <AntDesign
                        name="star"
                        size={16}
                        color="black"
                        style={{ color: "orange" }}
                      />
                      <Text>4.2 (84 Reviews)</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                className="bg-white p-2 flex flex-row space-x-3 mt-2"
                style={{ borderRadius: hp(2) }}
              >
                <Image
                  source={{
                    uri: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2016/01/11/1049/Grand-Hyatt-Washington-DC-P097-Lobby.jpg/Grand-Hyatt-Washington-DC-P097-Lobby.4x3.jpg",
                  }}
                  style={{ width: hp(12), height: hp(12), borderRadius: hp(2) }}
                />
                <View className="space-y-3">
                  <Text className="text-lg font-semibold">
                    The Confidiante Hotel
                  </Text>
                  <Text className="text-gray-400">Purwokerto, Glempang</Text>
                  <View className="flex flex-row space-x-4">
                    <Text className="text-blue-600">
                      $84 /<Text className="text-black">Night</Text>
                    </Text>
                    <View className="flex flex-row space-x-4">
                      <AntDesign
                        name="star"
                        size={16}
                        color="black"
                        style={{ color: "orange" }}
                      />
                      <Text>4.7 (186 Reviews)</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/**Recommendation View */}
    </View>
  );
};

export default Home;
