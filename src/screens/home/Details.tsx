import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { getDimension } from "../../helpers/globalHelpers";
import {
  AntDesign,
  EvilIcons,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Usercard from "../../components/cards/Usercard";

const Details = () => {
  const { width, height } = getDimension();

  const navigation = useNavigation() as any;
  return (
    <View className="flex-1">
      {/**Image header */}
      <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
        <View>
          <Image
            source={{
              uri: "https://www.luxuryhotelawards.com/wp-content/uploads/sites/8/2023/03/Thanes-Piamnamai-251-scaled.jpg",
            }}
            style={{ width: hp(55), height: hp(30) }}
          />
          <View
            className=" flex flex-row justify-center w-full absolute space-x-40 items-center"
            style={{ top: hp(6) }}
          >
            <EvilIcons name="arrow-left" size={40} color="white" />
            <View className="flex flex-row space-x-12">
              <Feather name="arrow-up-circle" size={40} color="white" />
              <AntDesign name="heart" size={40} color="white" />
            </View>
          </View>
        </View>

        {/**Hotel Detail */}
        <View className="mt-4 mx-4">
          <View>
            <Text className="font-semibold text-xl">Mendiata Hotel</Text>
            <View className="flex flex-row items-center space-x-6">
              <View className="flex flex-row items-center">
                <Ionicons name="location" size={24} color="blue" />
                <Text>Achimota Golf park</Text>
              </View>
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
            <View className="mt-2">
              <Text>
                $48 <Text>Per Night</Text>
              </Text>
              <View className="mt-3">
                <Text className="text-zinc-500">
                  Mendiata Hotel is high ratted hotels in Ghana - Achimota with
                  120+ reviews and high attitude service. It is one of the
                  biggest hotels in Ghana. It is popular for it's rich
                  aesthetics
                </Text>
              </View>

              {/**Icons  */}
              <View
                className="flex flex-row space-x-20 items-center justify-center"
                style={{ marginTop: hp(2) }}
              >
                <View>
                  <AntDesign name="wifi" size={24} color="black" />
                  <Text>Wifi</Text>
                </View>
                <View>
                  <MaterialCommunityIcons
                    name="shower"
                    size={24}
                    color="black"
                  />
                  <Text>Shower</Text>
                </View>
                <View>
                  <MaterialIcons
                    name="free-breakfast"
                    size={24}
                    color="black"
                  />
                  <Text>Breakfast</Text>
                </View>
                <View>
                  <MaterialCommunityIcons
                    name="dumbbell"
                    size={24}
                    color="black"
                  />
                  <Text>Gym</Text>
                </View>
              </View>
              {/**location */}
              <View>
                {/**header */}
                <View
                  className="flex flex-row justify-between items-center"
                  style={{ marginTop: hp(2) }}
                >
                  <Text>Location</Text>
                  <Text>View Details</Text>
                </View>

                <View>
                  <View
                    className="justify-center bg-white p-2"
                    style={{ borderRadius: hp(2) }}
                  >
                    <Image
                      source={{
                        uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Topographic_map_example.png/310px-Topographic_map_example.png",
                      }}
                      style={{
                        width: hp(46.5),
                        height: hp(15),
                        borderRadius: hp(2),
                      }}
                    />
                    <View className="flex flex-row space-x-3 mt-2 items-center">
                      <Ionicons name="location-sharp" size={24} color="blue" />
                      <Text>
                        Achimota Golf club st204. RD christian village
                      </Text>
                    </View>
                    <View className="mt-2">
                      <Text className="text-blue-500">View Details</Text>
                    </View>
                  </View>
                </View>
              </View>

              {/**Reviews */}
              <View style={{ marginTop: hp(2) }}>
                <View className="flex flex-row items-center justify-between">
                  <Text className="text-xl font-bold">Reviews</Text>
                  <Text
                    onPress={() => navigation.navigate("Message")}
                    className="text-xl text-blue-600"
                  >
                    See All
                  </Text>
                </View>
                <Usercard />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/**Btns */}
      <View className="flex flex-row items-center justify-center p-2 bg-white space-x-3">
        <View>
          <Ionicons name="chatbubble-sharp" size={60} color="teal" />
        </View>
        <View>
          <TouchableOpacity
            className="bg-blue-600 rounded-full items-center justify-center"
            style={{ width: width * 0.7, padding: width * 0.03 }}
          >
            <Text className="text-white font-semibold text-lg">Book now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Details;
