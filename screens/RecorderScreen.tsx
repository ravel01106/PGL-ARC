import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import appColors from "../assets/styles/appColors";
import { Entypo } from "@expo/vector-icons";
import TitleActivitynator from "../components/TitleActivitynator";
import ActivitiesListEmpty from "./ActivitiesListEmpty";
import ListEmpty from "../components/ListEmpty";
import TitleScreen from "../components/TitleScreen";

const RecorderScreen = () => {
  type AudioRecording = {
    duration: string;
    milli: number;
    file: string;
  };

  const [isRecording, setIsRecording] = React.useState<boolean>(false);
  const [recordings, setRecordings] = React.useState<AudioRecording[]>([]);

  return (
    <View style={styles.mainContainer}>
      <TitleScreen title="Recordnaitor" />
      <Pressable style={styles.buttonContainer}>
        <Text style={styles.buttonText}>
          {isRecording ? "Stop recording" : "Start recording"}
        </Text>
      </Pressable>
      <View style={styles.boxMainContainer}>
        <FlatList
          style={styles.listActivitiesContainer}
          data={recordings}
          renderItem={(record) => (
            <TouchableOpacity style={styles.activityContainer}>
              <Text style={styles.activityText}>
                Record#{record.item.duration}
              </Text>
              <TouchableOpacity>
                <Entypo name="cross" size={34} color={appColors.letterWhite} />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          ListEmptyComponent={() => <ListEmpty typeList="recordings" />}
        />
      </View>
    </View>
  );
};

export default RecorderScreen;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
  },
  buttonContainer: {
    height: 70,
    width: "55%",
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
