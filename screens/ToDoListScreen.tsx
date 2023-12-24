import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import appColors from "../assets/styles/appColors";
import { getActivityRandom } from "../services/ActivityRandomService";

const ToDoListScreen = () => {
  const fetchActivityApi = () => {
    const fetchData = async () => {
      const data = await getActivityRandom();
      console.log(data);
    };
    fetchData();
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleMainContainer}>
        <View style={[styles.styleFigure, styles.secondFigure]}></View>
        <View style={styles.titleContainer}>
          <Text style={styles.greetingsText}>Activitynaitor</Text>
        </View>
        <View style={[styles.styleFigure, styles.firstFigure]}></View>
      </View>
      <Pressable onPress={fetchActivityApi} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Search</Text>
      </Pressable>

      <View style={styles.boxMainContainer}>
        <View style={styles.subcontainer}>
          <Text style={styles.styleText}>Waiting to look for activities</Text>
        </View>
      </View>
    </View>
  );
};

export default ToDoListScreen;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
  },
  titleMainContainer: {
    height: 180,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  greetingsText: {
    textAlign: "center",
    color: appColors.letter,
    fontSize: 32,
  },
  titleContainer: {
    height: 70,
    width: "80%",
    backgroundColor: appColors.secundary,
    borderRadius: 100,
    justifyContent: "center",
  },
  styleFigure: {
    height: 35,
    width: "20%",
    backgroundColor: appColors.secundary,
  },
  firstFigure: {
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    marginRight: "43%",
  },
  secondFigure: {
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
    marginLeft: "43%",
  },
  buttonContainer: {
    height: 70,
    width: "40%",
    backgroundColor: appColors.secundary,
    borderRadius: 100,
    justifyContent: "center",
    marginBottom: 30,
  },
  buttonText: {
    textAlign: "center",
    color: appColors.letter,
    fontSize: 24,
  },
  boxMainContainer: {
    height: 450,
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
