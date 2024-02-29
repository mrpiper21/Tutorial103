import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const BgCard = () => {
  const navigation = useNavigation() as any;
  return (
    <View className="flex flex-row space-x-2">
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
            <MaterialCommunityIcons name="bed-outline" size={24} color="blue" />
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
            <MaterialCommunityIcons name="bed-outline" size={24} color="blue" />
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
    </View>
  );
};

export default BgCard;
