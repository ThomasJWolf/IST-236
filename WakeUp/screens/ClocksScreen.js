import Clock from "../components/Clock/Clock";
import { CLOCKS } from "../data/clocks";
import NavButton from "../components/NavButton";
import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../constants/colors";

const screenWidth = Dimensions.get("window").width; // Get the full width of the screen
const buttonWidth = 100; // Width of the button, must match the style below

function  ClocksScreen() {
  const displayedClocks = CLOCKS.filter((clockItem) => {
    return clockItem;
  });

  return (
    <View style={styles.screen}>
      <Clock items={displayedClocks} />
      <View style={styles.buttonContainer}>
        <NavButton
          style={{
            buttonContainer: { bordercolor: Colors.primary500, borderWidth: 3 },
          }}
          onPress={() => console.log("Add Clock")}
        >
          +
        </NavButton>
      </View>
    </View>
  );
}

export default ClocksScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: "relative", // Ensures the floating button can be absolutely positioned
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    width: screenWidth,
    height: buttonWidth,
    borderRadius: buttonWidth,
    alignItems: "center",
    justifyContent: "center",
  },
});

