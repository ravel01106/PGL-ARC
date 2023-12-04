import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import React from "react";
import appColors from "../assets/styles/appColors";
import { NavigationContext } from "@react-navigation/native";
import { userIsLoginContext } from "../context/LoginContext";
import userDefault from "../data/User";

const LoginScreen = () => {
  const initState = {
    username: "",
    password: "",
  };

  const { username, password } = userDefault;
  const navigation = React.useContext(NavigationContext);
  const { toggleChangeIsLogin } = React.useContext(userIsLoginContext);

  const [user, setUser] = React.useState(initState);

  const handleOnChange = (value: string, input: string) => {
    setUser((prevState) => ({ ...prevState, [input]: value }));
  };

  const checkUser = () => {
    if (user.username == username && user.password == password) {
      toggleChangeIsLogin();
      navigation?.navigate("Welcome");
      console.log("Login Successfull :D!!!");
    } else {
      alert("User incorrect, try again !!");
    }

    setUser(initState);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainContainerForm}>
        <View style={styles.subcontainerForm}>
          <Text style={styles.styleText}>Introduce your data</Text>
          <TextInput
            placeholder="Name..."
            style={styles.input}
            value={user.username}
            onChangeText={(username) => handleOnChange(username, "username")}
          />
          <TextInput
            placeholder="Password..."
            style={styles.input}
            value={user.password}
            secureTextEntry={true}
            onChangeText={(password) => handleOnChange(password, "password")}
          />
          <Pressable style={styles.styleButton} onPress={checkUser}>
            <Text style={[styles.styleText, styles.styleTextButton]}>Send</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainerForm: {
    height: 520,
    width: "100%",
    backgroundColor: appColors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 70,
  },
  subcontainerForm: {
    height: 430,
    width: "82%",
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
    height: "14%",
    width: "50%",
    backgroundColor: appColors.secundary,
    justifyContent: "center",
    borderRadius: 70,
  },
  styleTextButton: {
    color: appColors.letter,
  },
  input: {
    height: "12%",
    width: "70%",
    padding: 10,
    backgroundColor: "white",
    fontSize: 18,
  },
  inputPrueba: {
    height: 60,
    width: "70%",
    padding: 10,
    backgroundColor: "white",
  },
  inputContinerStyle: {
    borderBottomWidth: 0,
  },
});
