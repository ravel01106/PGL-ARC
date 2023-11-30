import { StyleSheet, Text, View } from "react-native";
import CustomDrawer from "./components/CustomDrawer";
import { NavigationContainer } from "@react-navigation/native";
import UserDefaultProvider from "./provider/UserDefautProvider";

export default function App() {
  return (
    <UserDefaultProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <CustomDrawer />
        </NavigationContainer>
      </View>
    </UserDefaultProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
