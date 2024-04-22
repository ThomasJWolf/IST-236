import Timer from "../components/Timer/Timer";
import React, { useState, useEffect } from "react";
import NavButton from "../components/NavButton";
import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../constants/colors";
import { useSelector, useDispatch } from "react-redux";
import TimerAdd from "../modals/TimerAdd";
import { initializeTimers } from "../redux/actions";

const screenWidth = Dimensions.get("window").width; // Get the full width of the screen
const buttonWidth = 100; // Width of the button, must match the style below

function TimersScreen() {
  const dispatch = useDispatch();
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const timers = useSelector((state) => state.timers.timers);

  const [key, setKey] = useState(0);
  const forceUpdate = () => setKey((prevKey) => prevKey + 1);

  const displayedTimers =
    timers && Array.isArray(timers) ? timers.filter((timer) => timer) : [];

  useEffect(() => {
    dispatch(initializeTimers());
    const fetchData = async () => {
      // Example async function
      const response = true;
      if (response.needsUpdate) {
      }
    };

    fetchData();
  }, [dispatch]); // Ensure you handle dependencies correctly
  return (
    <View style={styles.screen}>
      <Timer key={key} items={displayedTimers} />
      <View style={styles.buttonContainer}>
        <NavButton
          style={{
            buttonContainer: { borderColor: "#000", borderWidth: 3 },
          }}
          onPress={() => setModalIsVisible(true)}
        >
          +
        </NavButton>
      </View>
      <View style={styles.modalContainer}>
        <TimerAdd
          visible={modalIsVisible}
          onClose={() => {
            setModalIsVisible(false);
          }}
        />
      </View>
    </View>
  );
}

export default TimersScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: "relative", // Ensures the floating button can be absolutely positioned
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
  modalContainer: {
    height: "0%",
    justifyContent: "center",
    alignItems: "center",
  },
});
