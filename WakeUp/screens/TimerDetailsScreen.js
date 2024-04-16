import { View, Text, StyleSheet} from "react-native";
import { useState, useLayoutEffect, useContext } from "react";
import { TIMERS } from "../data/timers";
import Colors from "../constants/colors";
import NavButton from "../components/NavButton";
import { MaterialIcons } from "@expo/vector-icons";

function TimerDetailsScreen(props) {
  const timerId = props.route.params.timerId;
  const selectedTimer = TIMERS.find((timer) => timer.id === timerId);

    function headerButtonPressHandler() {
      setPressed(!pressed);
    }

    
  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => {
      },
    });
  }, [props.navigation, headerButtonPressHandler]);

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.title}>{selectedTimer.title}</Text>

      <Text style={styles.description}>{selectedTimer.description}</Text>

      <Text style={styles.time}>{selectedTimer.time}</Text>

      <NavButton>
        <MaterialIcons name="pause" size={30} color="white" />
      </NavButton>
    </View>
  );
}
export default TimerDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  timerContainer: {
    borderRadius: 7,
    backgroundColor: Colors.background,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: Colors.primary300,
  },
  description: {
    fontSize: 20,
    color: Colors.primary300,
  },
  time: {
    fontSize: 80,
    color: Colors.primary300,
  },
});
