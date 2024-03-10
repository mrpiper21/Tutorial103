import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { getDimension } from "../../helpers/globalHelpers";
import Profilebtn from "../../widgets/Profilebtn";
import Transactioncard from "../../components/Transactioncard";
import { children } from "../../components/Transactioncard";

const Trasaction = () => {
  const { width } = getDimension();

  const HotelCardDetail: children = {
    date: "28 Mar 2022, Thu",
    imageUrl:
      "https://static.independent.co.uk/2023/03/20/14/Standard%20High%20Line-1.jpg",
    hotelname: "Hyatt Washington Hotel",
    hotelInfo: "4 Guests, 2 Room",
    state: "waiting",
    color: "green",
    btnText: "check in",
  };

  return (
    <View className="flex px-4">
      {/**Header */}
      <View
        style={{ marginTop: width * 0.15 }}
        className="flex flex-row space-x-24 items-center"
      >
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text className="text-lg font-semibold">Trasaction</Text>
      </View>

      {/**Booking Card */}
      <View className="items-center mt-7">
        <Transactioncard
          date={HotelCardDetail.date}
          imageUrl={HotelCardDetail.imageUrl}
          hotelname={HotelCardDetail.hotelname}
          hotelInfo={HotelCardDetail.hotelInfo}
          state="wating"
          color="orange"
          btnText="Check in"
        />
        <View className="mt-2">
          <Transactioncard
            date={HotelCardDetail.date}
            imageUrl="https://www.travelandleisure.com/thmb/7wYwJdAVWn3eoeY9Yi0DN1O0OBA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/waldorf-astoria-maldives-ithaafushi-080-TOPHOTELSWB21-d42e357f00754973bbbfe987835f7319.jpg"
            hotelname={HotelCardDetail.hotelname}
            hotelInfo={HotelCardDetail.hotelInfo}
            state="finished"
            color="blue"
            btnText="Ratting"
          />
        </View>
        <View className="mt-2">
          <Transactioncard
            date={HotelCardDetail.date}
            imageUrl="https://www.travelplusstyle.com/wp-content/uploads/2016/01/sonevajani-1880.jpg"
            hotelname={HotelCardDetail.hotelname}
            hotelInfo={HotelCardDetail.hotelInfo}
            state="finished"
            color="blue"
            btnText="Rating"
          />
        </View>
      </View>
    </View>
  );
};

export default Trasaction;
