import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Button,
  Animated,
  Dimensions,
  Easing,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ActionButton from "../ActionButton";
import Colors from "../../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import Svg, { Rect, Defs, LinearGradient, Stop } from "react-native-svg";
import Countdown from "react-native-countdown-component";
import { useDispatch } from "react-redux";
import { toggleTimer, deleteTimer } from "../../redux/actions";

const AnimatedRect = Animated.createAnimatedComponent(Rect);

const screenWidth = Dimensions.get("window").width; // Get the full width of the screen

function TimerItem(props) {
  const navigation = useNavigation();
  const animatedValue = useRef(new Animated.Value(0)).current;
  const size = screenWidth - 48; // Account for padding and ensure it fits within the screen
  const duration = props.time;
  const strokeWidth = 5;
  const [isPaused, setIsPaused] = useState(true);
  const [hasFinished, setHasFinished] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTimer(props.id));
  };

  const handleDelete = () => {
    dispatch(deleteTimer(props.id));
  };

  const pi = Math.PI; // Use Math.PI for π
  const height = size / 2; // Given that height is half of the width
  const radius = 15; // Radius of the quarrter-circle arcs

  const perimeter =
    2 * pi * radius + 2 * (size - 2 * radius) + 2 * (height - 2 * radius);

  const resetTimer = () => {
    animatedValue.setValue(0);
    setIsPaused(true);
    setHasFinished(false);
  };

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: duration * 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      setHasFinished(true);
    });

    return () => {
      animatedValue.stopAnimation();
    };
  }, [isPaused, duration]);

  const strokeDasharray = perimeter;
  const strokeDashoffset = (1 - elapsedTime / duration) * perimeter;

  return (
    <View
      style={[
        styles.itemContainer,
        {
          backgroundColor:
            props.id % 2 == 0
              ? "rgba(231, 231, 231, 0.1)"
              : "rgba(255, 255, 255, 0.2)",
        },
      ]}
    >
      <Pressable onPress={handleToggle} onLongPress={handleDelete}>
        <Svg height={size / 2} width={size} style={styles.barContainer}>
          <Defs>
            <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="0%">
              <Stop offset="100%" stopColor="#ff0000" />
            </LinearGradient>
          </Defs>
          <AnimatedRect
            x={strokeWidth / 2}
            y={strokeWidth / 2}
            width={size - strokeWidth}
            height={size / 2 - strokeWidth}
            rx={15}
            fill="none"
            stroke="url(#grad)"
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
          />
        </Svg>
        <View style={styles.timerContainer}>
          <View style={styles.text}>
            <Text style={styles.title}>{props.title}</Text>
            <Countdown
              until={duration}
              running={!isPaused}
              onFinish={() => {
                setIsPaused(true);
              }}
              size={30}
              onChange={(remainingSec) => {
                setElapsedTime(duration - remainingSec + 1 ); // Update remaining time
              }}
              digitStyle={{}}
              digitTxtStyle={{ color: "#FFF" }}
              timeToShow={["M", "S"]}
              separatorStyle={{ color: "#FFF" }}
              showSeparator
              timeLabels={{ m: null, s: null }}
              style={styles.countdown}
            />
          </View>
          <View style={styles.buttonContainter}>
            <ActionButton
              circle={true}
              size={60}
              onPress={() => {
                if (hasFinished) {
                  resetTimer();
                } else {
                  setIsPaused(!isPaused);
                  setElapsedTime(1);
                }
              }}
            >
              <MaterialIcons
                name={isPaused ? "play-arrow" : "pause"}
                size={30}
                color="white"
              />
            </ActionButton>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default TimerItem;

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

  timerContainer: {
    flex: 1,
    flexDirection: "row",
    margin: 20,
    position: "absolute", // Absolutely position the content container over the SVG
    top: "30%",
    left: "10%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
    alignItems: "center",
    justifyContent: "center",
  },
  barContainer: {
    marginBottom: 6,
  },
  countdown: {
    color: "white",
    alignContent: "center",
    justifyContent: "center",
  },
  text: {
    padding: 10,
  },
  title: {
    fontSize: 30,
    color: "white",
  },
  time: {
    fontSize: 60,
    color: "white",
  },
  description: {
    fontSize: 20,
    color: "black",
  },
  buttonContainter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
