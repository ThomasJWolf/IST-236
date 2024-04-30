import { View, StyleSheet, Text, Button } from "react-native";
import { persistor } from "../redux/store"; // Import the persistor from where it's defined
import Colors from "../constants/colors";

function SettingsScreen() {
  const clearReduxPersist = () => {
    persistor
      .purge()
      .then(() => console.log("Purge of persistor completed"))
      .catch((error) => console.error("Purge of persistor failed: ", error));
  };

  return (
    <>
      <View style={styles.buttonContainer}>
        <Text>Settings go here</Text>
        <Button title="Clear Redux Persist" onPress={clearReduxPersist} />
      </View>
    </>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
