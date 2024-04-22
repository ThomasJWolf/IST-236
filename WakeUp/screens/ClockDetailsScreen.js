import { View, Text, StyleSheet} from "react-native";
import { useState, useLayoutEffect, useContext } from "react";
import { CLOCKS } from "../data/clocks";
import Colors from "../constants/colors";
import Clock from "react-live-clock";

function ClockDetailsScreen(props) {
  const clockId = props.route.params.clockId;
  const selectedClock = CLOCKS.find((clock) => clock.id === clockId);

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
    <View style={styles.clockContainer}>
      <Text style={styles.name}>{props.name}</Text>
      <Clock
        format={"h:mm:ss a"}
        ticking={true}
        timezone={props.timezone}
        element={Text}
        style={styles.time}
      />
      <Clock
        format={"LL"}
        ticking={true}
        timezone={props.timezone}
        element={Text}
        style={styles.date}
      />
    </View>
  );
}
export default ClockDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  clockContainer: {
    borderRadius: 7,
    backgroundColor: Colors.background,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 40,
    fontWeight: "bold",
    color: Colors.primary300,
  },
  time: {
    fontSize: 70,
    color: Colors.primary300,
  },
  date: {
    fontSize: 40,
    color: Colors.primary300,
  },
});
