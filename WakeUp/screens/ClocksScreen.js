import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Clock from "../components/Clock/Clock";
import Colors from "../constants/colors";
import Clocker from "react-live-clock";
import TimezoneSearch from "../modals/TimezoneSearch";
import NavButton from "../components/NavButton";

const screenWidth = Dimensions.get("window").width; // Get the full width of the screen
const buttonWidth = 100; // Width of the button, must match the style below

const ClocksScreen = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
const clocks = useSelector((state) => state.clocks.clocks);
  const [key, setKey] = useState(0);
  const forceUpdate = () => setKey((prevKey) => prevKey + 1);

const displayedClocks =
  clocks && Array.isArray(clocks) ? clocks.filter((clock) => clock.active) : [];

  useEffect(() => {
    const fetchData = async () => {
      // Example async function
      const response = true;
      if (response.needsUpdate) {
      }
    };

    fetchData();
  }, []); // Ensure you handle dependencies correctly

  return (
    <View style={styles.screen}>
      <View style={styles.clockContainer}>
        <Text style={styles.name}>{"Current Time"}</Text>
        <Clocker
          format={"h:mm:ss a"}
          ticking={true}
          element={Text}
          style={styles.time}
        />
        <Clocker
          format={"LL"}
          ticking={true}
          element={Text}
          style={styles.date}
        />
      </View>
      <Clock key={key} items={displayedClocks} />
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
      <TimezoneSearch
        visible={modalIsVisible}
        onClose={() => {
          setModalIsVisible(false);
          forceUpdate();
        }}
      />
      </View>
    </View>
  );
};

export default ClocksScreen;

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
  },
  clockContainer: {
    alignItems: "center",
    paddingHorizontal: 5,
    paddingTop: 5,
    borderColor: "#000",
    backgroundColor: Colors.background,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  time: {
    fontSize: 60,
    color: "white",
  },
  date: {
    fontSize: 20,
    color: "white",
    paddingBottom: 5,
  },
  modalContainer: {
    height: "0%",
    justifyContent: "center",
    alignItems: "center",
  },
});
