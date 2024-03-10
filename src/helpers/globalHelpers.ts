import { Platform, Dimensions } from "react-native";
// import { getPlatform } from "./globalHelpers";

export const trancatedString = (word: string) => {
  if (word.length > 20) {
    return word.substring(0, 20);
  }
};

export const getDimension = () => {
  const { width, height } = Dimensions.get("window");

  return {
    width,
    height,
  };
};

class GlobaHelpers {
  getPlatform = () => {
    const platform = Platform.select({
      ios: "ios",
      android: "android",
      web: "web",
    });

    return platform
  };
}

export default GlobaHelpers;
