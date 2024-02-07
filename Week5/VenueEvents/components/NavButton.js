import { View, StyleSheet, Text, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function NavButton(props) {
  return (
    <Pressable android_ripple={{ color: "grey" }} onPress={props.onPress}>
      <View style={styles.buttonContainer}>
        <View> style={styles.textContainer}
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
    borderRadius:300,
    width: 300,
    margin: 10,
  },
  textContainer: {
    flex:1
  },
  text: {
    padding: 8,
    fontSize: 25,
    textAlign: "center"
  }
});
