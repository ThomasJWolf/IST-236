import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";
import Svg, { Rect, Defs, LinearGradient, Stop } from "react-native-svg";

const AnimatedRect = Animated.createAnimatedComponent(Rect);

const RoundedRectTimer = ({
  duration,
  strokeWidth = 10,
  size = 200,
  color = "tomato",
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: duration * 1000,
      useNativeDriver: true,
    }).start();
  }, [duration]);

  // Calculate the perimeter of the rounded rectangle
  const perimeter = size * 2 + (size / 2) * 2;
  const strokeDasharray = perimeter;

  const strokeDashoffset = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [perimeter, 0],
  });

  return (
    <View style={styles.container}>
      <Svg height={size} width={size}>
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="gold" />
            <Stop offset="100%" stopColor="red" />
          </LinearGradient>
        </Defs>
        <AnimatedRect
          x={strokeWidth / 2}
          y={strokeWidth / 2}
          width={size - strokeWidth}
          height={size / 2 - strokeWidth}
          rx={20} // Adjust this for more pronounced rounded corners
          fill="none"
          stroke="url(#grad)"
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RoundedRectTimer;
