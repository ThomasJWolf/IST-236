import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Pressable, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ActionButton from "../ActionButton";
import Colors from "../../constants/colors";
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import moment from "moment";

function StopwatchItem(props) {
  const [laps, setLaps] = useState([]);
  const [start, setStart] = useState(0);
  const [now, setNow] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const stopwatchRef = useRef(null); // Using useRef to hold the stopwatch
  const [time, setTime] = useState(0);
  const [overallLapTime, setOverallLapTime] = useState("");

  const navigation = useNavigation();

  let stopwatch = null;

  function selectedStopwatchHandler() {
    navigation.navigate("StopwatchDetails", {
      stopwatchId: props.id,
    });
  }



function formatLapTime(milliseconds) {
  const duration = moment.duration(milliseconds);
  const minutes = duration.minutes();
  const seconds = duration.seconds();
  const millisecondsLeft = duration.milliseconds();
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}.${Math.floor(millisecondsLeft / 10)}`;
}

  useEffect(() => {
    return () => clearInterval(stopwatch);
  }, []);

  const startTimer = () => {
    const now = new Date().getTime();
    setStart(now);
    setNow(now); // This captures the exact time when the timer starts
    setLaps([]);
    setIsPaused(false);
    stopwatchRef.current = setInterval(() => {
      setNow(new Date().getTime()); // Continuously update 'now' to the current time
    }, 100);
    setHasStarted(true);
  };

  const lap = () => {
    const lapTime = now - start;
    console.log(formatTime());
    setOverallLapTime(formatTime());
    console.log(overallLapTime);
    setLaps((prevLaps) => [lapTime, ...prevLaps]); // reset the start to 'now' to start timing the next lap from this moment
    setOverallLapTime("-");
  };

  const stop = () => {
    setTime(stopwatchRef.current);
    clearInterval(stopwatchRef.current);
    const currentTime = new Date().getTime();
    setNow(currentTime); // This ensures 'now' is set to the exact stopping time

    setIsPaused(true);
  };

  const reset = () => {
    clearInterval(stopwatchRef.current);
    setLaps([]);
    setStart(0);
    setNow(0);
    setIsPaused(true);
  };

  const resume = () => {
    const currentNow = new Date().getTime();
    // Calculate the time difference since the stopwatch was last updated ('now')
    const elapsedTimeWhilePaused = currentNow - now;

    setStart((prevStart) => prevStart + elapsedTimeWhilePaused);

    stopwatchRef.current = setInterval(() => {
      setNow(new Date().getTime());
    }, 100);

    setIsPaused(false);
  };

  const formatTime = () => {
    const totalDuration =
      now - start + laps.reduce((total, lap) => total + lap, 0);
    const duration = new Date(totalDuration);
    const minutes = duration.getUTCMinutes();
    const seconds = duration.getUTCSeconds();
    const milliseconds = Math.floor(duration.getUTCMilliseconds() / 10);
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }.${milliseconds < 10 ? "0" + milliseconds : milliseconds}`;
  };
  const lapsElements = laps.map((lap, index) => (
    <Text key={index} style={styles.lap}>
      Lap {index + 1}: {formatLapTime(lap)} {overallLapTime}
    </Text>
  ));
  return (
    <View
      style={[
        styles.itemContainer,
        {
          backgroundColor:
            props.stopwatchIndex % 2 == 0
              ? "rgba(231, 231, 231, 0.1)"
              : "rgba(255, 255, 255, 0.2)",
        },
      ]}
    >
      <Pressable onPress={selectedStopwatchHandler}>
        <View style={styles.stopwatchContainer}>
          <View style={styles.text}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.time}>{formatTime()}</Text>
          </View>
          <View style={styles.buttonContainter}>
            <ActionButton circle={true} size={60} onPress={reset}>
              <MaterialIcons name="loop" size={30} color="white" />
            </ActionButton>
            <ActionButton
              circle={true}
              size={100}
              onPress={() => {
                if (isPaused == true && hasStarted == false) {
                  console.log("start");
                  startTimer();
                } else if (isPaused == false) {
                  console.log("stop");
                  stop();
                } else {
                  console.log("resume");
                  resume();
                }
              }}
            >
              <MaterialIcons
                name={isPaused ? "play-arrow" : "pause"}
                size={30}
                color="white"
              />
            </ActionButton>
            <ActionButton circle={true} size={60} onPress={lap}>
              <Entypo name="stopwatch" size={30} color="white" />
            </ActionButton>
          </View>
          <View style={styles.lapContainter}>{lapsElements}</View>
        </View>
      </Pressable>
    </View>
  );
}

export default StopwatchItem;

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 3,
  },

  stopwatchContainer: {
    flex: 1,
    flexDirection: "column",
    margin: 20,
  },
  text: {
    padding: 10,
  },
  title: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
  time: {
    fontSize: 60,
    color: "white",
    textAlign: "center",
  },
  description: {
    fontSize: 20,
    color: "black",
  },
  buttonContainter: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  lapContainter: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  lap: {
    fontSize: 20,
    color: "white",
  },
});
