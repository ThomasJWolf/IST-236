import { View, StyleSheet, Text, Image, Linking, FlatList } from "react-native";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Title from "../components/Title.js";
import Colors from "../constants/colors.js";
import NoteView from "../modals/NoteView.js";
import NotesItem from "../components/NotesItem.js";

function NotesScreen(props) {
  // Set Safe Area Screen Bounderies
  const insets = useSafeAreaInsets();

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalNoteTitle, setModalNoteTitle] = useState("");
  const [modalNoteText, setModalNoteText] = useState("");

  function noteViewHandler(title, text) {
    setModalNoteTitle(title);
    setModalNoteText(text);
    setModalIsVisible(true);
  }

  function closeNoteViewHandler() {
    setModalIsVisible(false);
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
        <Title>Current Thoughts</Title>
      </View>

      <View style={styles.itemContainer}>
        <FlatList
          data={props.currentNotes}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          renderItem={(itemData) => {
            return (
              <NotesItem
                id={itemData.item.id}
                title={itemData.item.title}
                onView={noteViewHandler.bind(
                  this,
                  itemData.item.title,
                  itemData.item.text
                )}
                onDelete={props.onDelete.bind(this, itemData.item.id)}
              />
            );
          }}
        />
      </View>

      <NoteView
        visible={modalIsVisible}
        title={modalNoteTitle}
        text={modalNoteText}
        onClose={closeNoteViewHandler}
      />

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <NavButton onPress={props.onAdd}>Add New Note</NavButton>
        </View>

        <View style={styles.button}>
          <NavButton onPress={props.onHome}>Return Home</NavButton>
        </View>
      </View>
    </View>
  );
}

export default NotesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "90%",

  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    marginVertical: 20,
  },
  itemContainer: {
    flex: 6,
  },
  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  button: {
    marginHorizontal: 10,
  },
});
