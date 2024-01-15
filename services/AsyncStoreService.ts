import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (cookie: string) => {
  try {
    await AsyncStorage.setItem("my-cookie", cookie);
    console.log("Se ha añadido la cookie al dispositivo correctamente");
  } catch (error) {
    console.log("Error");
  }
};
export const removeData = async () => {
  try {
    await AsyncStorage.removeItem("my-cookie");
    console.log("Se ha eliminado la cookie correctamente");
  } catch (error) {
    console.log("Error");
  }
};
