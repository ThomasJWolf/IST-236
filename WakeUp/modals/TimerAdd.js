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
import { useDispatch } from "react-redux";
import { addTimer } from "../redux/actions"; // Ensure this path is correct

const { width, height } = Dimensions.get("window");

const TimerAdd = ({ visible, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState("0");
  const dispatch = useDispatch();

  const validateTime = (text, limit) =>
    text.replace(/[^0-9]/g, "0").slice(0, limit);

  const handleSubmit = () => {
    if (
      !title.trim() &&
      !description.trim() &&
      (!hours || !minutes || !seconds)
    ) {
      alert("Please fill all fields correctly.");
      return;
    }

    const fullTime =
      parseInt(hours, 10) * 3600 +
      parseInt(minutes, 10) * 60 +
      parseInt(seconds, 10);
    if (isNaN(fullTime)) {
      alert("Invalid time input.");
      return;
    }
    dispatch(addTimer({ title, description, time: parseInt(fullTime), timeLeft: parseInt(fullTime)}));
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
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            placeholder="Description"
            style={styles.input}
            value={description}
            onChangeText={setDescription}
          />
          <View style={styles.timeContainer}>
            <TextInput
              placeholder="Hours"
              style={styles.time}
              keyboardType="numeric"
              onChangeText={(text) => setHours(validateTime(text, 2))}
              value={hours}
            />
            <TextInput
              placeholder="Minutes"
              style={styles.time}
              keyboardType="numeric"
              onChangeText={(text) => setMinutes(validateTime(text, 2))}
              value={minutes}
            />
            <TextInput
              placeholder="Seconds"
              style={styles.time}
              keyboardType="numeric"
              onChangeText={(text) => setSeconds(validateTime(text, 2))}
              value={seconds}
            />
          </View>
          <Button title="Add Timer" onPress={handleSubmit} />
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
    width: width,
    height: height,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "antipastoPro",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 23, // Optional: Adjust font size for better readability
    color: "white", // Optional: Adjust font color for better readability
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
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "white",
    borderRadius: 20,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  time: {
    width: "30%",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "white",
    borderRadius: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "white",
    borderRadius: 20,
  },
});

export default TimerAdd;
