import React, { useState } from "react";
import { Modal, StyleSheet, View, Button, Text, Dimensions, TextInput, searchQuery, setSearchQuery } from "react-native";
import ClockList from "../components/Clock/ClockList"; // Assuming Clock is in the same directory
import Color from "../constants/colors"; // Your color settings
import { CLOCKS } from "../data/clocks"; // Assuming these are your data imports
import NavButton from "../components/NavButton";

const { width, height } = Dimensions.get("window");


const TimezoneSearch = ({ visible, onClose }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Choose a Timezone</Text>
          <ClockList items={CLOCKS} />
          <NavButton
            style={{
              buttonContainer: {
                bordercolor: Color.primary500,
                borderWidth: 3,
              },
            }}
            onPress={onClose}
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
    backgroundColor: Color.background,
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
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 23, // Optional: Adjust font size for better readability
    color: "white", // Optional: Adjust font color for better readability
  },
});

export default TimezoneSearch;
