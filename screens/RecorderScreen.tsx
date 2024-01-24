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
import { FontAwesome5, Entypo, FontAwesome } from "@expo/vector-icons";
import ListEmpty from "../components/ListEmpty";
import TitleScreen from "../components/TitleScreen";
import { Audio } from "expo-av";
import { RecordType } from "../types/RecordType";
import { getDurationFormatted, playSound } from "../services/SoundService";
import { setItem, getItem, removeItem } from "../services/AsyncStoreService";

const RecorderScreen = () => {
  const [isRecording, setIsRecording] = React.useState<boolean>(false);
  const [recordings, setRecordings] = React.useState<RecordType[]>([]);
  const [permissionResponse, requestPermission] = Audio.usePermissions();
  const [recording, setRecording] = React.useState<Audio.Recording>();
  const [isPLaying, setIsplaying] = React.useState<boolean>(false);

  async function startRecording(): Promise<void> {
    try {
      if (permissionResponse) {
        if (permissionResponse.status !== "granted") {
          console.log("Requesting permission..");
          await requestPermission();
        }
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        const { recording } = await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY
        );
        console.log("Recording started");
        setRecording(recording);
      }
    } catch (error) {
      console.error("Failed to start recording", error);
    }
  }

  async function stopRecording(): Promise<void> {
    setRecording(undefined);
    let allRecordingsCurrently: RecordType[] = [...recordings];

    if (recording !== undefined) {
      await recording.stopAndUnloadAsync();

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
      });

      const duration: number = (await recording.getStatusAsync())
        .durationMillis;
      const file: string | null = recording.getURI();

      const audioRecording: RecordType = {
        duration: getDurationFormatted(duration),
        milli: duration,
        file: file ?? "",
      };
      allRecordingsCurrently.push(audioRecording);

      await setItem("ArrayRecords", JSON.stringify(allRecordingsCurrently));
    }
    setRecordings(allRecordingsCurrently);
  }

  async function clearRecordings() {
    try {
      setRecordings([]);
      await removeItem("ArrayRecords");
    } catch (error) {
      console.log("F");
    }
  }

  async function OnDeleteRecord(recordRemoved: RecordType) {
    const arrayDataRecordings = recordings.filter(
      (record) => record.file != recordRemoved.file
    );
    await setItem("ArrayRecords", JSON.stringify(arrayDataRecordings));
    setRecordings(arrayDataRecordings);
  }

  async function handleRecordButtonPress() {
    if (isRecording) {
      setIsRecording(false);
      await stopRecording();
    } else {
      await startRecording();
      setIsRecording(true);
    }
  }

  async function handlePlayRecordButtonPress(record: RecordType) {
    if (!isPLaying) {
      setIsplaying(true);
      await playSound(record);
      setTimeout(() => {
        setIsplaying(false);
      }, record.milli);
    }
  }

  React.useEffect(() => {
    const soundData = async () => {
      let data: RecordType[] = [];

      try {
        const dataStorage = await getItem("ArrayRecords");
        if (dataStorage) {
          data = JSON.parse(dataStorage);
        }
      } catch (error) {
        console.log(error);
      }
      setRecordings(data);
    };
    soundData();
  }, [recordings]);

  return (
    <View style={styles.mainContainer}>
      <TitleScreen title="Recordnaitor" />
      <View style={styles.buttonContainer}>
        {isRecording ? (
          <FontAwesome name="microphone" size={30} color={appColors.primary} />
        ) : (
          <FontAwesome
            name="microphone-slash"
            size={30}
            color={appColors.primary}
          />
        )}

        <Pressable
          style={
            isRecording
              ? styles.buttonContainerStopRecord
              : styles.buttonContainerStartRecord
          }
          onPress={handleRecordButtonPress}
        >
          <Text
            style={
              isRecording
                ? styles.buttonTextStopRecord
                : styles.buttonTextStartRecord
            }
          >
            {isRecording ? "Stop recording" : "Start recording"}
          </Text>
        </Pressable>
        <TouchableOpacity
          onPress={clearRecordings}
          style={styles.buttonTouchable}
        >
          <FontAwesome5 name="trash" size={24} color={appColors.letter} />
        </TouchableOpacity>
      </View>
      <View style={styles.boxMainContainer}>
        <FlatList
          style={styles.listRecordingsContainer}
          data={recordings}
          renderItem={(record) => (
            <View style={styles.recordContainer}>
              <Text style={styles.recordText}>
                Recording#{record.index + 1} - {record.item.duration}
              </Text>
              <View style={styles.anotherButtonsContainer}>
                <TouchableOpacity style={styles.buttonTouchable}>
                  <FontAwesome5
                    name={"play"}
                    size={20}
                    color={appColors.letterWhite}
                    onPress={() => handlePlayRecordButtonPress(record.item)}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTouchable}>
                  <Entypo
                    name="cross"
                    size={32}
                    color={appColors.letterWhite}
                    onPress={() => OnDeleteRecord(record.item)}
                  />
                </TouchableOpacity>
              </View>
            </View>
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
  buttonTouchable: {
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 110,
    width: "100%",
    paddingBottom: 20,
  },
  buttonContainerStartRecord: {
    height: 65,
    width: 170,
    backgroundColor: appColors.secundary,
    borderRadius: 100,
    justifyContent: "center",
  },
  buttonContainerStopRecord: {
    height: 65,
    width: 170,
    backgroundColor: appColors.primary,
    borderRadius: 100,
    justifyContent: "center",
  },
  buttonTextStartRecord: {
    textAlign: "center",
    color: appColors.letter,
    fontSize: 19,
    fontWeight: "bold",
  },
  buttonTextStopRecord: {
    textAlign: "center",
    color: appColors.letterWhite,
    fontSize: 19,
    fontWeight: "bold",
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
  listRecordingsContainer: {
    marginTop: 20,
    marginBottom: 10,
  },

  anotherButtonsContainer: {
    width: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  recordContainer: {
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
  recordText: {
    textAlign: "center",
    color: appColors.letterWhite,
    paddingHorizontal: 10,
    fontSize: 18,
    flex: 1,
  },
});
