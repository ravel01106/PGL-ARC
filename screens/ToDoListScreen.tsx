import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import appColors from "../assets/styles/appColors";
import { getActivityRandom } from "../services/ActivityRandomService";
import { FlatList } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";

type ActivityData = {
  index: number;
  name: string;
  participants: number;
  price: number;
  accessibility: number;
};

const ToDoListScreen = () => {
  const [activities, setActivities] = React.useState<ActivityData[]>([]);

  const fetchActivityApi = () => {
    const fetchData = async () => {
      const arrayData: ActivityData[] = [...activities];
      const index: number = activities.length + 1;
      const data = await getActivityRandom();

      const activity: ActivityData = {
        index: index,
        name: data.activity,
        participants: data.participants,
        price: data.price,
        accessibility: data.accessibility,
      };
      arrayData.push(activity);
      setActivities(arrayData);
      console.log(activities);
    };

    fetchData();
  };

  const getActivities = () => {
    if (activities && activities.length != 0) {
      return activities;
    }
    return [];
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
      <Pressable
        onPress={() => fetchActivityApi()}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Search</Text>
      </Pressable>
      <View style={styles.boxMainContainer}>
        <FlatList
          style={styles.listActivitiesContainer}
          data={activities}
          renderItem={(activity) => (
            <TouchableOpacity
              style={styles.activityContainer}
              onPress={() => alert("Yeah boyy")}
            >
              <Text style={styles.activityText}>{activity.item.name}</Text>
              <TouchableOpacity onPress={() => alert("yeah boy")}>
                <Entypo name="cross" size={34} color={appColors.letterWhite} />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          keyExtractor={(activity) => activity.index.toString()}
          ListEmptyComponent={() => (
            <View style={styles.subcontainer}>
              <Text style={styles.styleText}>
                Waiting to look for activities
              </Text>
            </View>
          )}
        />
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
    borderTopRightRadius: 70,
    borderTopLeftRadius: 70,
  },
  subcontainer: {
    height: 300,
    width: "75%",
    backgroundColor: appColors.ternary,
    borderRadius: 70,
    alignSelf: "center",
    marginVertical: "20%",
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
  listActivitiesContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  activityContainer: {
    width: "80%",
    height: 70,
    backgroundColor: appColors.ternary,
    marginVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 50,
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  activityText: {
    textAlign: "center",
    color: appColors.letterWhite,
    paddingHorizontal: 10,
    fontSize: 18,
    flex: 1,
  },
});
