import { Platform, Dimensions } from "react-native";

export const getPlatform = () => {
  const platform = Platform.select({
    ios: "ios",
    android: "android",
    web: "web",
  });

  return platform;
};

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
