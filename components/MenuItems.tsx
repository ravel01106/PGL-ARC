import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import appColors from "../assets/styles/appColors";

const MenuItems = (navigation: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...navigation}>
      <Text style={styles.styleText}>Menú</Text>
      <View style={styles.styleLine}></View>
      <DrawerItemList {...navigation} />
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
