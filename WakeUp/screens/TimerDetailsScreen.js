import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  Dimensions,
  Easing,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import ActionButton from "../components/ActionButton";
import Colors from "../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import Svg, { Rect, Defs, LinearGradient, Stop } from "react-native-svg";
import Countdown from "react-native-countdown-component";
import { useDispatch } from "react-redux";
import { toggleTimer, deleteTimer } from "../redux/actions";

const AnimatedRect = Animated.createAnimatedComponent(Rect);
const screenWidth = Dimensions.get("window").width; // Get the full width of the screen

function TimerDetailsItem(props) {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [hasFinished, setHasFinished] = useState(false);
  const shadowOpacity = useRef(new Animated.Value(1)).current; // Starts fully visible
  const navigation = useNavigation();
  const route = useRoute();
  const { id, title, time, description, timeLeft, status } = route.params;

  const size = screenWidth - 48; // Account for padding and ensure it fits within the screen
  const duration = time; // Duration received from navigation parameter
  const strokeWidth = 5;
  const [isPaused, setIsPaused] = useState(status); // Initial pause status from navigation
  const [elapsedTime, setElapsedTime] = useState(time - timeLeft);
  const dispatch = useDispatch();

  const visualTime = useRef(new Animated.Value(0)).current;
  const blinkAnimation = useRef(new Animated.Value(1)).current;

  const pi = Math.PI;
  const height = size / 2;
  const radius = 15;
  const perimeter =
    2 * pi * radius + 2 * (size - 2 * radius) + 2 * (height - 2 * radius);
  const strokeDasharray = perimeter;
  const strokeDashoffset = visualTime.interpolate({
    inputRange: [0, Math.max(duration, 1)],
    outputRange: [perimeter, 0],
  });

  const resetTimer = () => {
    animatedValue.setValue(0);
    setIsPaused(true);
    setHasFinished(false);
  };

  useEffect(() => {
    let interval;
    if (isPaused) {
      interval = setInterval(() => {
        Animated.sequence([
          Animated.timing(blinkAnimation, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(blinkAnimation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]).start();
      }, 1000); // Adjust timing as needed for faster/slower blinking
    } else {
      clearInterval(interval);
      blinkAnimation.setValue(1); // Reset to full opacity when not paused
    }

    return () => clearInterval(interval);
  }, [isPaused]);

  // Update visualTime when elapsedTime changes
  useEffect(() => {
    let animation;

    if (!isPaused) {
      // Start or resume the animation
      animation = Animated.timing(visualTime, {
        toValue: elapsedTime,
        duration: 900, // Adjust the duration if needed
        easing: Easing.out(Easing.cubic), // Using an ease-out curve
        useNativeDriver: true,
      });
      animation.start();
    } else {
      // Stop the animation and maintain the current position
      visualTime.stopAnimation();
    }

    return () => {
      if (animation) {
        animation.stop(); // Ensure to stop the animation when the component unmounts or dependencies update
      }
    };
  }, [isPaused, elapsedTime]); // Reacting to changes in isPaused and elapsedTime
  return (
    <View
      style={[
        styles.itemContainer,
        {
          backgroundColor:
            id % 2 == 0
              ? "rgba(231, 231, 231, 0.1)"
              : "rgba(255, 255, 255, 0.2)",
        },
      ]}
    >
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
          stroke="#000" // Shadow color
          strokeWidth={strokeWidth} // Slightly larger to create a shadow effect
        />
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
          opacity={blinkAnimation} // Apply the animated opacity value here
        />
      </Svg>

      <View style={styles.timerContainer}>
        <View style={styles.text}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Countdown
              until={duration}
              running={!isPaused}
              onFinish={() => {
                setIsPaused(true);
              }}
              size={30}
              onChange={(remainingSec) => {
                setElapsedTime(duration - remainingSec + 1); // Update remaining time
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
    </View>
  );
}

export default TimerDetailsItem;

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
