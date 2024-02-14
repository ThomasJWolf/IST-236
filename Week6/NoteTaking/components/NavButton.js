import { View, StyleSheet, Text, Pressable } from "react-native";
import Colors from "../constants/colors.js";

function NavButton(props) {
  return (
    <Pressable android_ripple={{ color: "grey" }} onPress={props.onPress}>
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.children}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default NavButton;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: Colors.accent500,
    width: 150,
    height: 75,
    margin: 8,
  },
  textContainer: {},
  text: {
    padding: 8,
    fontSize: 25,
    textAlign: "center",
    alignItems: "center",
    color: Colors.primary300,
    fontFamily: "paperNoteBold",
  },
});
