import { StyleSheet, Text, View } from "react-native";
import React from "react";
import appColors from "../assets/styles/appColors";
import FrontCard from "../components/FrontCard";
import { cardInfoContext } from "../context/CardContext";
import DescriptionCard from "../components/DescriptionCard";
import SkillList from "../components/SkillList";
import ArrowSelection from "../components/ArrowSelection";

const CardScreen = () => {
  const { displayMyInfo } = React.useContext(cardInfoContext);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <FrontCard />
        {displayMyInfo ? <DescriptionCard /> : <SkillList />}
        <ArrowSelection />
      </View>
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
  cardContainer: {
    width: 350,
    height: 550,
    backgroundColor: appColors.secundary,
    borderRadius: 20,
  },
});
