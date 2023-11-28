import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import appColors from "../assets/styles/appColors";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import GreetUser from "../components/GreetUser";
import BoxRedirection from "../components/BoxRedirection";
//import { NavigationHelpers } from "@react-navigation/native";

const WelcomeScreen = (propsNavigator: DrawerContentComponentProps) => {
  return (
    <View>
      <GreetUser />
      <BoxRedirection {...propsNavigator} />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
