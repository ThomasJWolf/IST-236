import { View, Text, StyleSheet} from "react-native";
import { useState, useLayoutEffect, useContext } from "react";
import { STOPWATCHES } from "../data/stopwatches";
import Colors from "../constants/colors";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import ActionButton from "../components/ActionButton";


function StopwatchDetailsScreen(props) {
  const stopwatchId = props.route.params.stopwatchId;
  const selectedStopwatch = STOPWATCHES.find((stopwatch) => stopwatch.id === stopwatchId);

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


      const lapsElements = Array.isArray(selectedStopwatch.laps) ? (
        selectedStopwatch.laps.map((lap, index) => (
          <Text key={index} style={styles.lap}>
            #{index + 1} - {lap[1]} - {lap[2]}
          </Text>
        ))
      ) : (
        <Text></Text>
      );

  return (
    <View style={styles.stopwatchContainer}>
      <View style={styles.text}>
        <Text style={styles.title}>{selectedStopwatch.title}</Text>
        <Text style={styles.time}>{selectedStopwatch.time}</Text>
      </View>
      <View style={styles.lapContainter}>{lapsElements}</View>

      <View style={styles.buttonContainter}>
        <ActionButton
          circle={true}
          size={60}
          onPress={() => console.log("Button Pressed")}
        >
          <MaterialIcons name="loop" size={30} color="white" />
        </ActionButton>
        <ActionButton
          circle={true}
          size={100}
          onPress={() => console.log("Button Pressed")}
        >
          <MaterialIcons name="pause" size={30} color="white" />
        </ActionButton>
        <ActionButton
          circle={true}
          size={60}
          onPress={() => console.log("Button Pressed")}
        >
          <Entypo name="stopwatch" size={30} color="white" />
        </ActionButton>
      </View>
    </View>
  );
}
export default StopwatchDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  stopwatchContainer: {
    borderRadius: 7,
    backgroundColor: Colors.background,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    flex: 1,
    padding: 10,
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    paddingBottom: 50,
  },
  time: {
    fontSize: 80,
    color: "white",
    textAlign: "center",
  },
  description: {
    fontSize: 20,
    color: "black",
  },
  buttonContainter: {
    flex: .5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  lapContainter: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  lap: {
    fontSize: 25,
    color: "white",
    paddingBottom: 10,
  },
});
