import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import appColors from "../assets/styles/appColors";
import { userDefaultContext } from "../context/LoginContext";

const MenuItems = (navigator: DrawerContentComponentProps) => {
  const userDefault = React.useContext(userDefaultContext);
  const logout = () => {
    userDefault.toggleChangeIsLogin();
    navigator.navigation.navigate("Welcome");
    console.log("Logout Successfull :(!");
    navigator.navigation.closeDrawer();
  };
  return (
    <DrawerContentScrollView {...navigator}>
      <Text style={styles.styleText}>Menú</Text>
      <View style={styles.styleLine}></View>
      <DrawerItemList {...navigator} />
      {userDefault.isLogin ? (
        <DrawerItem
          label="Cerrar sesion"
          onPress={() => logout()}
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
