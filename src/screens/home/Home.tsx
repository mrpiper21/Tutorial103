import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  Ionicons,
  AntDesign,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import BgCard from "../../widgets/cards/BigCard";
import SmCard from "../../widgets/cards/SmallCard";
import Searchbar from "../../components/search";
import { getDimension } from "../../helpers/globalHelpers";
import { useUser } from "../../context/userContext";

const Home = () => {
  const navigation = useNavigation() as any;
  const user = useUser();
  const { width, height } = getDimension();
  const image1 =
    "https://www.luxuryhotelawards.com/wp-content/uploads/sites/8/2023/03/Thanes-Piamnamai-251-scaled.jpg";
  const image2 =
    "https://www.wyndhamhotels.com/content/dam/creative-images/apac/text/3x2/Peninsula%20Excelsior%20Singapore,%20a%20Wyndham%20Hotel.jpg?downsize=700:*";

  return (
    <View className="flex-1 mt-10 mx-2">
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
      <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
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
          <View className=" mt-10">
            {/**Card */}
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
              <View className="flex flex-row space-x-4">
                <TouchableOpacity
                  onPress={() => navigation.navigate("Details")}
                >
                  <BgCard imageUrl={image2} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Details")}
                >
                  <BgCard imageUrl={image1} />
                </TouchableOpacity>
              </View>
            </ScrollView>
            {/**Recommended Hotels */}
            <View className="mb-[150px]">
              <SmCard />
              <SmCard />
              <SmCard />
              <SmCard />
              <SmCard />
            </View>
          </View>
        </View>
        {/**Recommendation View */}
      </ScrollView>
    </View>
  );
};

export default Home;
