import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RoundedRectTimer from "./screens/timertest";
import Countdown from "react-native-countdown-component";

export default function App() {
  const duration = 10; // Countdown duration in seconds

  return (
    <View style={styles.container}>
      <Countdown
        until={duration}
        size={20}
        onChange={(remainingTime) => {
          /* Handle time change if needed */
        }}
        digitStyle={{ backgroundColor: "#FFF" }}
        digitTxtStyle={{ color: "#1CC625" }}
        timeToShow={["M", "S"]}
        timeLabels={{ m: "Minutes", s: "Seconds" }}
        showSeparator
        style={styles.countdown}
      />
      <RoundedRectTimer duration={duration} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    backgroundColor: "lightblue",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
