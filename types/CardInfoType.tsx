import { ImageBackgroundProps, ImageProps } from "react-native";

type CardInfoType = {
  title: string;
  description: string;
  background: ImageBackgroundProps;
  avatar: ImageProps;
  skillList: string[];
  qr: string;
};

export default CardInfoType;
