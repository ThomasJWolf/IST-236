import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import { useFonts } from "expo-font";
import Colors from "./constants/colors.js";
import AddNoteScreen from "./screens/AddNoteScreen.js";
import NotesScreen from "./screens/NotesScreen.js";

export default function App() {
  //Set up our custom fonts
  const [fontsLoaded] = useFonts({
    noteFont: require("./assets/fonts/Note.ttf"),
    paperNote: require("./assets/fonts/Papernotes.ttf"),
    paperNoteSketch: require("./assets/fonts/Papernotes Sketch.ttf"),
    paperNoteBold: require("./assets/fonts/Papernotes Bold.ttf"),
  });

  // Set state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentID, setCurrentID] = useState(3);
  const [currentNotes, setCurrentNotes] = useState([
    {
      id: 1,
      title: "To Do List",
      text: "1. Do Homework\n2. Cleen Car\n3. Pay Buills\n4. Make Dinner",
    },
    {
      id: 2,
      title: "To Do List v2",
      text: "1. Do Homework\n2. Cleen Car\n3. Pay Buills\n4. Make Dinner",
    },
  ]);

  function HomeScreenHandler() {
    setCurrentScreen("home");
  }

  function NotesScreenHandler() {
    setCurrentScreen("notes");
  }

  function AddNoteScreenHandler() {
    setCurrentScreen("add");
  }

  function AddNoteHandler(enteredNoteTitle, enteredNoteText) {
    setCurrentNotes((currentNotes) => {
      return [
        ...currentNotes,
        { id: currentID, title: enteredNoteTitle, text: enteredNoteText },
      ];
    });
    setCurrentID(currentID + 1);
    NotesScreenHandler();
  }

  function deleteNoteHandler(id) {
    setCurrentNotes((currentNotes) => {
      return currentNotes.filter((item) => {
        item.id !== id;
      });
    });
  }

  // Determine which screen to be on
  let screen = <HomeScreen onNext={NotesScreenHandler} />;

  if (currentScreen === "add") {
    screen = <AddNoteScreen onNext={HomeScreenHandler} />;
  }

  if (currentScreen === "notes") {
    screen = (
      <NotesScreen
        onNext={HomeScreenHandler}
        onAdd={AddNoteHandler}
        onDelete={deleteNoteHandler}
        currentNotes={currentNotes}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: "center",
    justifyContent: "center",
  },
});
