import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { cardInfoContext } from "../context/CardContext";
import appColors from "../assets/styles/appColors";

const DescriptionCard = () => {
  const { title, description } = React.useContext(cardInfoContext);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.infoContainer}>
        <Text style={[styles.text, styles.cardTitle]}>{title}</Text>
        <Text style={styles.text}>{description}</Text>
        <Text style={styles.line} />
        <View style={[styles.infoContainer, styles.iconList]}>
          <Entypo name="linkedin" size={40} color={appColors.letter} />
          <AntDesign name="github" size={40} color={appColors.letter} />
          <AntDesign name="twitter" size={40} color={appColors.letter} />
        </View>
      </View>
    </View>
  );
};
export default DescriptionCard;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
  },
  infoContainer: {
    marginVertical: "7%",
  },
  text: {
    fontSize: 19,
    color: appColors.letter,
    paddingHorizontal: "5%",
    paddingVertical: "3%",
    textAlign: "center",
  },
  cardTitle: {
    fontSize: 26,
    fontWeight: "bold",
  },
  line: {
    borderColor: appColors.letter,
    borderBottomWidth: 1,
    marginHorizontal: "5%",
  },
  iconList: {
    alignSelf: "center",
    flexDirection: "row",
    gap: 65,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
