import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StartGameScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/colors.js";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  //Set up our custom fonts
  const [fontsLoaded, fontError] = useFonts({
    poker: require("./assets/fonts/Poker.ttf"),
    pokerGeneral: require("./assets/fonts/PokerKings-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  //Set state variable to determine which screen to be on
  const [currentScreen, setCurrentScreen] = useState("start");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  function newGameHandler() {
    setCurrentScreen("game");
  }

  function gameOverHandler() {
    setCurrentScreen("gameOver");
  }

  function restartHandler() {
    setCurrentScreen("start");
  }

  function setUserScoreHandler(score) {
    setUserScore(score);
  }

  function setComputerScoreHandler(score) {
    setComputerScore(score);
  }

  // Determine which screen to be on
  let screen = <StartGameScreen onNext={newGameHandler} />;

  if (currentScreen === "game") {
    screen = (
      <GameScreen
        onNext={gameOverHandler}
        onSetUserScore={setUserScoreHandler}
        onSetComputerScore={setComputerScoreHandler}
      />
    );
  }

  if (currentScreen === "gameOver") {
    screen = (
      <GameOverScreen
        onNext={restartHandler}
        user={userScore}
        computer={computerScore}
      />
    );
  }

  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="auto" />
        <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: "center",
    justifyContent: "center",
  },
});
