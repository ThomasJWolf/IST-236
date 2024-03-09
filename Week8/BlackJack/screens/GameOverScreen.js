import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
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

  let titleText = <Header>It's a Tie!</Header>;

  if (
    (playerScore <= 21 && playerScore > computerScore) ||
    (playerScore <= 21 && computerScore > 21)
  ) {
    titleText = <Header>Player Wins!</Header>;
  }
  if (
    (computerScore <= 21 && computerScore > playerScore) ||
    (computerScore <= 21 && playerScore > 21)
  ) {
    titleText = <Header>Computer Wins!</Header>;
  }

  const { width, height } = useWindowDimensions();

  // Portrait mode, base size on screen width
  let size = width * 0.2;
  // If in landscape mode, base size on screen height
  if (width > height) {
    size = height * 0.15;
  }

  let content = (
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

      <View style={[styles.scoreContainer, { height: height * 0.25 }]}>
        <Header>Computer Score: </Header>
        <Text style={[styles.scoreText, { fontSize: size }]}>
          {computerScore}
        </Text>
      </View>

      <View style={[styles.scoreContainer, { height: height * 0.25 }]}>
        <Header>Player Score: </Header>
        <Text style={[styles.scoreText, { fontSize: size }]}>
          {playerScore}
        </Text>
      </View>

      <View style={[styles.buttonContainer, { height: height * 0.25 }]}>
        <NavButton onPress={props.onNext}>Play Again?</NavButton>
      </View>
    </View>
  );

  if (width > height) {
    content = (
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

        <View style={styles.rowContainer}>
          <View style={[styles.scoreContainer, { height: height * 0.3 }]}>
            <Header>Computer Score: </Header>
            <Text style={[styles.scoreText, { fontSize: size }]}>
              {computerScore}
            </Text>
          </View>

          <View style={[styles.scoreContainer, { height: height * 0.3 }]}>
            <Header>Player Score: </Header>
            <Text style={[styles.scoreText, { fontSize: size }]}>
              {playerScore}
            </Text>
          </View>
        </View>

        <View style={[styles.buttonContainer, { height: height * 0.25 }]}>
          <NavButton onPress={props.onNext}>Play Again?</NavButton>
        </View>
      </View>
    );
  }

  return (
    <LinearGradient
      colors={[Colors.accent200, Colors.primary800, Colors.accent200]}
      style={styles.rootContainer}
    >
      {content}
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
  },
  scoreContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  scoreText: {
    color: Colors.primary500,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  }
});