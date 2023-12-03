import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { cardInfoContext } from "../context/CardContext";
import appColors from "../assets/styles/appColors";

export default function SkillList() {
  const { skillList } = React.useContext(cardInfoContext);

  const getIconNameForSkill = (skill: string) => {
    switch (skill) {
      case "TypeScript":
        return "language-typescript";
      case "JavaScript":
        return "language-javascript";
      case "Python":
        return "language-python";
      case "Java":
        return "language-java";
      case "PHP":
        return "language-php";
      case "CSS":
        return "language-css3";
      case "HTML":
        return "language-html5";
      case "MySQL":
        return "dolphin";
      case "Oracle":
        return "database-outline";
      case "C":
        return "language-c";
      case "MongoDB":
        return "leaf";
      case "Videogames":
        return "microsoft-xbox-controller";
      default:
        return "horse";
    }
  };

  return (
    <View style={styles.skillContainer}>
      <Text style={[styles.text, styles.skillTitle]}> SKILLS </Text>
      <ScrollView contentContainerStyle={styles.SkillListConntentStyle}>
        {skillList.map((skill, index) => (
          <View key={index} style={styles.skillItem}>
            <MaterialCommunityIcons
              name={getIconNameForSkill(skill)}
              size={40}
              color={appColors.letter}
            />
            <Text style={styles.text}>{skill}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  skillTitle: {
    fontSize: 26,
    fontWeight: "bold",
  },
  skillItem: {
    flexDirection: "row",
    marginVertical: "3%",
    alignSelf: "flex-start",
    gap: 10,
    marginHorizontal: "20%",
  },
  text: {
    color: appColors.letter,
    paddingHorizontal: 20,
    paddingVertical: 5,
    textAlign: "center",
    fontSize: 20,
  },
  skillContainer: {
    alignItems: "center",
    marginBottom: 25,
    height: "51.5%",
  },
  SkillListConntentStyle: {
    alignItems: "center",
    width: 300,
  },
});
