import { StyleSheet, Text, View } from "react-native";
import React from "react";
import appColors from "../assets/styles/appColors";

type TitleScreenProps = {
  title: string;
};

const TitleScreen = ({ title }: TitleScreenProps) => {
  return (
    <View style={styles.titleMainContainer}>
      <View style={[styles.styleFigure, styles.secondFigure]}></View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={[styles.styleFigure, styles.firstFigure]}></View>
    </View>
  );
};

export default TitleScreen;

const styles = StyleSheet.create({
  titleMainContainer: {
    height: 180,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    textAlign: "center",
    color: appColors.letter,
    fontSize: 32,
  },
  titleContainer: {
    height: 70,
    width: "80%",
    backgroundColor: appColors.secundary,
    borderRadius: 100,
    justifyContent: "center",
  },
  styleFigure: {
    height: 35,
    width: "20%",
    backgroundColor: appColors.secundary,
  },
  firstFigure: {
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    marginRight: "43%",
  },
  secondFigure: {
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
    marginLeft: "43%",
  },
});
