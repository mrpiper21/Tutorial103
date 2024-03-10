import { View, Text, Image } from "react-native";
import React from "react";
import { getDimension } from "../helpers/globalHelpers";
import Profilebtn from "../widgets/Profilebtn";

export interface children {
  date: string;
  imageUrl: string;
  hotelname: string;
  hotelInfo: string;
  state: string;
  color: string;
  btnText: string;
}

const Transactioncard: React.FC<children> = ({
  date,
  imageUrl,
  hotelname,
  hotelInfo,
  state,
  color,
  btnText,
}) => {
  const { width } = getDimension();
  return (
    <View>
      <View
        style={{ width: width * 0.9 }}
        className="flex flex-col bg-white p-4 rounded-xl"
      >
        <View className="flex flex-row justify-between items-center">
          <Text>{date}</Text>
          <View className={`bg-${color}-200 rounded-full p-2`}>
            <Text>{state}</Text>
          </View>
        </View>

        {/**image */}
        <View className="flex flex-row space-x-3 items-center">
          <Image
            className="rounded-xl"
            style={{ width: width * 0.25, height: width * 0.25 }}
            source={{
              uri: imageUrl,
            }}
          />
          <View className="flex flex-col space-y-2">
            <Text className="text-lg font-semibold">{hotelname}</Text>
            <Text>{hotelInfo}</Text>
          </View>
        </View>

        <View className="flex flex-row justify-between items-center">
          <View>
            <Text>Total Price</Text>
            <Text className="text-blue-600 font-bold">$274</Text>
          </View>
          <Profilebtn text={btnText} />
        </View>
      </View>
    </View>
  );
};

export default Transactioncard;
