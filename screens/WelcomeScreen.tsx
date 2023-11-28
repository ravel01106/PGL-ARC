import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import appColors from "../assets/styles/appColors";

const WelcomeScreen = () => {
  return (
    <View>
      <View style={styles.containerWelcome}>
        <View style={[styles.prueba, styles.otraOtraPrueba]}></View>
        <View style={styles.containerWelcomeText}>
          <Text style={[styles.styleText, styles.welcomeText]}>
            Welcome, User
          </Text>
        </View>
        <View style={[styles.prueba, styles.otraPrueba]}></View>
      </View>
      <View style={styles.containerLogin}>
        <View style={styles.subcontainerLogin}>
          <Text style={styles.styleText}>
            If you want to continue, you must login
          </Text>
          <Pressable style={styles.buttonStyle}>
            <Text style={[styles.styleText, styles.styleTextButton]}>
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  containerWelcome: {
    height: "40%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  containerLogin: {
    height: "60%",
    width: "100%",
    backgroundColor: appColors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 70,
    borderTopLeftRadius: 70,
  },
  subcontainerLogin: {
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
  buttonStyle: {
    height: "20%",
    width: "65%",
    backgroundColor: appColors.secundary,
    paddingVertical: "3.5%",
    borderRadius: 70,
  },
  styleTextButton: {
    color: appColors.letter,
  },
  containerWelcomeText: {
    height: "25%",
    width: "80%",
    backgroundColor: appColors.secundary,
    borderRadius: 100,
    justifyContent: "center",
  },
  welcomeText: {
    color: appColors.letter,
    fontSize: 32,
  },
  prueba: {
    height: "12%",
    width: "20%",
    backgroundColor: appColors.secundary,
  },
  otraPrueba: {
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    marginRight: "43%",
  },
  otraOtraPrueba: {
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
    marginLeft: "43%",
  },
});
