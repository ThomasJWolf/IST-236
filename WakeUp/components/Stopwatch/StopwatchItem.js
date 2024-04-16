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

function StopwatchItem(props) {
  const navigation = useNavigation();

  function selectedStopwatchHandler() {
    navigation.navigate("StopwatchDetails", {
      stopwatchId: props.id,
    });
  }

    const lapsElements = Array.isArray(props.laps) ? (
      props.laps.map((lap, index) => (
        <Text key={index} style={styles.lap}>
          #{index + 1} - {lap[1]} - {lap[2]}
        </Text>
      ))
    ) : (
      <Text></Text>
    );

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
            <Text style={styles.time}>{props.time}</Text>
          </View>
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
          <View style={styles.lapContainter}>
            {lapsElements}
          </View>
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
