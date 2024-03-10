import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Couponcard from "../../components/Couponcard";

const Coupon = () => {
  return (
    <View className="flex px-6">
      {/**Coupon card */}
      <View className="mt-5">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsHorizontalScrollIndicator={false}
          horizontal={false}
          className=" mb-14"
        >
          <View>
            <View className="flex flex-row space-x-20 mt-10 mb-10">
              <Ionicons name="arrow-back" size={24} color="black" />
              <Text className="text-lg font-semibold">Coupon</Text>
            </View>
            <View className="mt-2">
              <Couponcard />
            </View>
            <View className="mt-2">
              <Couponcard />
            </View>
            <View className="mt-2">
              <Couponcard />
            </View>
            <View className="mt-2">
              <Couponcard />
            </View>
            <View className="mt-2">
              <Couponcard />
            </View>
            <View className="mt-2">
              <Couponcard />
            </View>
            <View className="mt-2">
              <Couponcard />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Coupon;
