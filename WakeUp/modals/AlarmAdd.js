import React, { useEffect, useState } from "react";
import {
  Modal,
  StyleSheet,
  View,
  Button,
  Text,
  TextInput,
  Dimensions,
} from "react-native";
import Color from "../constants/colors";
import NavButton from "../components/NavButton";
import { useDispatch, useSelector } from "react-redux";
import { addAlarm } from "../redux/actions"; // Ensure this path is correct
import DateTimePickerModal from "react-native-modal-datetime-picker";

const { width, height } = Dimensions.get("window");
const screenWidth = Dimensions.get("window").width; // Get the full width of the screen
const buttonWidth = 100; // Width of the button, must match the style below

const selectMaxAlarmId = (state) => {
  // Access the nested alarms array inside the alarms object
  const alarmsArray = state.alarms.alarms || [];
  const maxId = alarmsArray.reduce((max, alarm) => Math.max(max, alarm.id), 0);
  return maxId;
};

const AlarmAdd = ({ visible, onClose }) => {
  const maxAlarmId = useSelector(selectMaxAlarmId);
  const [newTime, setNewTime] = useState("");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const dispatch = useDispatch();

useEffect(() => {
  // Whenever hours or minutes change, update the newTime state
  const timeStr = `${hours}:${minutes}`;
  if (hours && minutes) {
    setNewTime(timeStr); // Update the state with the new time
    console.log("New time set:", timeStr);
  }
}, [hours, minutes]);

const handleConfirm = (date) => {
  const tempHours = date.getHours().toString().padStart(2, "0");
  const tempMinutes = date.getMinutes().toString().padStart(2, "0");
  console.log("Selected Time:", tempHours, tempMinutes);

  setHours(tempHours);
  setMinutes(tempMinutes);
  hideTimePicker();
  handleSubmit();
};

const hideTimePicker = () => {
  setPickerVisible(false);
};

const handleSubmit = () => {
  const newId = maxAlarmId + 1;
  console.log("New ID for alarm:", newId);

  const newAlarm = {
    id: newId,
    time: newTime,
    name: "Alarm " + newId,
    active: true,
    days: [false, false, false, false, false, false, false],
  };

  dispatch(addAlarm(newAlarm));
  console.log("Dispatching new alarm:", newAlarm);
  handleClose();
};

  const handleClose = () => {
    setNewTime("");
    onClose();
  };

  return (
    <View>
      <DateTimePickerModal
        isVisible={visible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideTimePicker}
      />
    </View>
  );
};

export default AlarmAdd;
