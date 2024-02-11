import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import EventScreen from "./screens/EventScreen";
import { useFonts } from "expo-font";
import Colors from "./constants/colors.js";

export default function App() {
  //Set up our custom fonts
  const [fontsLoaded] = useFonts({
    "squealer": require("./assets/fonts/Squealer.otf"),
    "squealer-embossed": require("./assets/fonts/SquealerEmbossed.otf"),
  });

  // Set state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState("home");

  function EventScreenHandler() {
    setCurrentScreen("event");
  }

  function HomeScreenHandler() {
    setCurrentScreen("home");
  }

  // Determine which screen to be on
  let screen = <HomeScreen onNext={EventScreenHandler} />;

  if (currentScreen === "event") {
    screen = <EventScreen onNext={HomeScreenHandler} />;
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
    backgroundColor: Colors.accent500,
    alignItems: "center",
    justifyContent: "center",
  },
});
