import {
  View,
  StyleSheet,
  Text,
  Pressable,
  useWindowDimensions,
} from "react-native";
import Colors from "../constants/colors.js";

// Adds the ActionButton function which every page uses
function ActionButton(props) {
  const { width } = useWindowDimensions();
  const size = props.size || 100; // Default size is 100, but can be overridden by props

  const circleStyles = props.circle
    ? {
        borderRadius: size / 2, // Make it a perfect circle
        width: size,
        height: size,
        alignItems: "center",
        justifyContent: "center",
      }
    : {};

  return (
    <Pressable android_ripple={{ color: "grey" }} onPress={props.onPress}>
      <View style={[styles.buttonContainer, circleStyles, props.style]}>
        <Text
          style={[styles.text, { fontSize: width * 0.07 }, props.style?.text]}
        >
          {props.children}
        </Text>
      </View>
    </Pressable>
  );
}


export default ActionButton;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary500,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  text: {
    padding: 8,
    textAlign: "center",
    color: Colors.primary300,
    fontFamily: "antipastoPro",
  },
});