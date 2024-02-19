import { View, StyleSheet, Text, Image, Linking } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Title from "../components/Title.js";
import Colors from "../constants/colors.js";

function HomeScreen(props) {
  // Set Safe Area Screen Bounderies
  const insets = useSafeAreaInsets();

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

      {/* Adds the title */}
      <View style={styles.titleContainer}>
        <Title>Recipe Book</Title>
      </View>

      {/* Adds the homepage image */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/italian_recipes.jpg")}
        />
      </View>

      {/* Adds the button to go to the next page */}
      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>Go To Recipes</NavButton>
      </View>
    </View>
  );
}

export default HomeScreen;

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
  imageContainer: {
    flex: 6,
    justifyContent: "center",
    borderWidth: 4,
    borderRadius: 55,
    borderColor: Colors.accent500,
  },
  image: {
    resizeMode: "stretch",
    height: "100%",
    width: "100%",
    borderRadius: 50
  },
  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
