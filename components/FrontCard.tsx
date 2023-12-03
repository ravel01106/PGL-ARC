import { StyleSheet, ImageBackground, Image } from "react-native";
import React from "react";
import { cardInfoContext } from "../context/CardContext";

export default function FrontCard() {
  const { background, avatar } = React.useContext(cardInfoContext);

  return (
    <ImageBackground source={background} style={styles.imageContainer}>
      <Image style={styles.avatar} source={avatar} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  avatar: {
    height: "90%",
    width: "37%",
    borderRadius: 100,
  },
  imageContainer: {
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "7%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: "hidden",
  },
});
