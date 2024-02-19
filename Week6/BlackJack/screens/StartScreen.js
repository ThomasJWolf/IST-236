import { View, StyleSheet, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";


function StartGameScreen(props) {
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
      <View style={styles.titleContainer}>
        <Title>BlackJack 21</Title>
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/blackjackbg.png")}
        />
      </View>

      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>Play Now</NavButton>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  imageContainer: {
    flex: 5,
    justifyContent: "center",
  },
  image: {
    resizeMode: "contain",
    width: "100%",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
