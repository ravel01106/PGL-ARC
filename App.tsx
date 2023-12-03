import { StyleSheet, Text, View } from "react-native";
import CustomDrawer from "./components/CustomDrawer";
import { NavigationContainer } from "@react-navigation/native";
import CustomProvider from "./provider/CustomProvider";

export default function App() {
  return (
    <CustomProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <CustomDrawer />
        </NavigationContainer>
      </View>
    </CustomProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
