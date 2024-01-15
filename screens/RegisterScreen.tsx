import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { NavigationContext } from "@react-navigation/native";
import { userIsLoginContext } from "../context/LoginContext";
import appColors from "../assets/styles/appColors";
import { resgisterUser } from "../services/LoginUserService";

const RegisterScreen = () => {
  const initState = {
    name: "",
    email: "",
    password: "",
  };
  const navigation = React.useContext(NavigationContext);
  const { toggleChangeIsLogin, changeName } =
    React.useContext(userIsLoginContext);

  const [user, setUser] = React.useState(initState);

  const handleOnChange = (value: string, input: string) => {
    setUser((prevState) => ({ ...prevState, [input]: value }));
  };

  const fetchLoginUser = () => {
    const fetchData = async () => {
      const data = await resgisterUser(user);

      if (data != null) {
        if (!data.message) {
          toggleChangeIsLogin();
          changeName(data.name);
          alert("User successfully registered");
          navigation?.navigate("Welcome");
        } else {
          alert("Error, This user is already registered, try again!!");
        }
      } else {
        alert("Unable to register the user, try again later!!");
      }
      setUser(initState);
    };
    fetchData();
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainContainerForm}>
        <View style={styles.subcontainerForm}>
          <Text style={styles.styleText}>Register with your data</Text>
          <TextInput
            placeholder="Name..."
            style={styles.input}
            value={user.name}
            onChangeText={(name) => handleOnChange(name, "name")}
          />
          <TextInput
            placeholder="email..."
            style={styles.input}
            value={user.email}
            onChangeText={(email) => handleOnChange(email, "email")}
          />
          <TextInput
            placeholder="Password..."
            style={styles.input}
            value={user.password}
            secureTextEntry={true}
            onChangeText={(password) => handleOnChange(password, "password")}
          />
          <Pressable
            style={styles.styleButton}
            onPress={() => fetchLoginUser()}
          >
            <Text style={[styles.styleText, styles.styleTextButton]}>Send</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainerForm: {
    height: 535,
    width: "100%",
    backgroundColor: appColors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 70,
  },
  subcontainerForm: {
    height: 445,
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
