import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
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

const Details = () => {
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
                  <Text className="text-xl text-blue-600">See All</Text>
                </View>
                <View
                  className="flex flex-row space-x-3 items-center"
                  style={{ marginTop: hp(2) }}
                >
                  <Image
                    source={{
                      uri: "https://www.billboard.com/wp-content/uploads/media/post-malone-iheart-awards-ap-images-billboard-1548.jpg?w=942&h=623&crop=1",
                    }}
                    style={{
                      width: hp(8),
                      height: hp(8),
                      borderRadius: hp(12),
                    }}
                  />
                  <View className="space-y-3">
                    <View className="flex-row  items-center space-x-48">
                      <Text className="text-xl font-semibold">Post Malone</Text>
                      <View className="flex flex-row space-x-2">
                        <AntDesign
                          name="star"
                          size={16}
                          color="black"
                          style={{ color: "orange" }}
                        />
                        <Text className="font-semibold">4.9</Text>
                      </View>
                    </View>
                    <View>
                      <Text>
                        Amazing! The room looks much better the picture. Thanks
                        for the amazing experience!
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  className="flex flex-row space-x-3 items-center"
                  style={{ marginTop: hp(2) }}
                >
                  <Image
                    source={{
                      uri: "https://www.rollingstone.com/wp-content/uploads/2019/08/a-boogie-wit-da-hoodie-from-print.jpg?w=1581&h=1054&crop=1",
                    }}
                    style={{
                      width: hp(8),
                      height: hp(8),
                      borderRadius: hp(12),
                    }}
                  />
                  <View className="space-y-3">
                    <View className="flex-row  items-center space-x-24">
                      <Text className="text-xl font-semibold">
                        A boogie wit da hoodie
                      </Text>
                      <View className="flex flex-row space-x-2">
                        <AntDesign
                          name="star"
                          size={16}
                          color="black"
                          style={{ color: "orange" }}
                        />
                        <Text className="font-semibold">4.9</Text>
                      </View>
                    </View>
                    <View>
                      <Text>
                        Amazing! The room looks much better the picture. Thanks
                        for the amazing experience!
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  className="flex flex-row space-x-3 items-center"
                  style={{ marginTop: hp(2) }}
                >
                  <Image
                    source={{
                      uri: "https://www.theweeknd.com/files/2021/10/photo_202110_07_GENERAL-BRIANZIFF_THEWEEKND_214-1.jpeg",
                    }}
                    style={{
                      width: hp(8),
                      height: hp(8),
                      borderRadius: hp(12),
                    }}
                  />
                  <View className="space-y-3">
                    <View className="flex-row  items-center space-x-48">
                      <Text className="text-xl font-semibold">The weekend</Text>
                      <View className="flex flex-row space-x-2">
                        <AntDesign
                          name="star"
                          size={16}
                          color="black"
                          style={{ color: "orange" }}
                        />
                        <Text className="font-semibold">4.9</Text>
                      </View>
                    </View>
                    <View>
                      <Text>
                        Amazing! The room looks much better the picture. Thanks
                        for the amazing experience!
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  className="flex flex-row space-x-3 items-center"
                  style={{ marginTop: hp(2) }}
                >
                  <Image
                    source={{
                      uri: "https://www.billboard.com/wp-content/uploads/2022/11/cover-future-billboard-2022-bb15-david-needleman-01-1240.jpg?w=683",
                    }}
                    style={{
                      width: hp(8),
                      height: hp(8),
                      borderRadius: hp(12),
                    }}
                  />
                  <View className="space-y-3">
                    <View className="flex-row  items-center space-x-60">
                      <Text className="text-xl font-semibold">Future</Text>
                      <View className="flex flex-row space-x-2">
                        <AntDesign
                          name="star"
                          size={16}
                          color="black"
                          style={{ color: "orange" }}
                        />
                        <Text className="font-semibold">4.9</Text>
                      </View>
                    </View>
                    <View>
                      <Text>
                        Amazing! The room looks much better the picture. Thanks
                        for the amazing experience!
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  className="flex flex-row space-x-3 items-center"
                  style={{ marginTop: hp(2) }}
                >
                  <Image
                    source={{
                      uri: "https://media.gq.com/photos/5d601ae18e1da70008fd5f26/4:3/w_1500,h_1125,c_limit/Saint-Jhn-Lede-GQ-2019-082319.jpg",
                    }}
                    style={{
                      width: hp(8),
                      height: hp(8),
                      borderRadius: hp(12),
                    }}
                  />
                  <View className="space-y-3">
                    <View className="flex-row  items-center space-x-52">
                      <Text className="text-xl font-semibold">Saint JHN</Text>
                      <View className="flex flex-row space-x-2">
                        <AntDesign
                          name="star"
                          size={16}
                          color="black"
                          style={{ color: "orange" }}
                        />
                        <Text className="font-semibold">4.9</Text>
                      </View>
                    </View>
                    <View>
                      <Text>
                        Amazing! The room looks much better the picture. Thanks
                        for the amazing experience!
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/**Btns */}
      <View className="flex flex-row items-center justify-center p-2 bg-white space-x-3">
        <View>
          <Ionicons name="chatbubble-sharp" size={60} color="navy" />
        </View>
        <View>
          <TouchableOpacity
            className="bg-blue-600 p-5 rounded-full items-center justify-center"
            style={{ width: hp(35) }}
          >
            <Text className="text-white font-semibold text-lg">Book now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Details;
