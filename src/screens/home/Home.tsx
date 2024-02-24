import { View, Text, TextInput, ScrollView, Image } from "react-native";
import React from "react";
import {
  Ionicons,
  MaterialIcons,
  Octicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Home = () => {
  return (
    <View className="flex-1 mt-20">
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
      <View className="px-6 top-9">
        <Text>Hello, Kevin!👋</Text>
        <Text className="font-bold text-3xl">Let's find best hotel</Text>
      </View>
      {/**Search bar */}
      <View
        className="flex-row top-20 items-center justify-between bg-slate-50 left-6 p-5 rounded-full"
        style={{ width: hp(45) }}
      >
        <View className="flex-row space-x-2 justify-center items-center">
          <Octicons name="search" size={28} color="black" />
          <TextInput
            className="py-1"
            placeholder="Search hotel"
            style={{ width: hp(33) }}
          />
        </View>
        <AntDesign name="indent-left" size={24} color="black" />
      </View>
      {/**Vetical scroll images */}
      <View className="top-28 ">
        <View className="flex-row justify-between items-center px-5">
          <Text className="text-lg font-bold">Recomened Hotel</Text>
          <Text>See All</Text>
        </View>
        <View>
          <ScrollView horizontal={true} className="space-x-3">
            <View className="flex-col space-y-2 justify-center bg-slate-200 p-1">
              <Image
                source={{
                  uri: "https://www.luxuryhotelawards.com/wp-content/uploads/sites/8/2023/03/Thanes-Piamnamai-251-scaled.jpg",
                }}
                style={{
                  width: hp(33),
                  height: hp(16),
                  borderRadius: hp(1),
                }}
              />
              <View className="ml-3">
                <Text>Mendiata hotel</Text>
                <Text>Barcelona, Street No 31 Central java</Text>
              </View>
              <View className="flex-row space-x-2 items-center ml-2">
                <View className="flex-row justify-center items-center space-x-2">
                  <MaterialCommunityIcons
                    name="bed-outline"
                    size={24}
                    color="blue"
                  />
                  <Text>2 Beds</Text>
                </View>
                <View className="flex-row justify-center items-center space-x-2">
                  <MaterialCommunityIcons name="wifi" size={24} color="blue" />
                  <Text>WiFi</Text>
                </View>
                <View className="flex-row space-x-2 justify-center items-center">
                  <Text>Github</Text>
                  <AntDesign name="github" size={24} color="blue" />
                  <Text></Text>
                </View>
              </View>
            </View>
            <View className="flex-col space-y-2 justify-center bg-slate-200 p-1">
              <Image
                source={{
                  uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxMUExYTFBMWGBYZGhYbGhkWFhkaGRoaGhkZGxkaGRkaHysiGhwoHxsWIzQjKSwuMTExGSE3PDcwOyswMS4BCwsLDw4PHBERHTAoIikzMDkwMDAwMDk8LjIzMDAwMC4yMjIwMjAwMjA5MDAwLjAwMDAwMjAwMDAwMDAwMDAwMP/AABEIALsBDQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB//EAEEQAAIBAgQDBgMFBQYGAwAAAAECEQADBBIhMQVBUQYTImFxgTKRoRRCUrHBByNy0fAVJDNiguE0Q5KisvEWJXP/xAAbAQACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EAC0RAAICAQMCBQQBBQEAAAAAAAECABEDEiExBEEFEyIyUXGBkaFhFLHB0fAV/9oADAMBAAIRAxEAPwBGj1YHoEPUxdr6ERPInHDZqJNDreqXe1WmDoIky1VvXi1RLUQEICVXFFD3BRDmh7lQx6QdhUC1WvVTLSmmhZBmqGepMtVxSTccAJItXCa5lr2WhNy9pGa9NeIr0UMudmvA1yK6BUEklNdVqhXRRAyqlmauF6ga5NWWlaZ1jXAK6oq0W6gFyyalYFdy1aq1YtqjCQC9ShbdWrZq9bcV5nFMCAcxZcniQNqq2WpvdqpnqMQJagyrEvlUnypE51nnTjGsuUqWiaTzXm/FnvIBe1fudHphSmcA+dE2GidYocVJdK5SNRsTQwsVNbJroavZa8a97PPSQarEeqJr2aruUVuGrXTaoa3dq+3iKkUysOJBrZqi4lMO8Bqt7YNSWrkcxay1WVo27ZqnuzQlZoVxBStQy0b3FVvZihKQxkEoivRVmSuGh0wrlLpVZFEMaqIpbLDUyuK9VwWoFaHTC1SMVyuxXstSXONURU4qJFURIDLLdXZqoU15now1CCVsy4NVy3RQPeVzvKgygSjjuG3L9DtcqrNXqFshMtcYElmrjOAJO1eAofHuQpEe/Kk5smhC0Yq2agGIaWYg86pmuuCDB3riivKZHLMSZ0lFCdSr0XzA9qrQV0zyoUO8oi5p+9rve0Oa5XudZnE0CEG5Uc9cs2XcwiM5iYRSxjrAE9KKXs/jG+HDXfdCPzis+brMeL3Go7H07P7RKWJXRgQRvOn51G1jUJyhgT/XPajuIdlMdc8b2XO0kAGAoA+FecRy6n1H/wDjmWQTlYIHiNV11JM9In1Nc0+NLYobd5tHhbEHeeF6pi/QIYjQ/Pz51Zmrs4s65FDLxOZkwFDTCGC9XQwoQNUg1ODRRxw0RXHWhe+rwxFXqEDyzPXFqphVr3ZqovQmo5bnO6qD2oq1XrjtQkCoQJuDk1EtUb97kup+goe3fPPWsb9QitpuaFQkXCq7mqtLgO1SijVwRYgkfM4zVAtXmFcK0LMYYAni1RJq3D4V7hy20Z26KpY/IU6wXY2+x/eFLQ6Mcz/9CT9SKzvmRfcahARABVuGwz3GCW0Z2OyqCxPsK33Cew1kasjv/mvHuk9Qi+Ij1NHrilw11VZ7NrDmcrWFaSy7iFEyPM1iy+IIoOkXDVCTPnvEuB4mxlF6y6lhmGk6TGuWY9DQQNbfEfZjdNxMRcuEndsOWI22LHT2rP4rs53l0i07hGaTmtHTmTo2g8qXj8T29Q/ENsO+3EUPcgE9KCbiMqRGtcPiaGMDp/W9RfCz8IPuImq6jq8jraGh/eWmNQaPMEY8zrUrdF4nhV22od1Kg7SGGaCAYJEGJHOhba1xySZqkkHlXbmhroJHKvR1/X9KoSR9pXilCYJLzmFWfKJI9SNBTVeBMR++uheQRdSTpoT1121r0uTxbCo2BJmFejyExp+z3EgYvuwwzXLboPUZXjTqEI9SK+kX7N4OgyyrGC4MqhAkBhodfDyjxCvmfBbaWnUrNtlIIP8AzJUg6TrP+0A65X57aXNSbpAjNAyzCBZLECNlGo/Dz0nzHXdU2fJqH6nb6XD5aUf3N3hbLKCoIczMKYPi20b0jeqb9vMCLlosNQcyZx8wCNvzrEWu1OKdiWhRoo0H3VuEhjAMgKRPV1oy122vIGBtHQ65SdCbSsJBkAmVHLxR1g4/MYbER+nvDuI9j8HdGid2SBqhI/7Tp9Kw/HOymIw8sP3tsffUagf513HrqK3vDO2dm62S7KEkxIDK8aaR8M6kDeKMvFLNo3zfV7aZizaTucqgA/FqojzHnXQ6PxHNiYAb/wAfMzZ+mRx6vzPjIuVViscEjnNQxOHuMzMGjUmP50Bj3LqCRBXeNoPMeVemz9Y6YzQIPb+fmcVMKlhvYjPD45XMA61cVaknDrbEypAP1+VaLDsYE707oM7Z19Y3+e0XnQYz6YPlauGaMYqaFumtrColWvtJ4Wy9xgiKzMdlUEk+wrSYTsFfdQb95LOb4U0d2PQwQPYE1mMNiGR1dTBUgg+lfSOH32xKYe8VgwDAOghroO+uyivNeP8AX9R0uMNjrSdie9zq+H9NizMQ/ImdfsEgbKMT79zppG57zzpTj+yV62WCFboUkeHRtDHwn+Zr6ZheGqwZifu3m5bgk771nsWp714mc77b/Ea870XivUZS2oggEjj4m7qOkwrWgHjfefObllkMMCrDkRB+Rq61cn1rc4jD3Lwyd2H8mQsdOgALH2FXXP2cKgW47BVMGDcCac48LMeemWu90/iipuwr5nOydIx9u8w1q1JA61suC9jShDYi1aIbKym5dKjKefdqPGfIkUXwTBYVXgWnuaj4FIC+PIQ1xpLa6HwjQGnHHsda/u4t2kXU6DVvvLJbmYTn1oep8Y8whMQq+55+0bi6MIpZtz/aCXMZh7NskNmQHLlsqttBIJA8O/rSxu1mRSbNq2iyBt4jIMEtvypHZdnwzoqszG6NFBY6L0HrU8H2YxbpHd5AWBm4wGwPIS3PpWKnbkxLOAdhL8bxa5ew913Yn97ZHlGS8SI+XyrWfs+sq+HysitAMAqDvceY6bClGC7HN3Rt3Lw1dGORZ+FXES38XTlWk4GjYNClliZ3LgE7seQA3Y1bYrQqJWN6cM0f4DDNbOY2gFA3CywA/CAJOmmg50Nxw23U93czSpkLBUBo1IG3v6eQAvcdxJ/5keiqP0ml7Yq74pdvEZbzPU/Ks56RqoGav6xLujFC9isOMRmykoc3gkgAj01y84mjbLYe22S1Zy5Zl0tQvnDxr86tNxt5PP670NexDqABEDkdvQxrWjHhYLRMyvlVmJ3qZr9rw/4Yf/of/Gvn43gVsv2mcVF25YBWGRHnp4iII+VY4dfWgcU0entE9cauo2morisdjHlU1k8vlVVLM3mFxqrbT90QSQYQhEHkG1NzlqogyfKoXGct+7CWyYE5ZYjU5RJLQRHQbaRWjsdmg7d48k7KI+rmRJnZZ0JAn7yzxnZyUi2UyncbZgTzP4eempg+2A5geTOwMVTFjBsqiGBzk6AAZzMGXJ8R8Q0B12Hkdl7i2xZASQQDchSZRi2YNzOg8QMT71orfZ82wL7OB8M3MslbZLAd2oEwYA0A0JMb0KvBFzQDJbLGZpYg5BB6iMoJAgZz1qHIO8gQ9ohxGKusckmQWJ08IOaCdN5BIk6nuyetU93lOVm5yc2YCZI1A6SToOXUxWiu8MVQ3h8eZgTuCy5nkeWYtrzzEUKOGvOrfC0iYIgmGMegqDIsooYBgrpXMGHSMpAKxpqD6ecRtyo/vlu2wLifFI0EyPxEbyD0IImOQNDvhrgGYopAyycnhzCNG6/7etTuC4JyKoDTIiBJBzSP4ufP2or3sHeD2ozOdoOFd3BVAyMYzE6LpIDe2oPMUgXCZj4YygwTGhMEn20r6amDN1WVlDAgrcXbmZ09uUEeZ1rMcX4C2HUtaBe1mk7llkGM0bjzrrYOsXMQubt3+f4nPz9OyAtj4+PiZzDWZJGQEDXoQDsR1FMLTQTkYnX4XBmegJ0rvDlDQV3QwORKnWCOY5eVMcNcwzYhVupcygBmNtgOUrKwS3oNa6yMuHCct/7+gnPJOTJomcsYli5EkSSdOcbaU5s22IllM9FDH56b1v7mANi2rYGzZTMoLELN0guwnO5JOinfYn1qy5heI3TaKXLqr3SZ2N0IM2pPwNBOqyQOmtcVPG8mIEAX9Z0//PV6JNT51ctONQhAH4lb6mNK1vYbjTFrNnSC0RzXVvpqfnWmXAXxbcPi2dmAHgZ7mQh1MgkidiOW5qi9gibFpxcy3FS6xu5FLlgrKCGOqczoazdT4ierx6Mq7c9uYadKMTWh34+0YsrAmGYCW0zGIJ1ETtSXjHB7YupdveFCbpbOx18cgKq6kc9B96m+M4LhUBz4gE7E5VJk7TuZPTf21pH26xSjD2Ib4EuCcubKVRRMHRojasmJVHshNqPuFQ3hvaruFa2lx7paQAEVVEk6gkZidQBI2GxM0nx3aK4CUi1b0Y+PLmICgsYfRtEBPh+7WVfErctrmv4g/ublwqmSyjBHuL4gpYScsbbAelV27U5GtWAF7plXNLtLJcJGpymC0nwzE1s8kCixiGygcCOF7Ud48faXJEkR3gUe0CPYGmK8ZughnVL0AMCQCwBEjVdRIM+IczWT4NfdXi4xVBGZbYRfDufCAFmOorSWrdq46MbcQ+FVWVsreK0zHMIKmCgEBV51bUp9Jgq2r4qb+2FUQoAA5CNPYUNfx6gwAW9I/Uis92Zwha4glihtB4LEye7XU7azz51sm7OCFK6yAdSo36SaU3VtdKLhjo0AGoxbisTdtxmtgZgGEtJg7GIH51WeL6f4ZPvH0g/nROJwhDMgUZkGoaWKjqegpXisclr/ABL9q36i2v1Y0huqc839o9Olxj4+85jeKN4QBlkxpr06jz8qvXEPPwqfUGfzoPG42w9tby37dwW2DNlIYoszmbKIAOUx6Gk+L/aHg1kqzP8AwoR/5ZRU1ZWAq/zJoxAkUPxNd3Dm33ht2wsxvBn0zUM4QjxWz6oxn5GspxvtdftnLbsF5QXZGaEtkSM4AO0MZkbVl8V2jxuJ8Ks8fgsqRzG+WWI1HONRVjHkIvUR9zAY4+KB+0M/aIEGIVUfNlQBgN1OZvC0bGIMcpE1m1UkRXkWBBgURm005c61C6AJs/PzM7ab9IoShrfXSqySP/dEBwx8+VUC4T92jG0GfdRelQQdAbhkFhqAwtkAb6SfUdRpZacMwAaJhVGkgFBGm+hJ58zRmAwOHKMqXS0uxnMJDayIyLyRvkarwnB1N20wvTkuAxCSTkZSDDaaGdB1rjjG1i52/OSjHIsNbz3BytiBG2VG+evLzpBa4mpGdraMVdYyfGYIBGbkpygk7Eia1PFLWZHXqjjeNwRvyrE2+D3CSoK5p+5dWCQuhOvv603qSyEBRYisAVrLGEG5Zfw9y4M7htM8EBt9V+AHyU6a1G6cOWAPfrmmMpB0JLDnoQoM+a1bY4DdUOfFOVoHeKdYlYgzOb6Gla8DxgcOc8ayBrrrHtBP1NIDNW4/UdSng/uEtawuVv3twzLLmTUlcwIkiCSYHXWRXF4bbKM2a4UJPiyrrrdaR8rf/V5a+weCvPdTvUcKDJlNOZ6bTHyrTYbDILFy3EqtxkBnlK7fMimYjrJsVUXl9Mztq2ouORJtlbTnQffygP5Rr5wDQ922paC4zhSdOcbzGhG4jzjrWi4xaT7HcIUDwodIHNIEn0A1pLw6yt3O65WMXFYFgGXMDAO+5hp50bDSQL7SlNgmZTi/Zezn7/u2hSC62zlJUzmBjTSDMax5QAdYx2EtXRYwyW0YxlJGrch4n0O2+mkU2TC3SuRlA+IfFmzKQsz5kg/Osdf7HvaIKFGuKVMXFgnKZ+ITv6VoXFkypTbj4v8AxEtpQ2o3ms4rfuhEtsfHltSJBnPeuKBI01BFFNiTbNhLgzHIknddVUTJ3H8qP4Rxa2FRbhCPynTNBMCeRiNNfU1d2nv3zaL4dvGIK7FWEDqYIIM7jbes7IF2Ir7Sw5+sTv2xwyMbWcBkliY00mducHauYE/aLIW04OYXUBGolmYT5jWvlfH8a1+6XZctwaOAdCQfiGpjSJ15UV2b7QfZ0cEXAzarcRtbcfD4WBWC2pjX10pnlenbmKGb1erifTrPZQI7FLwLAmSweRqZIVh1+pFIv2gYQLh0A3K4jUnc5V66DU1kcT2tvtdzi8VJPInIfhJMdGgSPMirMVxW4wDXrvely0LOYIkLuuyzr6+1HjVlNn+IByq2wvvzFiFRbRTdCnuXQqFdmlrlxsshCuUqw1BmtP2fxhNhLKtldhkJKrsQTMgztm1MnXlpWeZcxjKgHKNwNToANNz7mmFrAvkeFYlMrBwrEgNvqBBEToDy8jR5M1mpidbjHtV2ZsWJNu9nMDwqA27QGnSQNZ0OojQnUHhmPTvEQXGBLYVvFaIXw2SNGQtqxuBtQI19aGxFu5oCHI1hmGWQRzEQRE/OmfCMGi6i5n55SFgH1AkGeppfnLfEZhUtsOY44BxbJdy6SmHA56/ukOm0b860vBOPYcKBeQLcYyxV7eUMWjWPEIGUx5+1JeFYK0Atzux3jIAx1OkARGwEADblTTDcImMmHmCSCLcwTuZjfQa+VWMVtYIjnykc3tLsBxhRfvXWcmQGULnzMIII0IJiCI8qwPFw1+7fe3kWcpV7hVWGmpkAlue9fQcNwxmcgWfEdSSkE+pI9aMbhV1B/hEei/ypqqV4MSchYcGfKOH27iWbwa5mJAjKZOguSdD5qKG4rhHZstu3ePjcLk8M/vGCgmDPITX2BcJeOgj0zr+U0NxDCXUQsynLzMggTprTAdtzLIe7oxZiuDpbsRcYi+iIzPmZgCUZSCJhhkLKZ3knpWKxuJv21ZA2UhmRsogQpgyYE6zptrX1ji/C7fduqqFAUAZdNNjpttSvhuBuElGQsqsULZcwJG/1qjiV1pux/UDIwU2P+M+LY+4DdbMoLaTvyA19dqqcKRzHmNfod/nX0XtV2BuYjEM9pURYUETk1G+gTeI58qUY79n2JCTltkqBCWncGC2utxQp3nfkalqDQhhSVBqYq7h2GoII6j+XI1dlWBJ5coPzppiuzuIsgs4RQAZDX7IJgTAXvCWPkBNLHaD8I16/pV6pVfM+/YRneVFsLlKwwzQRuZMDUEtPKbe+tTt2blu/azhYbKoMHNmAZj93osQTs81hF7YYq2Za8JGuSHjUbnxa6VouxPEzirt17jlntFMhGbKwKnNIJI+8Y/irnqRY2nTbEwskzX8eP7i7qB4H1Ow8J1PlXylA9m/buXbZNu25zXFBZYCPqpA1ESZ8oME19M7XN/c8RrH7q4J6SpE1mcDwm7a7oh2YRDZM2WYytMEA6jeNavqgCwv4jOmYqpA+Y/Vnz28hRFWCdSYEfeBAJ00oTit5Ua/f7wHIqeEa5u7PeyD93QlQKIxVuxbRFUWRcKzLqCpaASrACddf6NLcDbum5na2sFl0UyqMrM5h1PiXNlgFQRPOkldIraUvN/8Acyrsz2w+1OttLTBZCl++mCWnVTb1OvltWgtqn2W6XJyF7zMQRMLcY6GOijWKQcKxY+0NKqzJfKsyDXVc2do21GWNvCR503Rk/s9zmYoe81y6wbjT4ST57mnYid/oai2WvuRD71wvhw6MFLZCCQCPEy6Ec5mPelvaNkGZ0y6DQqFJBCXCdufw70ddvhMGHgwFtmIHVdI5fpWZfFgJORYd20ZhmJyFtB3i6EE+kHeJqdQzbKO4EmJAbY/O0gOKoMEmKPiLMV00zeIAGDtpypVhu19i8oDIyy14AmGjuktsTp1Dx7UV/d1w9nCK+ZTIUqt3MdWzMFyODEqYJgk8tqDwXZ/DBFW25lS1xs6ne5bS3kKsqlgVYHT8I2okyOpNH6SqOwMnxrilo92htZ1JCkzp4gFB25Fv+2q7/CmxV42nvzkQJJQT4rgUAZgVWARJGp8p0B45ktuEEko9sgwIy+Fzz36Dy3orhHFb3f3LwRWQsSdVBVEbvJE7mMjHQ6yNdKrK75FHyJekDetoBxPgi2sMqNkyLdVLjlRnI+0Om48oM9BG1A9o+B2YtHDkki27PlWR4c2ZmYkADNAjoZANFcW4/ndWysttXNwjwhzN1roB1jmB11OnVhwa9cbCXrTIxLqEtlbRy62nUAMBBUMNW21HtWMMN/rFvpJ0mYx8Bdt5M9lGlgBmB1nYamOvyojH47MyItkWlQupyGQxMDPnbWPCNeW4o7iuCa0ql2lwUIUBgdCJJzqAKV457twF2YS5JILKCZOmmknw7jy2zUaMeTM+QKpoH8R/hOE5QLl0hyAuWTmztIyE5Z0Csp5jaqsJxhLjOjN3ZWGVVOhnKQwK+qjekuJw924A/hDFEUophgTlCNlAAckEaiTvO1XcLwLWi5df+QcpIiSrostppBUiJBn0qjiTJ7jvFMEbYTR8Q4iqOBfOVVXNbOfxZtIAAG3+apcE7V2WujucPld8oYgoB4Q5BGmbX93JIOxrA3sT3pzXAJjQLMCNY1JOpM/lFNOzzrbu23LqBBkHNI0YLICySdIidx7UmBcY2g2FPpn0/sHxxMTce9c8KquUF3kwFBOsDrJPmOtb6w9t7aupzJEiCY66j9DXwzsg0W7ngBzJcUHMRBhhM7AnYAeRgmBW2tcaKYG4qXGYyrL4SrCzlGkqIklSJHNjoKsZfLJFXNBcsBqM1GAx5JuMyjLFmAPxvmDecfDHl61l+Ndp8TauoquoD2rTnwLoWWSJiQCR150DwXiV9EC93cf/AAQ0ISn7u7cViSCYcqQY8h7us/fBF7ubRS2CXSYygQCwkZtPLX2nPkzsqjn7RePciwTzM1a7U43vVsi8wDtcG+wCW20J1+/TDs3evXr5W7cLqyyQQupV1iTEmNR71XguF2GulzK92zhMzDUkIM0A6iFUa9NqZdmeCmzeJF7vcqEExBlnUrpttm+VFjfWyibS5RG9J/U0rJnzA7ER81H61ge3HDrr3yLV17amCwVioJIDEmNzLNX0K2P/ACP5kV86/aPevLfXu3ZZLhssawlsrv6muhk9pImXFpBGsWJnz2RJ1N0k/wBfWkl3g4+0fZ5Oed5n7uamv9r4kADvuW5RZHvHpVSWXN0YhLga7oTIhR9yCI105isqZCPcY3MUatCkb7/SRtdi70wMsdZimnA+CJDrkFwK0T4TB5jX2qacWxA+IWT/AAhgfq0fXXypYOJ4oEgDDjWfiVTrrqHaaJyXX0mopkSu8v7SpZtW0KWxmuM6znfwqiryJI+8PlT79lWHZb5YPmDW0kT8JdLLxG5YQ6z/AJDtNXtwS+wEohiSJ0gmJ29BTrsvw3ELctFyukZwryJAjQZdvelB7IA+Z0mGxJj7trh3fA4hFEsbVwKJAkxpqdtawf2lD4nKE6g+KDpIHhUGNhX0rjq/uX1A0iTtBIrMnDWiBN9hHK0cv1YnWj6o7gRfTe0mZbC8TClwNp0EHz67084TxFSjA21cySqsDGY5QsCI3H50YcPbBGRrjjnnvvm9hEfWqB3e91byL1Cqy+5zPA8zFZtV8RzcbiD8HCWXvlwqzddRnUAx3a5HB6AhhI5ufOmIvf8A0+YmJB+t0/pVljgeCuS0BiuhzLa05xIX0NSxzWUt4dAi90XiCco1zRqB1Mx5U5NrJ+DE6rIAHe/xHdqwGwyI5UDKknTLKxGxAiQNjWd4lwZJDLdIhlP7svrly7gNzAI/1Vrbdu2VFtspXaCZ+HrPpQGOw9qQEW0JP3VUmn51sAxCZNNiYy3w/IySrmFafE8ElnIkEgndP+mo3LTBW/u+pRVzhlmQwJJnUyB151quJWERc2TqNAo+oE0mweEzxqYaY8b8o/zaVlAa6uN81KsiYvHQbjNdTKjZBIu2zBUFV56jXy96E4dxpbVxk7o5WzIxfLC5gVzggFtN/COWtb3G4K1lgoW6g3GA5H7zRzpBf7Km+4S1YVP82cGPMCf1FPTmpQzWKH7qZXFQ6sAUjUSXWPzrb8C4yrYdZdcykhgjFwOayYGpBB/nQVz9k7kn96NfIz7agUFd7AvhjmtYxbTEQWL92fch5jb5VtxDRvURmfzDvAO31t7t9HRWcd2q+FGJDKznkJ2YfKnOHITh2F7yUUO2ZnWRbGa4JYMNNSPnSB8Lj0uH+9XrmUjVLl0odjpJhvSIrVYTjuIFsZu51EZbrKp001VnHy0oiUssdpmKsaUCCYM2Anht4e5n+JkGa2YI0Q+o1EkabaVdinw6Ya8BhrauVukXAqSJ8QQArtoo35aRpA72rplz3YGp8LWgo56BWgCh+D8Qs4m+LDjPaAbO8eDNlIUAx5mD1EjaazqGL7EVNGRcSY7I3r9wDsfwu1ibwW5bUjK50GU8o/Ot1g+wuFVSBbPi3OdpPrBiocE4Fh8PcF2zce5oy5C6sFBgzMZp0G55mtJa4ivNG+lbMeBdPqAM5rMrGxtMZjez1jDu+Q3pygQGJILZQsQJPpMeE1UnZ1ncxmtQttgjeMNJYBjBBX4dtxPlWj4qcU90vYsW7lqACGuZHzDcdIjLz3HKoYbvO+K3LPdHulgd6rg5XaYg+EDMPn5Vl6jp03aoeJQ7jUbir/40zZRculwI1lwQAIGVQYMDaep8o03DrVu3bYM4CaZiVKgMSYZVUwpk/FqZA6VUrCgO0eJZMO+QEszWwANfvDeP0rGFUXt2M3OoxrqXtGmJwNhkgFJmQ4ZpB02E6fOffxVLhWDt2oyRDMJhmacisZOYnXUbdBWEw/HLlu2AyMFQGVYkkjeQPXbQaVHs7+0FDcQXEaGJE5wqKGBE6mOfONtTUw1q1VxLXqFzYyoJvuJ9OtDwrSPi3AbF7EOcRMDu2tkFhBYZWGh1/wAMb1Vj+KX0tIVMyG8U29CFzaqFj20oa9jkuA9/fW6mY5CwUaKSumRROubXzrS7Whva5CFQ2SJbe7IYNhAcj5fSRQ7diLA2vgCZhgN9twRQrYfDEZbeIQDUhWyMAYgEHQ7gese9LPsjkkLirLbAgWEIPPXxHyOtYXGNB6jQ+8FuqC9pd2i7Kwo7q7ZIgjKt0hyw2yjWfSsg4uW2a3csklTuQRuB1HpWuNsgkjEBRJhUUoBPpB6c+VHYK8QsG4GPVmJJqkz4VHpJ/BmPN1JPtEpvdoVf70D3FHdl8QGxFsqQ0EzGsSrCT0qXBeF2Xu5big+EsAdjBA18ta1NrDBSgt5VQTKqABtpAFFiXUQ38z0OZwoK12nOPXXe21tQJYEams7a7M3D8VxR6Sf5Vo+JWmYeAEnyoIWLnMfNl/nT86qzWZnwuVWlgVrswg+K6faB+tS4wluxh3BvXQHBQMurBmUgFSBIPOfKjgI3Kj1YVG5ikUasKVSLDt25nzPAcGDH/jcXGbULduD5jJv50ysdlg9wCzi8Uzgyoe+Ghl5w1vcEGjuNYAki7ZxNy04zCVTwNMEBtY0jSetZr+0eKWNUSWzaXMitBJkmV3Op3miV9R2MjLpF1PouL41aGVVuZrm0LJYmDmnkOczWR7Q9orQYJnLXJACIczTyACnQ0kXgd1x3mKfEXCZ8CDu013kASfYCh8Otu22WzaCnbQEt6EnWnFQ5u7qc/L1Yw7aTZ+Z9MwWKb7Mi3WOeJYMZIJ1yk8yNBPlQ1tisZW0Ex770ms3rptLmVhoJJB+tHYAk70AxmIfPfEM4hqtqV6mQdSZG8+lQxkDxZAdAIZZECCNII5Cib4lUH4c31Iq5lBj0FGU7iL1c3FuI7TMwKk5ZEfFHlyoRcEbx7yzlzj8EKxPURuetG4nhisTIBq3hnDltEMBIkSp9ashjzImbS1yhrjAAXEZWjXMhieZB5Uu4pw+1fy52RYM7wdiNJ33mtE9++pMEga6TpUTxA/fCn1RT+YpgUnvGHrFGxFTEXOx6nMBcLBhlAm3CyVkiACNAROu9MMF2Q7tYS4VH+WPr+L3rQ3Bh2+KynqAVP/af0qIw6b271xD0Y51+X+1MW1imzJk7xOcTisIpAcOm6rktFmJPi1cdIO/WoL25vD4sLc23GHRvrbufpTq9edIN1EuLMBl6x02B+VB38PbuOBbJCtyMLlPPU6f+4qFmvY/aGumqoSWE7UYgZpRQCQRkHhIKKZ1kzMj2pL2ox95r32pQBkTVdRmAjMI6QG9ytNLFhhICmBAELp8lFVYu05PiR4jlbzeu8fKmMhZdzEhtD6hC+GMmIti5bupBEwbqBl6gqTIplY4PrlugFTuGKsNNtKxXBOFWrOJW4ne5fGMt23lA2IymB0IiSfPeqbWPxg+7hTrt3NwH3lRFZTja9pvGTGRuZvrvZXCOGVkcZpGa21xRBnQqPCNzrH86xvFf2bWbd02xcuJPwZgrBl5RAFd4Ti7zXgMRZsoMpZDbX4uW+YgRp51o7GMujnIEiGGZfkdqZjXaiIhiiN6RtMpwYWcNfuWQhuLbDMxdyMwCgZZA8OkbUu4/cy3dEYLbS2ujPAkEnVgJOYtqehNN+DC59sZLgUCboBYZSVbJlJ2lY57SGHKi37J4lSCEw7jQ6eGYEDRoA06b771WZGK6QIObS+wMC4KrNaDDN6tz6wfnRZzjdR84/SjLj4hRlfB5AOdtWgecrIoVnmdCD+XsYNclulyXZEV5DVtvBbzn4is6HYzsAfyM1Xd4lbQw1vcDcFuWuqMBvUr+DUmWzgjYroT/AFrvQ97hSsZYOdBBPdk+cxr8+tWuMj3CvtB8thyDNo2IDfDbkjbKYjzBBOX6VOzdvTHesvkQG+rfnNRxXGrFkQYEbLpPy5UtudqXcxaSB1Op/kKauS+3+J6U42GwP53j/EY1rcB7sk8kCHTzPL6UAL73WCqzqCSAzZQpK7gEjcUkvO5+MzPI6/nXbWIaABsNhlED6UDlSd7/ADDVGA2r8Rth+5ckDEZiokyzaagc4HMUbYwyLsM3mI/Sk+HzDcD9T/WtEifwj+vPXoNv/dKqk8yHWBxceC5AjLPrXLmDsnxG3b0G+QSPcCkv2p1Ml29eXyJygebED1qWP4q5AQ+o2B06zHXoKeU0rfIigdTVwZ6/aWTlGVfXkOZk6UgQzce8igEaAkAyAN4PvTC4xdShO4jzpNf4q1tyhTLHLy5R5VOnXVZHM5/iuY4wFI2Pf+ZbieNX7gyMWPlED6UdwrPzMeVLbOLDa0ZYv610VG3E84uU3Za4+1jepPcM79KBs4mrxdmqCx5ybbS9sQYqS4v4aGZJq6zhudWVAgB2J2jG5xNSpEcqVYsjSiPsmhNDvbmqVRKzMxG8HNeANECxUskUypk3lHfMun0/Q9RRmGw9lzJlDH3dp9D/AD9qodGmRoa9YBBqtIPMfizMpjaxgrq/4dxHHRt/rrVveXl0ax7gx8pmhsO5ozD4hpgEj3q9NcGblzhuRA8TdV/DcsEg8mQMNPWoHE2Z8SsP9Jp3jGdGjPI3EwdPcVQcSTuFP+laum7GGXUGjEXEcHhr+Um46FZylcykTE7iCNBoaH/sW4DNu9h7vlcQI3P71ojqeXOtG5QiGsqfYj9apbA2G3Rh6N+kCoNY+JNSnvMJjcFft4kPbw7q4WCqh3tsJJJD5QQDJGkwQNOrXA4k3DAZ7d3nauKD6xoGYeYPyrTXOFADwXHSdpBA+YmoXeF3WXKWt3R+FwrD5NrVFz3EIc8wDDXMSjAZbRU7ybiR0hTnU/MUyu4mEBu2g0mIUZgB110j3pZiODNqDadPOzce38lkj5CmOBxS2rYRzc8I+K4JJ15kampa9jCs94K17BnVrZTr4SoE9Smg/wB6rPDcE+ouD3ZR5feWdwR7U17mzc/BPVTB+VVNwZTvlP8AGisfmQfL5VWx5H4hB2HBnyu1Y1zMxYncn+pNN8A3pHkaV2LVNMMw/qK47bz1CioebYPX5/zq2xZA2g+uv5UOmJX8WvlrRFtiRoQB1b/agMvaWsT1j0gfWuqfU+sn86Ee45YBWDAbkKAPaSZq/wCz/iPzM/TapUuevXRtmy/6vF8hQ7EAabATER6lJOnKV2P1BAtqNgfyFeZwNNB6b0amot1DfWLxxBQQrkIxEgj4W/hJifeu3rKXB4hnHLXUehG3tVF4ENAXq6TJUxPeI3QEajeI6nUdsPl0Bcx+8UZpdrR0IMyWKGduh30l4wH3IZkbMpBTIt/Mufgy722ZfJoI9iIP51WbF5PuhvQ/pvTtuGXjaW5auLdUiYjK8RsJnXymk5xkkgKQw0IPI+fOjXNlXYzG/hnSvuor6SdjGP8Ah/Oilxzc1oNGafEaJt4nka048gecfq+nPTEatweDDLHERzBpnh8Wp2NJwVPIV4241B9qNgZlTIk0tu8IPnQhpVh+IldD/vR1rEBtRVoJWV7AhC1beuAnShproNHUz662h2Cw4ZgOtG8Y4ctvLl6fXrQGCv5WB6GmfGMSHKwZEVXea8YQ4ie8VKIq1GrhFeWimcGoRevs5ljrEVwCoKavt25FSMDFjISa6KIt4Fm2FV3bBUwd6u4ymAsiTv4pioU7CoLcqDW48/Ko5agMo5GveXpjGGx+tWjFqfiUH2/lFANXQ1WaPMtczDvDThrDcsp8v5aVU/DGB8F8gdMxH8qpDVMXT1oTjXtHL1HyJ8it3nbQA064dwW6dWIH8U/lFPBZW38CqvoBVlzr5c9fzrikz2Ki4JZ4WPxz/Cv60R9mA128yZ/r51E3TG/OvDed/XX86qFUkXXlJ9NB/XvVd26fJfrVWLuERrUKlQpxtdyx94H0ifrUHvRpoPSh8XcM70Lc3owLgk1CcViQFNwa90yuILAwSFYGAdPg5Eact6GuXwgYrAS0wuLAARrV0agljk5jZl+I9dYoubMp2KP5cuo1odP+KS3yOFOv39Hcf4nx8hz3E71vwgaanN6g+u/mppuyuNym5ZJOVTmRiXIKtqPE2h32DGNNtqG7YrbV7VwNlL5g0aZgsQfrHyrP2sUyYtEUwDYMmAWOVyBmcjM0eZq7i95muJmJMWzE8pb/AGocgqTGZM4u1r4p6c/zqx7wMFdiB+tBtbBbblReJWMv8I/M1MIGqczxxj/TX/Il1nEUWmIpWlELtWyp5BczCGvDetRs4gof61qpK7f2qqmlcpO0dYbEhhNXhqQ8Pc5hrTpKkMwpGq1XoW3V61IQaXB6mpqgVIVdQ7hANGYVxloBKsSqIjMbUbmjwDApQOMaWNDYO6ROtRtbmqqbGzWgFSxrelVERvVy1Tit6uKcbXK3FcyV0V0VInmQK1Gr6gau5Kn/2Q==",
                }}
                style={{
                  width: hp(33),
                  height: hp(16),
                  borderRadius: hp(1),
                }}
              />
              <View className="ml-3">
                <Text>Mendiata hotel</Text>
                <Text>Barcelona, Street No 31 Central java</Text>
              </View>
              <View className="flex-row space-x-2 items-center ml-2">
                <View className="flex-row justify-center items-center space-x-2">
                  <MaterialCommunityIcons
                    name="bed-outline"
                    size={24}
                    color="blue"
                  />
                  <Text>2 Beds</Text>
                </View>
                <View className="flex-row justify-center items-center space-x-2">
                  <MaterialCommunityIcons name="wifi" size={24} color="blue" />
                  <Text>WiFi</Text>
                </View>
                <View className="flex-row space-x-2 justify-center items-center">
                  <Text>Github</Text>
                  <AntDesign name="github" size={24} color="blue" />
                  <Text></Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>

      {/**Recommendation View */}
    </View>
  );
};

export default Home;
