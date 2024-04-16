import { View, Text, StyleSheet, Pressable, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ActionButton from "../ActionButton";
import Colors from "../../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";

function TimerItem(props) {
  const navigation = useNavigation();

  function selectedTimerHandler() {
    navigation.navigate("TimerDetails", {
      timerId: props.id,
    });
  }

  return (
    <View
      style={[
        styles.itemContainer,
        {
          backgroundColor:
            props.timerIndex % 2 == 0
              ? "rgba(231, 231, 231, 0.1)"
              : "rgba(255, 255, 255, 0.2)",
        },
      ]}
    >
      <Pressable onPress={selectedTimerHandler}>
        <View style={styles.timerContainer}>
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
              <MaterialIcons name="pause" size={30} color="white" />
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
