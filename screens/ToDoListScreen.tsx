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
import { ActivityType } from "../types/ActivityType";
import TitleActivitynator from "../components/TitleActivitynator";
import ActivitiesListEmpty from "./ActivitiesListEmpty";

const ToDoListScreen = () => {
  const [activities, setActivities] = React.useState<ActivityType[]>([]);

  const fetchActivityApi = () => {
    const fetchData = async () => {
      const arrayData: ActivityType[] = [...activities];
      const index: number = activities.length + 1;
      const data = await getActivityRandom();

      const activity: ActivityType = {
        index: index,
        name: data,
      };
      arrayData.push(activity);
      setActivities(arrayData);
    };

    fetchData();
  };

  const OnDeleteActivity = (activityRemoved: ActivityType) => {
    const arrayData = activities.filter(
      (activity) => activity.index != activityRemoved.index
    );
    setActivities(arrayData);
  };

  return (
    <View style={styles.mainContainer}>
      <TitleActivitynator />
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
            <TouchableOpacity style={styles.activityContainer}>
              <Text style={styles.activityText}>{activity.item.name}</Text>
              <TouchableOpacity onPress={() => OnDeleteActivity(activity.item)}>
                <Entypo name="cross" size={34} color={appColors.letterWhite} />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          keyExtractor={(activity) => activity.index.toString()}
          ListEmptyComponent={() => <ActivitiesListEmpty />}
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
  buttonContainer: {
    height: 70,
    width: "40%",
    backgroundColor: appColors.secundary,
    borderRadius: 100,
    justifyContent: "center",
    marginBottom: 38,
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
