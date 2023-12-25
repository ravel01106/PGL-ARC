import { StyleSheet, Text, View } from "react-native";
import React from "react";
import appColors from "../assets/styles/appColors";

const ActivitiesListEmpty = () => {
  return (
    <View style={styles.subcontainer}>
      <Text style={styles.styleText}>Waiting to look for activities</Text>
    </View>
  );
};

export default ActivitiesListEmpty;

const styles = StyleSheet.create({
  subcontainer: {
    height: 290,
    width: "70%",
    backgroundColor: appColors.ternary,
    borderRadius: 70,
    alignSelf: "center",
    marginVertical: "13%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  styleText: {
    color: appColors.letterWhite,
    fontSize: 24,
    textAlign: "center",
    alignSelf: "center",
  },
});
