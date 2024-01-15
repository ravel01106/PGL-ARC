import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import appColors from "../assets/styles/appColors";
import { userIsLoginContext } from "../context/LoginContext";
import { logoutUser } from "../services/LoginUserService";

const MenuItems = (navigator: DrawerContentComponentProps) => {
  const { isLogin, toggleChangeIsLogin, changeName } =
    React.useContext(userIsLoginContext);

  const fetchLogoutUser = () => {
    const fetchData = async () => {
      const data = await logoutUser();
      if (data != null) {
        toggleChangeIsLogin();
        changeName("User");
        navigator.navigation.navigate("Welcome");
        navigator.navigation.closeDrawer();
      } else {
        alert("Error when trying to close session");
      }
    };
    fetchData();
  };

  return (
    <DrawerContentScrollView {...navigator}>
      <Text style={styles.styleText}>Menú</Text>
      <View style={styles.styleLine}></View>
      <DrawerItemList {...navigator} />
      {isLogin ? (
        <DrawerItem
          label="Sing out"
          onPress={() => fetchLogoutUser()}
          labelStyle={styles.logoutTextStyle}
          style={styles.logoutContainerStyle}
        />
      ) : null}
    </DrawerContentScrollView>
  );
};

export default MenuItems;

const styles = StyleSheet.create({
  styleText: {
    color: appColors.letter,
    fontSize: 30,
    marginLeft: "10%",
  },
  styleLine: {
    borderBottomWidth: 2,
    borderColor: appColors.letter,
    marginHorizontal: "10%",
    marginBottom: "10%",
  },
  logoutTextStyle: {
    color: appColors.letterWhite,
    alignSelf: "center",
  },
  logoutContainerStyle: {
    width: "75%",
    backgroundColor: "#777",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    marginBottom: "10%",
  },
});
