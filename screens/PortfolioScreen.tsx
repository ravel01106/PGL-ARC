import { StyleSheet, View } from "react-native";
import React from "react";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import CardScreen from "./CardScreen";
import QrScreen from "./QrScreen";
import { AntDesign } from "@expo/vector-icons";
import appColors from "../assets/styles/appColors";

const Tab = createBottomTabNavigator();

const PortfolioScreen = () => {
  const tabNavigationOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarInactiveTintColor: "#AAA",
    tabBarActiveTintColor: appColors.letterWhite,
    tabBarShowLabel: false,
    tabBarStyle: {
      backgroundColor: appColors.primary,
      height: "9%",
    },
  };
  const CardScreenOptions = (): BottomTabNavigationOptions => {
    return {
      tabBarIcon: ({ color }) => (
        <AntDesign name="idcard" size={42} color={color} />
      ),
    };
  };

  const QrScreenOptions = (): BottomTabNavigationOptions => {
    return {
      tabBarIcon: ({ color }) => (
        <AntDesign name="qrcode" size={42} color={color} />
      ),
    };
  };
  return (
    <View style={styles.bodyStyle}>
      <Tab.Navigator
        initialRouteName="Card"
        screenOptions={tabNavigationOptions}
      >
        <Tab.Screen
          name="Card"
          component={CardScreen}
          options={CardScreenOptions}
        />
        <Tab.Screen name="Qr" component={QrScreen} options={QrScreenOptions} />
      </Tab.Navigator>
    </View>
  );
};

export default PortfolioScreen;

const styles = StyleSheet.create({
  bodyStyle: {
    flex: 20,
  },
});
