import { StyleSheet, Text, View } from "react-native";
import React from "react";
import appColors from "../assets/styles/appColors";
import { listEmtyProp } from "../types/ListEmptyPropsType";

const ListEmpty = ({ typeList }: listEmtyProp) => {
  return (
    <View style={styles.subcontainer}>
      <Text style={styles.styleText}>
        There is no {typeList} at this time...
      </Text>
    </View>
  );
};

export default ListEmpty;

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
    paddingHorizontal: 10,
  },
  styleText: {
    color: appColors.letterWhite,
    fontSize: 24,
    textAlign: "center",
    alignSelf: "center",
  },
});
