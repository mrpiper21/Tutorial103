import { View, Text, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";

const SmCard = () => {
  return (
    <View>
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
  );
};

export default SmCard;