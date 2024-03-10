import { View, Text, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AntDesign,
  Ionicons,
  Octicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { getDimension } from "../../helpers/globalHelpers";
import { TouchableOpacity } from "react-native";

export default function Profile() {
  const navigation = useNavigation() as any;
  const { width } = getDimension();

  return (
    <View className="flex px-5">
      <View className="flex flex-row mt-20 justify-between px-6">
        <Text>Profile</Text>
        <AntDesign name="setting" size={24} color="black" />
      </View>

      {/**Profile photo */}
      <View className="flex flex-col space-y-3 items-center justify-center mt-3">
        <Image
          className="rounded-full"
          style={{
            width: width * 0.25,
            height: width * 0.25,
          }}
          source={{
            uri: "https://i.guim.co.uk/img/media/d1d16deaf131f85a21b9d6084a4e3b5f071e06f4/0_177_2500_1499/master/2500.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=195153fc572712360f4cffb02da65d2e",
          }}
        />
        <Text className="font-semibold text-xl">Post Malone</Text>
        <Text>Pueto Rico</Text>
      </View>

      {/**Statistics */}
      <View
        style={{ marginTop: width * 0.13 }}
        className="bg-white rounded-lg flex flex-row justify-around items-center p-2"
      >
        <View className="space-y-2 items-center justify-center">
          <Text className="text-2xl font-extrabold text-blue-300">26</Text>
          <Text>Transaction</Text>
        </View>
        <View className="space-y-2  items-center justify-center">
          <Text className="text-2xl font-extrabold text-blue-300">12</Text>
          <Text>Reviews</Text>
        </View>
        <View className="space-y-2  items-center justify-center">
          <Text className="text-2xl font-extrabold text-blue-300">4</Text>
          <Text>Bookings</Text>
        </View>
      </View>

      {/**Options */}
      <View style={{ marginTop: width * 0.07 }}>
        <Text className="text-lg font-semibold">Options</Text>
        <View>
          {/**favorite */}
          <TouchableOpacity onPress={() => navigation.navigate("Favorite")}>
            <View
              style={{ marginTop: width * 0.03 }}
              className="bg-white rounded-lg flex flex-row justify-between items-center p-4"
            >
              <View className="flex flex-row space-x-3 items-center justify-center">
                <AntDesign name="hearto" size={30} color="black" />
                <Text className="text-lg">My Favourite</Text>
              </View>
              <View>
                <Ionicons name="chevron-forward" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Transaction")}>
            <View
              style={{ marginTop: width * 0.03 }}
              className="bg-white rounded-lg flex flex-row justify-between items-center p-4"
            >
              <View className="flex flex-row space-x-3 items-center justify-center">
                <Ionicons name="time-outline" size={30} color="black" />
                <Text className="text-lg">Transaction</Text>
              </View>
              <View>
                <Ionicons name="chevron-forward" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Coupon")}>
            <View
              style={{ marginTop: width * 0.03 }}
              className="bg-white rounded-lg flex flex-row justify-between items-center p-4"
            >
              <View className="flex flex-row space-x-3 items-center justify-center">
                <Octicons name="gift" size={30} color="black" />
                <Text className="text-lg">My Coupon</Text>
              </View>
              <View>
                <Ionicons name="chevron-forward" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{ marginTop: width * 0.03 }}
              className="bg-white rounded-lg flex flex-row justify-between items-center p-4"
            >
              <View className="flex flex-row space-x-3 items-center justify-center">
                <MaterialCommunityIcons name="logout" size={30} color="red" />
                <Text className="text-lg text-red-500">Logout</Text>
              </View>
              <View>
                <Ionicons name="chevron-forward" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
