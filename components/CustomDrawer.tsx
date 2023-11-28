import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from "@react-navigation/drawer";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import PortfolioScreen from "../screens/PortfolioScreen";
import appColors from "../assets/styles/appColors";
import MenuItems from "./MenuItems";

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  const drawerNavigatorScreenOptions: DrawerNavigationOptions = {
    headerTitle: "PGL APP ARC",
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: appColors.primary,
    },
    headerTintColor: appColors.letterWhite,
    drawerActiveTintColor: appColors.letterWhite,
    drawerActiveBackgroundColor: appColors.primary,
    drawerItemStyle: {
      width: "75%",
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50,
      marginBottom: "10%",
      alignSelf: "flex-start",
    },
    drawerInactiveTintColor: appColors.letter,
    drawerInactiveBackgroundColor: appColors.secundary,
    drawerType: "front",
    drawerLabelStyle: {
      alignSelf: "center",
    },
  };

  return (
    <Drawer.Navigator
      initialRouteName="Welcome"
      drawerContent={(props) => <MenuItems {...props} />}
      screenOptions={drawerNavigatorScreenOptions}
    >
      <Drawer.Screen name="Welcome" component={WelcomeScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Portfolio" component={PortfolioScreen} />
    </Drawer.Navigator>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
