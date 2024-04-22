import React, { useState } from "react";
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
import { addTimer } from "../redux/actions"; // Ensure this path is correct

const { width, height } = Dimensions.get("window");
const screenWidth = Dimensions.get("window").width; // Get the full width of the screen
const buttonWidth = 100; // Width of the button, must match the style below
const selectMaxTimerId = (state) => {
  // Access the nested timers array inside the timers object
  const timersArray = state.timers.timers || [];
  console.log(timersArray); // Log to ensure correct data is accessed
  const maxId = timersArray.reduce((max, timer) => Math.max(max, timer.id), 0);
  return maxId;
};

const TimerAdd = ({ visible, onClose }) => {
  const maxTimerId = useSelector(selectMaxTimerId);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState("0");
  const dispatch = useDispatch();

  const validateTime = (text, limit) =>
    text.replace(/[^0-9]/g, "0").slice(0, limit);

const handleSubmit = () => {
  const newId = maxTimerId + 1;
  const fullTime =
    parseInt(hours, 10) * 3600 +
    parseInt(minutes, 10) * 60 +
    parseInt(seconds, 10);

  if (
    !title.trim() ||
    !description.trim() ||
    isNaN(fullTime) ||
    fullTime <= 0
  ) {
    alert("Please fill all fields correctly with valid time.");
    return;
  }

  const newTimer = {
    id: newId,
    title,
    description,
    time: fullTime,
    timeLeft: fullTime,
    status: true, // Assume default status is true; adjust according to your app logic
  };

  console.log("Dispatching new timer:", newTimer);
  dispatch(addTimer(newTimer));
  handleClose();
};


  const handleClose = () => {
    setTitle("");
    setDescription("");
    setHours("");
    setMinutes("");
    setSeconds("");
    onClose();
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={handleClose}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Add a Timer</Text>
          <TextInput
            placeholder="Title"
            placeholderTextColor={"#cccccc"}
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            placeholder="Description"
            placeholderTextColor={"#cccccc"}
            style={styles.input}
            value={description}
            onChangeText={setDescription}
          />
          <View style={styles.timeContainer}>
            <TextInput
              placeholder="Hours"
              placeholderTextColor={"#cccccc"}
              style={styles.time}
              keyboardType="numeric"
              onChangeText={(text) => setHours(validateTime(text, 2))}
              value={hours}
            />
            <TextInput
              placeholder="Minutes"
              placeholderTextColor={"#cccccc"}
              style={styles.time}
              keyboardType="numeric"
              onChangeText={(text) => setMinutes(validateTime(text, 2))}
              value={minutes}
            />
            <TextInput
              placeholder="Seconds"
              placeholderTextColor={"#cccccc"}
              style={styles.time}
              keyboardType="numeric"
              onChangeText={(text) => setSeconds(validateTime(text, 2))}
              value={seconds}
            />
          </View>
          <NavButton
            style={{
              buttonContainer: {
                bordercolor: Color.primary500,
                borderWidth: 3,
              },
            }}
            onPress={handleSubmit}
          >
            Add Timer
          </NavButton>
          <View style={styles.buttonContainer}>
            <NavButton
              style={{
                buttonContainer: {
                  bordercolor: Color.primary500,
                  borderWidth: 3,
                },
              }}
              onPress={handleClose}
            >
              Close
            </NavButton>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    position: "relative", // Ensures the floating button can be absolutely positioned
  },
  modalView: {
    width: width, // 90% of screen width
    height: height, // 80% of screen height
    backgroundColor: Color.backgroundO9,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    width: screenWidth,
    height: buttonWidth,
    borderRadius: buttonWidth,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "antipastoPro",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 50, // Optional: Adjust font size for better readability
    color: "white", // Optional: Adjust font color for better readability
    padding: 30,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    width: "80%",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#444444",
    color: "white",
    borderRadius: 20,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    color: "white",
    width: "80%",
  },
  time: {
    width: "30%",
    padding: 20,
    marginVertical: 10,
    backgroundColor: "#444444",
    color: "white",
    borderRadius: 20,
  },
  input: {
    width: "80%",
    padding: 20,
    marginVertical: 10,
    backgroundColor: "#444444",
    color: "white",
    borderRadius: 20,
  },
});

export default TimerAdd;
