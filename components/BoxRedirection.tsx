import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import appColors from "../assets/styles/appColors";
import { NavigationContext } from "@react-navigation/native";

type BoxRedirectionProps = {
  text: string;
  textButton: string;
};

const BoxRedirection = (props: BoxRedirectionProps) => {
  const { text, textButton } = props;
  const navigation = React.useContext(NavigationContext);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subcontainer}>
        <Text style={styles.styleText}>{text}</Text>
        <Pressable
          onPress={() => navigation?.navigate(textButton)}
          style={styles.styleButton}
        >
          <Text style={[styles.styleText, styles.styleTextButton]}>
            {textButton}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default BoxRedirection;

const styles = StyleSheet.create({
  mainContainer: {
    height: "60%",
    width: "100%",
    backgroundColor: appColors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 70,
    borderTopLeftRadius: 70,
  },
  subcontainer: {
    height: "70%",
    width: "70%",
    backgroundColor: appColors.ternary,
    borderRadius: 70,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  styleText: {
    color: appColors.letterWhite,
    fontSize: 24,
    textAlign: "center",
  },
  styleButton: {
    height: "20%",
    width: "65%",
    backgroundColor: appColors.secundary,
    paddingVertical: "3.5%",
    borderRadius: 70,
  },
  styleTextButton: {
    color: appColors.letter,
  },
});
