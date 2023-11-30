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
import { NavigationContext } from "@react-navigation/native";

const MenuItems = (navigator: DrawerContentComponentProps) => {
  const isLogin = React.useContext(userIsLoginContext);
  const navigation = React.useContext(NavigationContext);
  const logOut = () => {
    isLogin.toggleChangeIsLogin();
    navigation?.navigate("Welcome");
  };
  return (
    <DrawerContentScrollView {...navigator}>
      <Text style={styles.styleText}>Menú</Text>
      <View style={styles.styleLine}></View>
      <DrawerItemList {...navigator} />
      <DrawerItem label="Cerrar sesion" onPress={() => logOut()} />
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
});
