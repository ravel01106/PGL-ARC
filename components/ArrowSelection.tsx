import { StyleSheet, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { cardInfoContext } from "../context/CardContext";
import appColors from "../assets/styles/appColors";

export default function ArrowSelection() {
  const { displayMyInfo, toggleChangeDisplayMyInfo } =
    React.useContext(cardInfoContext);
  return (
    <View style={styles.arrowStyle}>
      <AntDesign
        name={displayMyInfo ? "arrowdown" : "arrowup"}
        size={40}
        color={appColors.letter}
        onPress={() => toggleChangeDisplayMyInfo()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  arrowStyle: {
    alignSelf: "center",
  },
});
