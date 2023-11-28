import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import appColors from "../assets/styles/appColors";
import { DrawerContentComponentProps } from "@react-navigation/drawer";

const BoxRedirection = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subcontainer}>
        <Text style={styles.styleText}>
          If you want to continue, you must login
        </Text>
        <Pressable
          onPress={() => navigation.navigate("Login")}
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
