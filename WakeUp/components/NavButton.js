import {
  View,
  StyleSheet,
  Text,
  Pressable,
  useWindowDimensions,
} from "react-native";
import Colors from "../constants/colors.js";

// Adds the NavButton function which every page uses
function NavButton(props) {
  const { width, hight } = useWindowDimensions();

  return (
    <Pressable android_ripple={{ color: "grey" }} onPress={props.onPress}>
      <View style={[styles.buttonContainer, props.style?.buttonContainer]}>
        <View style={[styles.textContainer, props.style?.textContainer]}>
          <Text
            style={[styles.text, { fontSize: width * 0.07 }, props.style?.text]}
          >
            {props.children}
          </Text>
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
    borderRadius: 300,
    backgroundColor: Colors.primary500,
    width: 1000,
    maxWidth: "40%",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  textContainer: {},
  text: {
    padding: 8,
    textAlign: "center",
    color: Colors.primary300,
    fontFamily: "antipastoPro",
  },
});
