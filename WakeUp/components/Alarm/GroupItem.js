import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../constants/colors";

// Mock data - replace with your actual data source

const GroupItem = (props) => {
  // Use this function to handle press on a group item
  const handlePress = () => {
    props.onGroupPress(props.id, props.alarms);
  };

  return (
    <View style={[styles.itemContainer]}>
      <Pressable android_ripple={{ color: "grey" }} onPress={handlePress}>
        <View style={styles.groupContainer}>
          <Text style={styles.name}>{props.name}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background, // Replace with your actual color
  },
  itemContainer: {
    marginHorizontal: 1,
    borderRadius: 5,
    borderColor: "#000",
    borderWidth: 2,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  button: {
    flex: 1,
  },
  groupContainer: {
    padding: 3,
    paddingBottom: 8,
    paddingHorizontal: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default GroupItem;
