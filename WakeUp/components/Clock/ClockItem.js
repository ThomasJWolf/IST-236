import { View, Text, StyleSheet, Pressable, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavButton from "../NavButton";

function ClockItem(props) {
  const navigation = useNavigation();

  function selectedClockHandler() {
    navigation.navigate("ClockDetails", {
      clockId: props.id,
    });
  }

  return (
    <View
      style={[
        styles.itemContainer,
        {
          backgroundColor:
            props.clockIndex % 2 == 0
              ? "rgba(231, 231, 231, 0.1)"
              : "rgba(255, 255, 255, 0.2)",
        },
      ]}
    >
      <Pressable onPress={selectedClockHandler}>
        <View style={styles.clockContainer}>
          <Text style={styles.timezone}>{props.timezone}</Text>
          <Text style={styles.time}>{props.time}</Text>
          <Text style={styles.date}>{props.date}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default ClockItem;

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
  button: {
    flex: 1,
  },
  clockContainer: {
    flex: 1,
    alignItems: "center",
  },
  timezone: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  time: {
    fontSize: 60,
    color: "white",
  },
  date: {
    fontSize: 20,
    color: "white",
    paddingBottom: 5,
  },
});
