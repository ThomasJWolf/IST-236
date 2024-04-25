import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../constants/colors";
import ActionButton from "../ActionButton";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Switch } from "react-native-gesture-handler";
import * as Notifications from "expo-notifications";
import { useDispatch, useSelector } from 'react-redux';
import { toggleAlarm, deleteAlarm, updateAlarm } from '../../redux/actions';




function AlarmItem(props) {
  const [lastLoggedTime, setLastLoggedTime] = useState("");
  const navigation = useNavigation();
  const [daysActive, setDaysActive] = useState(props.days); // One for each day Sun-Sat
  const [active, setActive] = useState(props.active);
  const [time, setTime] = useState(props.time);
  const [name, setName] = useState(props.name);
  const [days, setDays] = useState(props.days);
  const [index, setIndex] = useState();
  const dispatch = useDispatch();
  const newDetails = { name, time, days, active };

  const handleToggle = () => {
    dispatch(toggleAlarm(props.id));
  };

  const handleDelete = () => {
    dispatch(deleteAlarm(props.id));
  };

  const handleUpdate = (newDetails) =>
    dispatch(updateAlarm({ ...newDetails, id }));


  useEffect(() => {
    // Request notification permissions on component mount
    Notifications.requestPermissionsAsync({
      allowAlert: true,
      allowSound: true,
      allowAnnouncements: true,
    });

    // Schedule alarms
    daysActive.forEach(() => {
      if (props.active) {
        daysActive.forEach((isActive, index) => {
          if (isActive) {
            const alarmTime = nextAlarmDate(props.time, index);
            scheduleAlarm(alarmTime, props.name);
          }
        });
      }
    });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const formattedTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

      if (formattedTime !== lastLoggedTime) {
        // console.log(`Current time: ${formattedTime}`);
        setLastLoggedTime(formattedTime); // Update the last logged time
      }
    }, 1000); // 1000 milliseconds = 1 second

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [lastLoggedTime]); // React to changes in lastLoggedTime

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("Notification received in foreground:", notification);
        Notifications.presentNotificationAsync(notification.request.content);
      }
    );

    return () => subscription.remove();
  }, []);

  useEffect(() => {
    async function requestPermissions() {
      const settings = await Notifications.requestPermissionsAsync({
        allowAlert: true,
        allowSound: true,
        allowAnnouncements: true,
      });
    }
    requestPermissions();
  }, []);

  const scheduleAlarm = async () => {
    try {
      const alarmTime = nextAlarmDate(time, index);
      console.log(
        `Attempting to schedule alarm at: ${alarmTime.toString()} for index: ${index}`
      );
      const schedulingResult = await Notifications.scheduleNotificationAsync({
        content: {
          title: "Alarm",
          body: "Your alarm is ringing!",
          sound: true,
        },
        trigger: {
          date: alarmTime,
          repeats: true,
        },
      });
      console.log(`Alarm scheduled successfully with ID: ${schedulingResult}`);
    } catch (error) {
      console.error(`Failed to schedule alarm for index ${index}:`, error);
      // Handle the specific case where the alarm limit is reached
      if (error.message.includes("Maximum limit of concurrent alarms")) {
        await clearOldAlarms();
      }
    }
  };

  const fetchScheduledAlarms = async () => {
    console.log("Fetching scheduled notifications...");
    const notifications =
      await Notifications.getAllScheduledNotificationsAsync();
    console.log("Scheduled notifications:", notifications);
    setScheduledAlarms(notifications);
  };


  const nextAlarmDate = (time, dayIndex) => {
    console.log(`Setting alarm for ${time} on day ${dayIndex}`);
    setTime(time);
    setIndex(dayIndex);
    let [hour, minutePart] = time.split(":");
    const minute = parseInt(minutePart.substring(0, 2), 10);
    const ampm = minutePart.substring(3).toUpperCase(); // Get AM/PM part

    hour = parseInt(hour, 10); // Convert string hour to number

    // Convert 12-hour format to 24-hour format
    if (ampm === "PM" && hour < 12) {
      hour += 12;
    } else if (ampm === "AM" && hour === 12) {
      hour = 0; // Midnight case
    }

    const now = new Date();
    let alarm = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      hour,
      minute,
      0
    );

    let daysToAdd = (dayIndex - alarm.getDay() + 7) % 7;
    if (daysToAdd === 0 && alarm <= now) {
      daysToAdd = 7;
    }
    alarm.setDate(alarm.getDate() + daysToAdd);

    console.log(`Alarm set for: ${alarm.toString()}`); // Verify the calculated alarm time
    return alarm;
  };

  const handleCheckboxChange = (isChecked, dayIndex) => {
    const updatedDays = [...daysActive];
    updatedDays[dayIndex] = isChecked;
    setDaysActive(updatedDays);
    scheduleAlarm(updatedDays, props.time);
  };

  const [scheduledAlarms, setScheduledAlarms] = useState([]);




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
              {daysActive.map((isActive, index) => (
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
            thumbColor={active ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => handleToggle(props.id)}
            value={active}
          />
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
    width: "85%",
  },
});
