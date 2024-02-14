import { View, StyleSheet, Text, Image, Linking, Modal } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Title from "../components/Title.js";
import Colors from "../constants/colors.js";

function NoteView(props) {
  // Set Safe Area Screen Bounderies
  const insets = useSafeAreaInsets();

  return (
    <Modal visable={props.visable} animationType="slide">
      <View
        style={[
          styles.rootContainer,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.title}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.text}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <NavButton onPress={props.onClose}>Return To Thoughts</NavButton>
        </View>
      </View>
    </Modal>
  );
}

export default NoteView;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.accent800,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "paperNoteSketch",
    color: Colors.primary300,
  },
  textContainer: {
    flex: 5,
    justifyContent: "90%",
    borderWidth: 3,
    borderColor: Colors.primary500,
  },
  text: {
    color: Colors.primary300,
    fontSize: 20,
    fontFamily: "paperNote",
  },
  buttonContainer: {
    flex: 2,
    marginTop: 10,
  },
});
