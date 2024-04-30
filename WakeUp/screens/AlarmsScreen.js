import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Text, Button } from "react-native";
import Colors from "../constants/colors";
import Group from "../components/Alarm/Group";
import Alarm from "../components/Alarm/Alarm";
import GroupButton from "../components/GroupButton";
import NavButton from "../components/NavButton";
import { Switch } from "react-native-gesture-handler";
import { Notifications } from "expo";
import { useDispatch, useSelector } from "react-redux";
import { initializeAlarms, initializeGroups } from "../redux/actions";
import DateTimePickerModal from "../modals/AlarmAdd";

const screenWidth = Dimensions.get("window").width; // Get the full width of the screen
const buttonWidth = 100; // Width of the button, must match the style below

function AlarmsScreen() {
  const [selectedGroup, setSelectedGroup] = useState(0);
  const [refreshKey, setRefreshKey] = useState(0); // Key for forcing re-render
  const [isEditing, setIsEditing] = useState(false);
  const [displayedAlarms, setDisplayedAlarms] = useState([]);
  const [displayedGroups, setDisplayedGroups] = useState([]); // This will store the groups displayed on the screen
  const [groupAlarms, setGroupAlarms] = useState([]); // This will store the IDs of alarms in the selected group
  const [isPickerVisible, setPickerVisible] = useState(false);
  const dispatch = useDispatch();
  const alarms = useSelector((state) => state.alarms.alarms);
  const groups = useSelector((state) => state.groups.groups);

  const forceUpdate = () => setRefreshKey((prevKey) => prevKey + 1);

  const showTimePicker = () => {
    setPickerVisible(true);
  };

  const hideTimePicker = () => {
    setPickerVisible(false);
  };

  useEffect(() => {
    const group = groups.find((group) => group.id === selectedGroup);
    console.log("Group: ", group);
    if (group) {
      setGroupAlarms(group.alarmList);
      console.log("Group Alarms 1: ", groupAlarms);
    } else {
      setGroupAlarms([]);
      console.log("Group Alarms 2: ", groupAlarms);
    }
  }, [selectedGroup]); // Update groupAlarms whenever selectedGroup changes

  useEffect(() => {
    setDisplayedAlarms(
      alarms && Array.isArray(alarms) ? alarms.filter((alarm) => alarm) : []
    );
  }, [alarms]); // Dependency on the `alarms` to recompute when alarms change

  useEffect(() => {
    console.log("aaaaaaaaaaaaaaaaa", displayedGroups);

    setDisplayedGroups(groups);
    console.log("bbbbbbbbbbbbbbbbbb", displayedGroups);
  }, [groups]); // This will update groupAlarms whenever groups changes

  useEffect(() => {
    if (displayedAlarms.length === 0) {
      dispatch(initializeAlarms());
    }
    console.log(displayedGroups.length);
    if (displayedGroups.length === 0) {
      dispatch(initializeGroups());
      console.log(
        "Group Alarms vrtjkhviheriuuhetbviuert5uvrth:    ",
        displayedGroups
      );
    }
    const fetchData = async () => {
      // Example async function
      const response = true;
      if (response.needsUpdate) {
      }
    };

    fetchData();
  }, [dispatch, refreshKey]); // Ensure you handle dependencies correctly

  useEffect(() => {
    // Automatically select the first group or display all alarms on load
    handleGroupPress(selectedGroup);
  }, [selectedGroup]); // This will run the handleGroupPress function when the component mounts

  const handleGroupPress = (groupId) => {
    // Set the selected group
    setSelectedGroup(groupId);

    // Find the group by its id
    const group = groups.find((group) => group.id === groupId);

    if (group) {
      // Filter alarms that are in the selected group
      if (groupId === 0) {
        // If groupId is 0, display all alarms
        setDisplayedAlarms(
          alarms && Array.isArray(alarms) ? alarms.filter((alarm) => alarm) : []
        );
      } else {
        // Otherwise, filter the alarms based on the group's alarmList
        const filteredAlarms = alarms.filter((alarm) =>
          group.alarmList.includes(alarm.id)
        );
        setDisplayedAlarms(filteredAlarms);
      }
    } else {
      // If no group is found, set displayedAlarms to an empty array
      setDisplayedAlarms([]);
    }

    setRefreshKey((prevKey) => prevKey + 1); // Increment key to force re-render
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
    if (true) {
      setDisplayedAlarms(alarms); // Show all alarms in edit mode
      setRefreshKey((prevKey) => prevKey + 1); // Increment key to force re-render
    }
  };

  useEffect(() => {
    console.log("Groups from Redux:", groups);
  }, [groups]);

  const clearAllAlarms = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync();
    console.log("All alarms cleared!");
  };

  console.log("Selected Group: ", selectedGroup);
  return (
    <View style={styles.screen}>
      <View style={styles.groupsContainer}>

        <Group
          items={groups}
          isSelected={selectedGroup}
          onGroupPress={handleGroupPress}
        />
        <View style={styles.groupsEdit}>
          <GroupButton onPress={toggleEditing}>
            {isEditing ? "Done" : "Edit"}
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

      <Alarm
        items={displayedAlarms}
        key={refreshKey}
        isEditing={isEditing}
        groupAlarms={groupAlarms}

        forceUpdate={forceUpdate}
      />
      <View style={styles.buttonContainer}>
        <NavButton
          style={{ buttonContainer: { borderColor: "#000", borderWidth: 3 } }}
          onPress={() => showTimePicker()}
        >
          +
        </NavButton>
      </View>
      <DateTimePickerModal
        visible={isPickerVisible}
      />
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
