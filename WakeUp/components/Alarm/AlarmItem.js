import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../constants/colors";
import ActionButton from "../ActionButton";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Switch } from "react-native-gesture-handler";

// Mock data - replace with your actual data source

function AlarmItem(props) {
  const navigation = useNavigation();
  const [sun, mon, tue, wed, thu, fri, sat] = props.days;


  // This function could be used to navigate to an alarm details screen or toggle alarm state
  const handleAlarmPress = (alarmId) => {
    console.log("Alarm pressed:", alarmId);
    // navigation.navigate("AlarmDetails", { alarmId: alarmId });
  };

  function selectedAlarmHandler() {
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
        <Pressable onPress={selectedAlarmHandler}>
          <View style={styles.alarmContainer}>
            <Text style={styles.name}>{props.name}</Text>
          </View>
        </Pressable>
      </View>
    );
  }

  const handleCheckboxChange = (isChecked, dayIndex) => {
    // Update the boolean array based on which day was pressed.
  };

  return (
    <View
      style={[
        styles.itemContainer,
        {
          backgroundColor:
            props.alarmIndex % 2 == 0
              ? "rgba(231, 231, 231, 0.1)"
              : "rgba(255, 255, 255, 0.2)",
        },
      ]}
    >
      <Pressable onPress={selectedAlarmHandler}>
        <View style={styles.alarmContainer}>
          <View style={styles.text}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.time}>{props.time}</Text>
            <Text style={styles.days}>{props.days}</Text>
            <View style={styles.daysContainer}>
              <BouncyCheckbox
                isChecked={sun} // This sets the checkbox based on the boolean value for Monday
                iconComponent={<Text style={{ fontWeight: "bold" }}>S</Text>}
                size={25}
                fillColor="red"
                unfillColor="#FFFFFF"
                iconStyle={{
                  borderColor: "red",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={(isChecked) => handleCheckboxChange(isChecked, 0)} // Adjusted function for handling changes
              />
              <BouncyCheckbox
                isChecked={mon} // This sets the checkbox based on the boolean value for Monday
                iconComponent={<Text style={{ fontWeight: "bold" }}>M</Text>}
                size={25}
                fillColor="red"
                unfillColor="#FFFFFF"
                iconStyle={{
                  borderColor: "red",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={(isChecked) => handleCheckboxChange(isChecked, 1)} // Adjusted function for handling changes
              />
              <BouncyCheckbox
                isChecked={tue} // This sets the checkbox based on the boolean value for Monday
                iconComponent={<Text style={{ fontWeight: "bold" }}>T</Text>}
                size={25}
                fillColor="red"
                unfillColor="#FFFFFF"
                iconStyle={{
                  borderColor: "red",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={(isChecked) => handleCheckboxChange(isChecked, 2)} // Adjusted function for handling changes
              />
              <BouncyCheckbox
                isChecked={wed} // This sets the checkbox based on the boolean value for Monday
                iconComponent={<Text style={{ fontWeight: "bold" }}>W</Text>}
                size={25}
                fillColor="red"
                unfillColor="#FFFFFF"
                iconStyle={{
                  borderColor: "red",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={(isChecked) => handleCheckboxChange(isChecked, 3)} // Adjusted function for handling changes
              />
              <BouncyCheckbox
                isChecked={thu} // This sets the checkbox based on the boolean value for Monday
                iconComponent={<Text style={{ fontWeight: "bold" }}>T</Text>}
                size={25}
                fillColor="red"
                unfillColor="#FFFFFF"
                iconStyle={{
                  borderColor: "red",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={(isChecked) => handleCheckboxChange(isChecked, 4)} // Adjusted function for handling changes
              />
              <BouncyCheckbox
                isChecked={fri} // This sets the checkbox based on the boolean value for Monday
                iconComponent={<Text style={{ fontWeight: "bold" }}>F</Text>}
                size={25}
                fillColor="red"
                unfillColor="#FFFFFF"
                iconStyle={{
                  borderColor: "red",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={(isChecked) => handleCheckboxChange(isChecked, 5)} // Adjusted function for handling changes
              />
              <BouncyCheckbox
                isChecked={sat} // This sets the checkbox based on the boolean value for Monday
                iconComponent={<Text style={{ fontWeight: "bold" }}>S</Text>}
                size={25}
                fillColor="red"
                unfillColor="#FFFFFF"
                iconStyle={{
                  borderColor: "red",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={(isChecked) => handleCheckboxChange(isChecked, 6)} // Adjusted function for handling changes
              />
            </View>
          </View>
          <View style={styles.buttonContainter}></View>
          <Switch />
        </View>
      </Pressable>
    </View>
  );
}

export default AlarmItem;

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

  alarmContainer: {
    flex: 1,
    flexDirection: "row",
  },
  text: {
    padding: 10,
  },
  name: {
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
  daysContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
