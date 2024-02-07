import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import { useFonts } from "expo-font";

export default function App() {
  //Set up our custom fonts
  const [fontsLoaded] = useFonts({
    "squeaker": require("./assets/fonts/Squealer.otf"),
    "squeaker-embossed": require("./assets/fonts/SquealerEmbossed.otf")
  })

  // Set state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState("home");

  function eventsScreenHandler() {
    setCurrentScreen("events");
  }

  function HomeScreenHandler() {
    setCurrentScreen("home");
  }

  // Determine which screen to be on
  let screen = <HomeScreen onNext={eventsScreenHandler} />;

  if (currentScreen === "events") {
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
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "squeaker"
  },
});
