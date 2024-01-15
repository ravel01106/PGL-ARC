import { StyleSheet, Text, View } from "react-native";
import React from "react";
import appColors from "../assets/styles/appColors";
import { GreetUserProps } from "../types/GreetUserPropsType";

const GreetUser = ({ name }: GreetUserProps) => {
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.styleFigure, styles.secondFigure]}></View>
      <View style={styles.containerGreetings}>
        <Text style={styles.greetingsText}>Welcome, {name}</Text>
      </View>
      <View style={[styles.styleFigure, styles.firstFigure]}></View>
    </View>
  );
};

export default GreetUser;

const styles = StyleSheet.create({
  mainContainer: {
    height: "40%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  greetingsText: {
    textAlign: "center",
    color: appColors.letter,
    fontSize: 32,
  },
  containerGreetings: {
    height: "25%",
    width: "80%",
    backgroundColor: appColors.secundary,
    borderRadius: 100,
    justifyContent: "center",
  },
  styleFigure: {
    height: "12%",
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
