import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Button,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../constants/colors";
import ActionButton from "../ActionButton";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Switch } from "react-native-gesture-handler";
import * as Notifications from "expo-notifications";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleAlarm,
  deleteAlarm,
  updateAlarm,
  removeGroupAlarm,
  addGroupAlarm,
} from "../../redux/actions";
import { Animated } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

function AlarmItem(props) {
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const newTime = formatTime(date);
    setTime(newTime); // Update local state if time is managed locally
    dispatch(updateAlarm(props.id, { time: newTime })); // Dispatch Redux action if time is managed globally
    cancelAlarm();
    props.forceUpdate();
    hideTimePicker();
  };

  // Helper function to format Date object to time string
  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }`;
    return formattedTime;
  };

  const [expanded, setExpanded] = useState(false);
  const animatedHeight = useRef(new Animated.Value(200)).current; // Assume 100 is initial collapsed height

  const handleUpdate = () => {};
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(props.active);
  const [time, setTime] = useState(props.time);
  const [details, setDetails] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [editedName, setEditedName] = useState(props.name);
  const [nextAlarmTime, setNextAlarmTime] = useState(
    calculateNextAlarmTime(props.time)
  );


  const toggleEditName = () => {
    setIsEditingName(!isEditingName);
  };

  const handleNameChange = (text) => {
    setEditedName(text);
  };

  const saveNameChange = () => {
    dispatch(updateAlarm(props.id, { name: editedName }));
    cancelAlarm();
    props.forceUpdate();
    toggleEditName();
  };

  // Animate height based on the `expanded` state
  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: expanded ? 300 : 200, // Assume 200 is the expanded height
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [expanded]);

  const animateHeight = (newHeight) => {
    Animated.timing(animatedHeight, {
      toValue: newHeight,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const toggleDetails = () => {
    console.log("Expanded:");

    setExpanded(!expanded);
  };

  useEffect(() => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });
  }, []);

  async function registerNotificationCategory() {
    await Notifications.setNotificationCategoryAsync("alarm_actions", [
      {
        identifier: "snooze",
        buttonTitle: "Snooze",
        options: { isDestructive: false, isAuthenticationRequired: false },
      },
      {
        identifier: "stop",
        buttonTitle: "Stop",
        options: { isDestructive: true, isAuthenticationRequired: false },
      },
    ]);
  }

  useEffect(() => {
    if (isActive) {
      scheduleAlarm();
    }
  }, [isActive, props.time]);

  const toggleAlarmActive = useCallback(() => {
    dispatch(toggleAlarm(props.id, "active"));
    cancelAlarm();
    props.forceUpdate();
  }, [dispatch, props.id]);

  const toggleGroupActive = useCallback(() => {
    // Check if the alarm is currently in the selected group's list
    const isInGroup = props.groupAlarms.includes(props.id);

    if (isInGroup) {
      // If it's in the group, dispatch an action to remove it
      dispatch(removeGroupAlarm(props.groupId, props.id));
    } else {
      // If it's not in the group, dispatch an action to add it
      dispatch(addGroupAlarm(props.groupId, props.id));
    }

    // Force update if necessary to re-render the component
    props.forceUpdate();
  }, [dispatch, props.id, props.groupId, props.groupAlarms, props.forceUpdate]);

  const handleCheckboxChange = (isChecked, index) => {
    const newDays = [...props.days];
    newDays[index] = isChecked;
    props.forceUpdate();
    cancelAlarm();
    props.forceUpdate();
    dispatch(updateAlarm(props.id, { days: newDays }));
  };

  const scheduleAlarm = async () => {
    const actions = [
      {
        identifier: "snooze",
        buttonTitle: "Snooze",
        options: { isDestructive: false, isAuthenticationRequired: false },
      },
      {
        identifier: "stop",
        buttonTitle: "Stop",
        options: { isDestructive: true, isAuthenticationRequired: false },
      },
    ];

    // Register the actions with the notification system
    registerNotificationCategory();
    Notifications.setNotificationCategoryAsync("alarm_actions", actions);

    const schedulingResult = await Notifications.scheduleNotificationAsync({
      content: {
        title: `Alarm: ${props.name}`,
        body: "It's time!",
        data: { propsId: props.id },
      },
      trigger: {
        date: nextAlarmTime.getTime(),
        repeats: false,
      },
    });
    console.log(`Alarm scheduled with ID: ${schedulingResult}`);
  };

  const cancelAlarm = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync();
    console.log("All alarms canceled.");
  };

  function calculateNextAlarmTime(time) {
    console.log(`Time: ${time}`);
    const [hour, minute] = time.split(":");
    console.log(`Hour: ${hour}, Minute: ${minute}`);
    const now = new Date();
    let nextAlarm = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      hour,
      minute,
      0
    );
    console.log(`Current time: ${now}`);
    console.log(`Alarm time: ${nextAlarm}`);
    if (nextAlarm <= now) {
      nextAlarm.setDate(nextAlarm.getDate() + 1);
    }
    console.log(`Next alarm time: ${nextAlarm}`);
    return nextAlarm;
  }

  const time12hour = () => {
    const [hour, minute] = time.split(":");
    const hour12 = hour % 12 || 12;
    console.log(`12-hour time: ${hour12}:${minute}`);
    return `${hour12}:${minute} ${hour < 12 ? "AM" : "PM"}`;
  };

  const itemContainerStyle = {
    ...styles.itemContainer,
    width: props.isEditing ? "90%" : "100%", // Adjust width based on props.isEditing state
    marginRight: props.isEditing ? "10%" : 0, // Adjust margin to center if needed
    backgroundColor:
      props.clockIndex % 2 === 0
        ? "rgba(231, 231, 231, 0.1)"
        : "rgba(255, 255, 255, 0.2)",
  };

  return (
    <View style={styles.container}>
      {props.isEditing && (
        <BouncyCheckbox
          isChecked={props.groupAlarms.includes(props.id)}
          fillColor="red"
          unfillColor="#FFFFFF"
          onPress={() => toggleGroupActive(props.id)}
          onValueChange={() => toggleGroupActive(props.id)}
        />
      )}

      <Animated.View style={itemContainerStyle}>
        <Pressable onPress={toggleDetails}>
          <View style={styles.alarmContainer}>
            <View style={styles.text}>
              <Pressable onPress={toggleEditName} style={styles.nameContainer}>
                {isEditingName ? (
                  <TextInput
                    value={editedName}
                    onChangeText={handleNameChange}
                    onEndEditing={saveNameChange}
                    autoFocus={true}
                    style={styles.name}
                  />
                ) : (
                  <Text style={styles.name}>{props.name}</Text>
                )}
              </Pressable>
              <Pressable onPress={showTimePicker}>
                <Text style={styles.time}>{time12hour()}</Text>
              </Pressable>
              <Text style={styles.days}>{props.days}</Text>
              <View style={styles.daysContainer}>
                {props.days.map((isActive, index) => (
                  <BouncyCheckbox
                    key={index}
                    isChecked={isActive}
                    iconComponent={
                      <Text style={{ fontWeight: "bold" }}>
                        {"SMTWTFS"[index]}
                      </Text>
                    }
                    fillColor="red"
                    unfillColor="#FFFFFF"
                    onPress={(isChecked) =>
                      handleCheckboxChange(isChecked, index)
                    }
                    onValueChange={() =>
                      handleUpdate({
                        days: alarm.days.map((day, idx) =>
                          idx === index ? !day : day
                        ),
                      })
                    }
                  />
                ))}
              </View>
            </View>
            <View style={styles.buttonContainter}></View>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isActive ? "#f5dd4b" : "#f4f3f4"}
              style={styles.switch}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => toggleAlarmActive(props.id)}
              value={isActive}
            />
          </View>
          {expanded && (
            <View>
              <Text>Details go here...</Text>
            </View>
          )}
        </Pressable>
      </Animated.View>
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        date={new Date()}
        isDarkModeEnabled={true}
        onConfirm={handleConfirm}
        onCancel={hideTimePicker}
      />
    </View>
  );
}
export default AlarmItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  itemContainer: {
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 3,
  },
  text: {
    padding: 10,
  },
  alarmContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 30,
    color: "white",
  },
  time: {
    fontSize: 50,
    color: "white",
  },
  description: {
    fontSize: 20,
    color: "black",
  },
  buttonContainter: {
    flex: 1,
    alignItems: "left",
    justifyContent: "center",
  },
  daysContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "85%",
  },
  days: {
    fontSize: 20,
    color: "white",
  },
  switch: {
    flex: 1,
    justifyContent: "center",
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
  },
});
