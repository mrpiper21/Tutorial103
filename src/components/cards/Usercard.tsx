import { View, Text, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { getDimension } from "../../helpers/globalHelpers";

const Usercard = () => {
  const { width } = getDimension();
  const navigation = useNavigation() as any;
  return (
    <View>
      <View
        className="flex flex-row space-x-3 items-center"
        style={{ marginTop: width * 0.04 }}
      >
        <Image
          source={{
            uri: "https://www.billboard.com/wp-content/uploads/media/post-malone-iheart-awards-ap-images-billboard-1548.jpg?w=942&h=623&crop=1",
          }}
          style={{
            width: width * 0.17,
            height: width * 0.17,
            borderRadius: width * 0.19,
          }}
        />
        <View className="space-y-3">
          <View className="flex-row  items-center space-x-48">
            <Text className="text-xl font-semibold">Post Malone</Text>
            <View className="flex flex-col">
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
          </View>
          <View>
            <Text onPress={() => navigation.navigate("Chat")}>
              Amazing! The room looks much better the picture. Thanks for the
              amazing experience!
            </Text>
          </View>
        </View>
      </View>
      <View
        className="flex flex-row space-x-3 items-center"
        style={{ marginTop: width * 0.03 }}
      >
        <Image
          source={{
            uri: "https://www.rollingstone.com/wp-content/uploads/2019/08/a-boogie-wit-da-hoodie-from-print.jpg?w=1581&h=1054&crop=1",
          }}
          style={{
            width: width * 0.17,
            height: width * 0.17,
            borderRadius: width * 0.19,
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
              Amazing! The room looks much better the picture. Thanks for the
              amazing experience!
            </Text>
          </View>
        </View>
      </View>
      <View
        className="flex flex-row space-x-3 items-center"
        style={{ marginTop: width * 0.03 }}
      >
        <Image
          source={{
            uri: "https://www.theweeknd.com/files/2021/10/photo_202110_07_GENERAL-BRIANZIFF_THEWEEKND_214-1.jpeg",
          }}
          style={{
            width: width * 0.17,
            height: width * 0.17,
            borderRadius: width * 0.19,
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
              Amazing! The room looks much better the picture. Thanks for the
              amazing experience!
            </Text>
          </View>
        </View>
      </View>
      <View
        className="flex flex-row space-x-3 items-center"
        style={{ marginTop: width * 0.03 }}
      >
        <Image
          source={{
            uri: "https://www.billboard.com/wp-content/uploads/2022/11/cover-future-billboard-2022-bb15-david-needleman-01-1240.jpg?w=683",
          }}
          style={{
            width: width * 0.17,
            height: width * 0.17,
            borderRadius: width * 0.19,
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
              Amazing! The room looks much better the picture. Thanks for the
              amazing experience!
            </Text>
          </View>
        </View>
      </View>
      <View
        className="flex flex-row space-x-3 items-center"
        style={{ marginTop: width * 0.03 }}
      >
        <Image
          source={{
            uri: "https://media.gq.com/photos/5d601ae18e1da70008fd5f26/4:3/w_1500,h_1125,c_limit/Saint-Jhn-Lede-GQ-2019-082319.jpg",
          }}
          style={{
            width: width * 0.17,
            height: width * 0.17,
            borderRadius: width * 0.19,
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
              Amazing! The room looks much better the picture. Thanks for the
              amazing experience!
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Usercard;
