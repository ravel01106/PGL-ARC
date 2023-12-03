import { StyleSheet, Text, View } from "react-native";
import React from "react";
import appColors from "../assets/styles/appColors";

const CardScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>CardScreen</Text>
    </View>
  );
};

export default CardScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
