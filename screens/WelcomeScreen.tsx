import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import appColors from "../assets/styles/appColors";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import GreetUser from "../components/GreetUser";
import BoxRedirection from "../components/BoxRedirection";
import {
  userDefaultContext,
  userIsLoginContext,
} from "../context/LoginContext";

//import { NavigationHelpers } from "@react-navigation/native";

const WelcomeScreen = () => {
  const { isLogin } = React.useContext(userIsLoginContext);
  const { username } = React.useContext(userDefaultContext);
  return (
    <View>
      <GreetUser name={isLogin ? username : "User"} />
      <BoxRedirection
        text={
          isLogin
            ? "If you want to see the portfolio, you must do click here!"
            : "If you want to continue, you must login"
        }
        textButton={isLogin ? "Portfolio" : "Login"}
      />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
