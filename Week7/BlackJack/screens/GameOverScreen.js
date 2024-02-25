import { View, StyleSheet, Image, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Header from "../components/Header";
import Colors from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";

function GameOverScreen(props) {
  // Set Safe Aera Screen Boundaries
  const inset = useSafeAreaInsets();

  const playerScore = props.user;
  const computerScore = props.computer;

  let titleText = <Title>It's a Tie!</Title>;

  if (
    (playerScore <= 21 && playerScore > computerScore) ||
    (playerScore <= 21 && computerScore > 21)
  ) {
    titleText = <Title>Player Wins!</Title>;
  }
  if (
    (computerScore <= 21 && computerScore > playerScore) ||
    (computerScore <= 21 && playerScore > 21)
  ) {
    titleText = <Title>Computer Wins!</Title>;
  }

  return (
    <LinearGradient
      colors={[Colors.accent200, Colors.primary800, Colors.accent200]}
      style={styles.rootContainer}
    >
      <View
        style={[
          styles.rootContainer,
          {
            paddingTop: inset.top,
            paddingBottom: inset.bottom,
            paddingLeft: inset.left,
            paddingRight: inset.right,
          },
        ]}
      >
        <View style={styles.titleContainer}>{titleText}</View>

        <View style={styles.scoreContainer}>
          <Header>Computer Score:</Header>
          <Text style={styles.score}>{computerScore}</Text>
        </View>

        <View style={styles.scoreContainer}>
          <Header>Player Score:</Header>
          <Text style={styles.score}>{playerScore}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <NavButton onPress={props.onNext}>Play Now</NavButton>
        </View>
      </View>
    </LinearGradient>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  scoreContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  score: {
    fontSize: 50,
    color: Colors.primary500,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
