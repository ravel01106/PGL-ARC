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
import { userIsLoginContext } from "../context/LoginContext";
import ToDoListScreen from "../screens/ToDoListScreen";
import RegisterScreen from "../screens/RegisterScreen";
import RecorderScreen from "../screens/RecorderScreen";

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  const { isLogin } = React.useContext(userIsLoginContext);

  const drawerNavigatorScreenOptions: DrawerNavigationOptions = {
    headerTitle: "PGL APP ARC",
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: appColors.primary,
      borderBottomRightRadius: 30,
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
      {isLogin ? (
        <>
          <Drawer.Screen name="Portfolio" component={PortfolioScreen} />
          <Drawer.Screen name="ToDoList" component={ToDoListScreen} />
          <Drawer.Screen name="Recorder" component={RecorderScreen} />
        </>
      ) : (
        <>
          <Drawer.Screen name="Login" component={LoginScreen} />
          <Drawer.Screen name="Register" component={RegisterScreen} />
        </>
      )}
    </Drawer.Navigator>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
