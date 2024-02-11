import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen.js";
import { useFonts } from "expo-font";
import Colors from "./constants/colors.js";

export default function App() {
  //Set up our custom fonts
  const [fontsLoaded] = useFonts({
    "speedee-bold": require("./assets/fonts/Speedee-Bold.ttf"),
  });

  // Set state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState("home");

  function MenuScreenHandler() {
    setCurrentScreen("menu");
  }

  function HomeScreenHandler() {
    setCurrentScreen("home");
  }

  // Determine which screen to be on
  let screen = <HomeScreen onNext={MenuScreenHandler} />;

  if (currentScreen === "menu") {
    screen = <MenuScreen onNext={HomeScreenHandler} />;
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
