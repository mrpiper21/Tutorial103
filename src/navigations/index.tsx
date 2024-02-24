import ProtectedNavigation from "./protectedStack";
import AuthNavigation from "./authStack";
import { NavigationContainer } from "@react-navigation/native";

const isAthenticated = true;

const AppNavigation = () => {
  return isAthenticated ? <ProtectedNavigation /> : <AuthNavigation />;
};

export default AppNavigation;
