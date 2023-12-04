import { StyleSheet, Text, View } from "react-native";
import React from "react";
import appColors from "../assets/styles/appColors";
import FrontCard from "../components/FrontCard";
import Qr from "../components/Qr";

const QrScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <FrontCard />
        <Qr />
      </View>
    </View>
  );
};

export default QrScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    width: 350,
    height: 550,
    backgroundColor: appColors.secundary,
    borderRadius: 20,
  },
});
