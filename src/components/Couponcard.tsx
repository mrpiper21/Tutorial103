import { View, Text } from "react-native";
import React from "react";
import { Ionicons, Octicons } from "@expo/vector-icons";
import Profilebtn from "../widgets/Profilebtn";

const Couponcard = () => {
  return (
    <View className="flex flex-col p-4 bg-white space-y-7 rounded-xl">
      <View className="flex flex-row space-x-2 items-center">
        <Octicons name="gift" size={30} color="blue" />
        <View>
          <Text className="text-lg font-semibold">50% Cashback</Text>
          <View className="flex flex-row space-x-2">
            <Text>Expired in 2 days</Text>
            <Text className="text-blue-400">See Details</Text>
          </View>
        </View>
      </View>
      <View className="flex flex-row justify-between items-center p-4">
        <View className="space-y-1">
          <Text>Voucher Code</Text>
          <Text>48WF093XF</Text>
        </View>
        <Profilebtn text="Use" />
      </View>
    </View>
  );
};

export default Couponcard;
