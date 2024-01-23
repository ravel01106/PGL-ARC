import { Audio } from "expo-av";
import { RecordType } from "../types/RecordType";

export async function playSound(audioRecording: RecordType) {
  const soundObject = new Audio.Sound();
  await soundObject.loadAsync({ uri: audioRecording.file });
  await soundObject.playAsync();
}

export function getDurationFormatted(millis: number) {
  const minutes = millis / 1000 / 60;
  const minutesDisplay = Math.floor(minutes);
  const seconds = Math.round((minutes - minutesDisplay) * 60);
  const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutesDisplay}:${secondsDisplay}`;
}
