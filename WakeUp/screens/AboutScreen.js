
import { View, StyleSheet, Text } from "react-native";

function  AboutScreen() {


  return (
    <>
      <View style={styles.buttonContainer}>
        <Text>About go here</Text>
      </View>
    </>
  );
}  

export default AboutScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
