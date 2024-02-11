import { View, StyleSheet, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Header from "../components/Header";
import Cards from "../constants/cards";

function GameScreen(props) {
  // Set Safe Aera Screen Boundaries
  const inset = useSafeAreaInsets();

  return (
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
      <View style={styles.headerContainer}>
        <Header>Computer's Hand</Header>
      </View>

      <View style={styles.computerImageContainer}>
        <Image
          style={styles.computerImage}
          source={require("../assets/images/cardback1.png")}
        />
        <Image style={styles.computerImage} source={Cards.aceSpades.picture} />
      </View>

      <View style={styles.headerContainer}>
        <Header>Player's Hand</Header>
      </View>

      <View style={styles.playerImageContainer}>
        <Image style={styles.playerImage} source={Cards.jackSpades.picture} />
        <Image style={styles.playerImage} source={Cards.aceSpades.picture} />
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <NavButton onPress={props.onNext}>Hit Me!</NavButton>
        </View>

        <View style={styles.buttonContainer}>
          <NavButton onPress={props.onNext}>Stay!</NavButton>
        </View>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  computerImageContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  computerImage: {
    height: 150,
    width: 100,
    resizeMode: "contain",
  },
  playerImageContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  playerImage: {
    height: 150,
    width: 100,
    resizeMode: "contain",
  },
  imageContainer: {
    flex: 5,
    justifyContent: "center",
  },
  image: {
    resizeMode: "cover",
    width: "100%",
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
    marginHorizontal: 10,
    marginBottom: 25,
  },
});
