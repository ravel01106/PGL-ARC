import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import appColors from "../assets/styles/appColors";
import { DrawerContentComponentProps } from "@react-navigation/drawer";

type BoxRedirectionProps = {
  text: string;
  textButton: string;
  propsNavigator: DrawerContentComponentProps;
};

const BoxRedirection = (props: BoxRedirectionProps) => {
  const { text, textButton, propsNavigator } = props;
  const { navigation } = propsNavigator;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subcontainer}>
        <Text style={styles.styleText}>{text}</Text>
        <Pressable
          onPress={() => navigation.navigate(textButton)}
          style={styles.styleButton}
        >
          <Text style={[styles.styleText, styles.styleTextButton]}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default BoxRedirection;

const styles = StyleSheet.create({
  mainContainer: {
    height: "60%",
    width: "100%",
    backgroundColor: appColors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 70,
    borderTopLeftRadius: 70,
  },
  subcontainer: {
    height: "70%",
    width: "70%",
    backgroundColor: appColors.ternary,
    borderRadius: 70,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  styleText: {
    color: appColors.letterWhite,
    fontSize: 24,
    textAlign: "center",
  },
  styleButton: {
    height: "20%",
    width: "65%",
    backgroundColor: appColors.secundary,
    paddingVertical: "3.5%",
    borderRadius: 70,
  },
  styleTextButton: {
    color: appColors.letter,
  },
});
