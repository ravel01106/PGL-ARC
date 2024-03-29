import { StyleSheet, View } from "react-native";
import React from "react";
import GreetUser from "../components/GreetUser";
import BoxRedirection from "../components/BoxRedirection";
import { userIsLoginContext } from "../context/LoginContext";

const WelcomeScreen = () => {
  const { isLogin, name } = React.useContext(userIsLoginContext);
  return (
    <View>
      <GreetUser name={name} />
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
