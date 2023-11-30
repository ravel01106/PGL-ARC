import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import appColors from "../assets/styles/appColors";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import GreetUser from "../components/GreetUser";
import BoxRedirection from "../components/BoxRedirection";

//import { NavigationHelpers } from "@react-navigation/native";

const WelcomeScreen = () => {
  return (
    <View>
      <GreetUser name="User" />
      <BoxRedirection
        text="If you want to continue, you must login"
        textButton="Login"
      />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
