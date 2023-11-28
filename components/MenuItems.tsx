import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import appColors from "../assets/styles/appColors";

const MenuItems = (navigator: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...navigator}>
      <Text style={styles.textStyle}>Menú</Text>
      <View style={styles.lineStyle}></View>
      <DrawerItemList {...navigator} />
    </DrawerContentScrollView>
  );
};

export default MenuItems;

const styles = StyleSheet.create({
  textStyle: {
    color: appColors.letter,
    fontSize: 30,
    marginLeft: "10%",
  },
  lineStyle: {
    borderBottomWidth: 2,
    borderColor: appColors.letter,
    marginHorizontal: "10%",
    marginBottom: "10%",
  },
});
