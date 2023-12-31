import { StyleSheet, View } from "react-native";
import React from "react";
import GreetUser from "../components/GreetUser";
import BoxRedirection from "../components/BoxRedirection";
import { userIsLoginContext } from "../context/LoginContext";
import userDefault from "../data/User";

const WelcomeScreen = () => {
  const { isLogin } = React.useContext(userIsLoginContext);
  const { username } = userDefault;
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
