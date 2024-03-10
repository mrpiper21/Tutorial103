import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import { View, Text, TouchableOpacity } from "react-native";
import HomeNavigation from "./home";
import MessageNavigation from "./message";
import ProfileNavigation from "./profile";

// function MyTabBar({ state, descriptors, navigation }) {
//   return (
//     <View style={{ flexDirection: "row" }}>
//       {state.routes.map((route, index) => {
//         const { options } = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: "tabPress",
//             target: route.key,
//             canPreventDefault: true,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name, route.params);
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: "tabLongPress",
//             target: route.key,
//           });
//         };

//         return (
//           <TouchableOpacity
//             accessibilityRole="button"
//             accessibilityState={isFocused ? { selected: true } : {}}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={{ flex: 1 }}
//           >
//             <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>
//               {label}
//             </Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// }

const Tab = createBottomTabNavigator();

const ProtectedBottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          // headerTitle: "Hello",
          headerShown: false,
          tabBarStyle: { position: "absolute", backgroundColor: "white" },
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: () => <AntDesign name="home" size={28} color="black" />,
          }}
          name="home"
          component={HomeNavigation}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <AntDesign name="search1" size={28} color="black" />
            ),
          }}
          name="search"
          component={HomeNavigation}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <AntDesign name="message1" size={24} color="black" />
            ),
          }}
          name="messages"
          component={MessageNavigation}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => <AntDesign name="user" size={24} color="black" />,
          }}
          name="profile"
          component={ProfileNavigation}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default ProtectedBottomTab;
