import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Text, Button } from "react-native";
import Colors from "../constants/colors";
import Group from "../components/Alarm/Group";
import Alarm from "../components/Alarm/Alarm";
import GroupButton from "../components/GroupButton";
import NavButton from "../components/NavButton";
import {ALARMS} from "../data/alarms"; // Assuming these are your data imports
import {ALARM_GROUPS} from "../data/groups"; // Assuming these are your data imports
import { Switch } from "react-native-gesture-handler";
import { Notifications } from "expo";
import { setScheduledAlarms } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const screenWidth = Dimensions.get("window").width; // Get the full width of the screen
const buttonWidth = 100; // Width of the button, must match the style below

function AlarmsScreen() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [displayedAlarms, setDisplayedAlarms] = useState(ALARMS);


    const fetchScheduledAlarms = async () => {
      console.log("Fetching scheduled notifications...");
      const notifications =
        await Notifications.getAllScheduledNotificationsAsync();
      console.log("Scheduled notifications:", notifications);
      setScheduledAlarms(notifications);
    };

  useEffect(() => {
    // On component mount, show all alarms
    setDisplayedAlarms(ALARMS);
  }, []);

  const handleGroupPress = (groupId, alarms) => {
    // Set the selected group
    setSelectedGroup(groupId);
    // Filter alarms that are in the selected group
    if (groupId === 0) {
      setDisplayedAlarms(ALARMS);
    } else {
    setDisplayedAlarms(ALARMS.filter((alarm) => alarms.includes(alarm.id)));
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.groupsContainer}>
        <Group items={ALARM_GROUPS} onGroupPress={handleGroupPress} />
        <View style={styles.groupsEdit}>
          <GroupButton onPress={() => console.log("Edit Groups")}>
            Edit
          </GroupButton>
          <GroupButton onPress={() => console.log("Add Group")}>+</GroupButton>
          <GroupButton
            style={styles.switch}
            onPress={() => console.log("Toggle Settings")}
          >
            <Switch />
          </GroupButton>
        </View>
      </View>
      <Alarm items={displayedAlarms} />
      <View style={styles.buttonContainer}>
        <NavButton
          style={{
            buttonContainer: { borderColor: "#000", borderWidth: 3 },
          }}
          onPress={() => console.log("Add Alarm")}
        >
          +
        </NavButton>
      </View>
    </View>
  );
}

export default AlarmsScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: "relative",
    backgroundColor: Colors.background,
  },
  groupsEdit: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    width: screenWidth,
    height: buttonWidth,
    borderRadius: buttonWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  groupsList: {
    flexGrow: 0,
  },
  groupItem: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
  },
  groupText: {
    color: Colors.primaryText,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  groupsContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 5,
    flexGrow: 0,
  },
  switch: {
    paddingBottom: 100,
  },
});
