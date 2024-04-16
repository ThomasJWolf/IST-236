
import { View, StyleSheet, Text } from "react-native";

function  SettingsScreen() {


  return (
    <>
      <View style={styles.buttonContainer}>
        <Text>Settings go here</Text>
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
