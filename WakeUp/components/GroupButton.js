import {
  View,
  StyleSheet,
  Text,
  Pressable,
  useWindowDimensions,
} from "react-native";
import Colors from "../constants/colors.js";

// Adds the NavButton function which every page uses
function GroupButton(props) {
  // Use width from 'useWindowDimensions' if you want to set a max size based on screen width.
  const { width } = useWindowDimensions();

  return (
    <Pressable android_ripple={{ color: "grey" }} onPress={props.onPress}>
      <View style={[styles.buttonContainer, props.style?.buttonContainer]}>
        <Text style={[styles.text, props.style?.text]}>{props.children}</Text>
      </View>
    </Pressable>
  );
}

export default GroupButton;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 300,
    backgroundColor: "transparent",
    paddingHorizontal: 16,
    marginHorizontal: 8,
    marginVertical: 10,
    elevation: 3,
    width: 100,
    height: 50,
    borderWidth: 2,
  },
  text: {
    paddingVertical: 8,
    textAlign: "center",
    color: Colors.primary300,
    fontFamily: "antipastoPro",
    fontSize: 16,
  },
});
