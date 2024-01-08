import {
  Modal,
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
  const [visibleModal, setVisibleModal] = React.useState(false);
  const [activityModal, setActivityModal] = React.useState<ActivityType>();

  const fetchActivityApi = () => {
    const fetchData = async () => {
      const arrayData: ActivityType[] = [...activities];
      const index: number = activities.length + 1;
      const data = await getActivityRandom();

      const activity: ActivityType = {
        index: index,
        name: data.activity,
        participants: data.participants,
        price: data.price,
        accessibility: data.accessibility,
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

  const showIndexActivity = (index: number) => {
    console.log(index);
    console.log();
    const activity: ActivityType = activities.filter(
      (activityArray) => activityArray.index == index
    )[0];
    setActivityModal(activity);
    setVisibleModal(true);
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
            <TouchableOpacity
              style={styles.activityContainer}
              onPress={() => showIndexActivity(activity.item.index)}
            >
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={visibleModal}
        onRequestClose={() => setVisibleModal(false)}
      >
        <View style={styles.modalMainContainer}>
          <View style={styles.cardContainer}>
            <View style={styles.informationContainer}>
              <Text style={[styles.informationText, styles.informationTittle]}>
                Description
              </Text>
              <Text style={styles.informationText}>{activityModal?.name}</Text>
              <Text style={styles.informationText}>
                Participants: {activityModal?.participants}
              </Text>
              <Text style={styles.informationText}>
                Price: {activityModal?.price}
              </Text>
              <Text style={styles.informationText}>
                Accessibility: {activityModal?.accessibility}
              </Text>
            </View>
            <TouchableOpacity onPress={() => setVisibleModal(false)}>
              <Entypo name="cross" size={34} color={appColors.letter} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  modalMainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  cardContainer: {
    backgroundColor: "#fff",
    width: 340,
    height: 400,
    borderRadius: 30,
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  informationContainer: {
    width: 280,
    paddingTop: 35,
    paddingHorizontal: 10,
  },
  informationTittle: {
    backgroundColor: appColors.primary,
    color: appColors.letterWhite,
    paddingVertical: 8,
    fontSize: 20,
    fontWeight: "600",
  },
  informationText: {
    backgroundColor: appColors.secundary,
    color: appColors.letter,
    textAlign: "center",
    paddingVertical: 10,
    borderRadius: 30,
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 15,
  },
});
