import React from "react";
import { ImageBackgroundProps, ImageProps } from "react-native";

type CardInfoContextType = {
  title: string;
  description: string;
  background: ImageBackgroundProps;
  avatar: ImageProps;
  skillList: string[];
  qr: string;
  displayMyInfo: boolean;
  toggleChangeDisplayMyInfo: Function;
};

const cardInfoContext = React.createContext({} as CardInfoContextType);

export { cardInfoContext, CardInfoContextType };
