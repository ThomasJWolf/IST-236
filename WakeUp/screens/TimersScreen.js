import Timer from "../components/Timer/Timer";
import { TIMERS } from "../data/timers";
import NavButton from "../components/NavButton";
import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../constants/colors";

const screenWidth = Dimensions.get("window").width; // Get the full width of the screen
const buttonWidth = 100; // Width of the button, must match the style below

function TimersScreen() {
  const displayedTimers = TIMERS.filter((timerItem) => timerItem);

  return (
    <View style={styles.screen}>
      <Timer items={displayedTimers} />
      <View style={styles.buttonContainer}>
        <NavButton
          style={{
            buttonContainer: { bordercolor: Colors.primary500, borderWidth: 3 },
          }}
          onPress={() => console.log("Add Timer")}
        >
          +
        </NavButton>
      </View>
    </View>
  );
}

export default TimersScreen;

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
    fontFamily: "antipastoPro",
  },
});
