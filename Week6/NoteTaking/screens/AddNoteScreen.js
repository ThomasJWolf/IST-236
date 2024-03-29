import {
  View,
  StyleSheet,
  Text,
  Image,
  Linking,
  ScrollView,
  TextInput,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Title from "../components/Title.js";
import Colors from "../constants/colors.js";
import { useState } from "react";

function AddNoteScreen(props) {
  // Set Safe Area Screen Bounderies
  const insets = useSafeAreaInsets();

  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  function addNoteHandler() {
    props.onAdd(noteTitle, noteText);
    props.onCancel();
  }

  return (
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
        <Title>Add Notes Screen</Title>
      </View>

      <View style={styles.scrollContainer}>
        <ScrollView>
          <View style={styles.noteTitleContainer}>
            <TextInput
              placeholder="Enter Note Title Here"
              style={styles.noteTitle}
              onChangeText={setNoteTitle}
            />
          </View>

          <View style={styles.noteTextContainer}>
            <TextInput
              placeholder="Enter Note Text Here"
              style={styles.noteText}
              onChangeText={setNoteText}
              textAlignVertical="top"
              multiline={true}
              numberOfLines={20}
            />
          </View>
        </ScrollView>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <NavButton onPress={addNoteHandler}>Submit</NavButton>
        </View>

        <View style={styles.button}>
          <NavButton onPress={props.onCancel}>Cancel</NavButton>
        </View>
      </View>
    </View>
  );
}

export default AddNoteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    marginVertical: 20,
    marginBottom: 50,
  },
  scrollContainer:{
    flex: 5,
  },
  noteTitleContainer:{
    borderWidth: 3,
    backgroundColor: Colors.primary300,
  },
  noteTitle:{
    color: Colors.accent800,
    fontWeight: "bold",
    fontSize: 30,
  },
  noteTextContainer: {
    marginVertical: 5,
    borderWidth: 3,
    backgroundColor: Colors.primary300,
    alignItems: "flex-start",
  },
  noteText:{
    color: Colors.primary800,
  },
  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
});
