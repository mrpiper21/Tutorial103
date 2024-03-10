import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../../../screens/profile/Profile";
import Favorite from "../../../screens/profile/Favorite";
import Trasaction from "../../../screens/profile/Trasaction";
import Coupon from "../../../screens/profile/Coupon";

const ProfileStack = createNativeStackNavigator();

const ProfileNavigation = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="Favorite" component={Favorite} />
      <ProfileStack.Screen name="Transaction" component={Trasaction} />
      <ProfileStack.Screen name="Coupon" component={Coupon} />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigation;
