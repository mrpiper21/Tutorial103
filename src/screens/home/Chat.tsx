import { View, Text, Image, ScrollView, TextInput } from "react-native";
import React from "react";
import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SmCard from "../../widgets/cards/SmallCard";
import { getDimension } from "../../helpers/globalHelpers";

const Chat = () => {
  const { width } = getDimension();

  return (
    <View className="flex-1 justify-between flex-col">
      {/**User Header */}
      <View>
        <View>
          <View className="mt-12 flex flex-row items-center space-x-4 mx-4">
            <View
              style={{ width: width * 0.11, borderRadius: width * 0.08 }}
              className="flex p-3 bg-white justify-center items-center"
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </View>
            <View className="flex flex-row">
              <Image
                style={{ width: hp(8), height: hp(8), borderRadius: hp(7) }}
                source={{
                  uri: "https://impeccablenestdesign.com/wp-content/uploads/2023/12/anime-girl-names-with-dark-meanings-choosing-the-perfect-name-for-your-character-6583089f4e8b2.jpg",
                }}
              />
              <View className="flex flex-col justify-center space-y-2 ml-3">
                <Text className="font-semibold text-lg">Kim Hayo</Text>
                <Text>Online</Text>
              </View>
            </View>
            <View style={{ width: hp(20) }} className="fex flex-row-reverse ">
              <View style={{ borderRadius: hp(17) }} className="bg-white p-2 ">
                <Entypo name="dots-three-vertical" size={24} color="black" />
              </View>
            </View>
          </View>
        </View>
        <ScrollView
          style={{ width: wp(100) }}
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          horizontal={false}
        >
          <View className="mx-5 mt-5">
            <View>
              <SmCard />
            </View>
            <View
              style={{ marginTop: width * 0.06 }}
              className="flex flex-row-reverse"
            >
              <View
                className="bg-blue-400 p-2 rounded-xl"
                style={{ width: "auto" }}
              >
                <Text>
                  Hi, is there any room left? I’ll make an order if room is
                  available
                </Text>
              </View>
            </View>
            <View className="flex flex-row mt-3">
              <View
                className="bg-blue-200 p-2 rounded-xl"
                style={{ width: hp(40) }}
              >
                <Text>
                  Hello Marine, Yes the room is available, so you can make an
                  order.
                </Text>
              </View>
            </View>
            <View className="flex flex-row mt-3">
              <View
                className="bg-blue-200 p-2 rounded-xl"
                style={{ width: "auto" }}
              >
                <Text>Thank You! 😁.</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={{}}
        className=" flex sticky flex-row justify-between items-center mx-5 bg-slate-200 p-3 rounded-3xl"
      >
        <View className="flex flex-row items-center space-x-7">
          <View>
            <AntDesign name="addfolder" size={24} color="black" />
          </View>
          <View>
            <TextInput
              className="sticky-text input"
              placeholder="Write a reply"
            />
          </View>
        </View>
        <View
          style={{ padding: width * 0.02 }}
          className=" bg-blue-500 rounded-full items-center"
        >
          <Ionicons name="send" size={24} color="white" />
        </View>
      </View>
    </View>
  );
};

export default Chat;
