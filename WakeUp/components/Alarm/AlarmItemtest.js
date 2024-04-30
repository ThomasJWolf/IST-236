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
import { useDispatch, useSelector } from "react-redux";
import { toggleAlarm, deleteAlarm, updateAlarm } from "../../redux/actions";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

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
  const [scheduledIds, setScheduledIds] = useState([]);

  const [hasScheduled, setHasScheduled] = useState(false);



  const checkAndHandleNotifications = async (alarmData) => {
    // Fetch all notifications
    const displayedNotifications =
      await Notifications.getPresentedNotificationsAsync();

    // Check if there's an ongoing notification
    const isAnyActive = displayedNotifications.some((notification) => {
      // This comparison depends on what data you pass to your notifications
      return notification.request.content.data.alarmId === alarmData.id;
    });

    // If an alarm is active, don't schedule a new one
    if (isAnyActive) {
      console.log("An alarm is currently active, not scheduling a new one.");
      return;
    }

    // If no active alarm, schedule a new notification
  };



const handleNotificationReceived = (notification) => {
  console.log("Notification received:", notification);
  checkAndHandleNotifications();
  // Perform some logic to determine if and when to reschedule
  if (shouldReschedule(notification)) {
    // Reschedule the notification
    Notifications.scheduleNotificationAsync({
      content: notification.request.content,
      trigger: null, // null means schedule it immediately
    });
    }
};

useEffect(() => {
  const listener = Notifications.addNotificationReceivedListener(
    handleNotificationReceived
  );
  return () => listener.remove();
}, []);

const shouldReschedule = (notification) => {
  const now = new Date();
  const notificationTime = new Date(notification.request.content.data.time);
  // Only reschedule if the time hasn't passed and less than 5 times rescheduled
  return (
    now < notificationTime &&
    notification.request.content.data.rescheduleCount < 5
  );
};









  useEffect(() => {
    if (!hasScheduled && active) {
      scheduleAlarm();
      setHasScheduled(true);
    }
  }, [active, hasScheduled]);

  const handleToggle = async () => {
    setActive(!active);
    dispatch(toggleAlarm(props.id));
    if (!active) {
      await checkAndScheduleAlarm();
    } else {
      await cancelAlarm();
    }
  };

  useEffect(() => {
    if (active) {
      checkAndScheduleAlarm();
    } else {
      cancelAlarm();
    }
  }, [active, time]); // Effect triggers on change in `active` or `time`

  Notifications.addNotificationResponseReceivedListener((response) => {
    if (response.actionIdentifier === "dismiss") {
      console.log("Dismissed notification");
      // Add logic to handle dismissal such as cancelling future repeats
    } else if (response.actionIdentifier === "snooze") {
      console.log("Snoozed notification");
      // Add logic to reschedule this notification
    }
  });

  const checkAndScheduleNotification = async (alarm) => {
    const notifications =
      await Notifications.getAllScheduledNotificationsAsync();
    const isScheduled = notifications.some(
      (n) => n.content.data.alarmId === alarm.id
    );

    if (!isScheduled) {
      scheduleAlarmNotification(alarm);
    } else {
      console.log("Alarm already scheduled.");
    }
  };



  const handleDelete = () => {
    dispatch(deleteAlarm(props.id));
  };

  const checkAndScheduleAlarm = async () => {
    const displayedNotifications =
      await Notifications.getPresentedNotificationsAsync();
    if (displayedNotifications.length === 0) {
      // No notifications are currently shown
      await scheduleAlarm(time);
    } else {
      console.log("Notification already displayed. Skipping new notification.");
    }
  };

  const handleUpdate = (newDetails) =>
    dispatch(updateAlarm({ ...newDetails, id }));

  useEffect(() => {
    // Permissions and initial scheduling (if necessary)
    requestPermissionsAndSchedule();
  }, []);

  const requestPermissionsAndSchedule = async () => {
    await Notifications.requestPermissionsAsync({
      allowAlert: true,
      allowSound: true,
      allowAnnouncements: true,
    }).then(scheduleInitialAlarms);
  };

  const scheduleInitialAlarms = () => {
    props.days.forEach((isActive, index) => {
      if (isActive && props.active) {
        const alarmTime = nextAlarmDate(props.time, index);
        scheduleAlarm(alarmTime, index);
      }
    });
  };

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
        scheduleImmediateNotification(notification.request.content);
      }
    );
    return () => subscription.remove();
  }, []);

  useEffect(() => {
    const schedule = async () => {
      const currentNotifications =
        await Notifications.getAllScheduledNotificationsAsync();
      console.log("Current Scheduled Notifications:", currentNotifications);
      if (currentNotifications.length === 0 && active) {
        console.log("No active notifications, scheduling a new one...");
        await scheduleAlarm();
      }
    };

    schedule();
  }, [active, time]); // Dependencies to ensure this only runs when needed

  useEffect(() => {
    if (props.active) {
      scheduleAlarm(props.time);
    }
  }, [props.active, props.time, scheduledAlarms]);

  const scheduleImmediateNotification = async (content) => {
    await Notifications.scheduleNotificationAsync({
      content,
      trigger: null, // null means schedule it immediately
    });
  };

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

const scheduleAlarm = async (time) => {
  const alarmTime = nextAlarmDate(time);
  const isAlreadyScheduled = scheduledIds.includes(alarmTime.toString());

  if (!isAlreadyScheduled) {
    const schedulingResult = await Notifications.scheduleNotificationAsync({
      content: {
        title: props.name,
        body: "Your alarm is ringing!",
        sound: true,
        data: { alarmId: props.id, time: alarmTime },
      },
      trigger: { date: alarmTime.getTime(), repeats: false },
    });

    console.log(`Alarm scheduled with ID: ${schedulingResult}`);
    setScheduledIds([...scheduledIds, alarmTime.toString()]); // Store the alarm time as identifier
    fetchScheduledAlarms();
  } else {
    console.log("Alarm for this time is already scheduled.");
  }
};


  const nextAlarmDate = (time) => {
    const [hourPart, minutePart] = time.split(":");
    const hour = (parseInt(hourPart, 10) % 12) + (time.includes("PM") ? 12 : 0);
    const minute = parseInt(minutePart.substring(0, 2), 10);
    const now = new Date();
    let alarmTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      hour,
      minute,
      0
    );

    if (alarmTime <= now) {
      alarmTime.setDate(alarmTime.getDate() + 1);
    }

    return alarmTime;
  };

  const handleCheckboxChange = (isChecked, dayIndex) => {
    const updatedDays = [...daysActive];
    updatedDays[dayIndex] = isChecked;
    setDaysActive(updatedDays);
    scheduleAlarm(updatedDays, props.time);
  };

  const [scheduledAlarms, setScheduledAlarms] = useState([]);

const cancelAlarm = async (alarmTime) => {
  const index = scheduledIds.indexOf(alarmTime.toString());
  if (index > -1) {
    await Notifications.cancelScheduledNotificationAsync(scheduledIds[index]);
    const newIds = [...scheduledIds];
    newIds.splice(index, 1);
    setScheduledIds(newIds);
    console.log("Alarm canceled:", alarmTime);
  }
};


const fetchScheduledAlarms = async () => {
    console.log("Fetching scheduled notifications...");
    const notifications = await Notifications.getAllScheduledNotificationsAsync();
    console.log("Scheduled notifications:", notifications);

    const ids = notifications.map(notif => new Date(notif.trigger.value).toString());
    setScheduledIds(ids);
};



  const isAlarmScheduled = (time) => {
    const alarmTime = new Date(nextAlarmDate(time)).getTime();
    return scheduledAlarms.some(
      (alarm) => new Date(alarm.trigger.value).getTime() === alarmTime
    );
  };

  const clearAllAlarms = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync();
    console.log("All alarms cleared!");
    // Optionally reset alarm states or perform any additional cleanup
    setAlarms([]); // This would clear the alarms if they are managed in state
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
        <Button title="Clear All Alarms" onPress={clearAllAlarms} />

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
