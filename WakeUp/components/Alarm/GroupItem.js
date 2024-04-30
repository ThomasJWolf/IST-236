import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../constants/colors";

const GroupItem = (props) => {
  // Use this function to handle press on a group item
  const handlePress = () => {
    props.onGroupPress(props.id, props.alarmList);
  };

  // console.log("Group select: ", props.isSelected);
  // console.log("Group id: ", props.id);

    const isSelected = props.id === props.isSelected;



  // console.log("GroupItem: ", isSelected);

  return (
    <View style={[styles.itemContainer, isSelected ? styles.selected : {}]}>
      <Pressable
        android_ripple={{ color: "grey" }}
        onPress={handlePress}
      >
        <View
          style={styles.groupContainer}
        >
          <Text style={[styles.name, isSelected ? styles.textSelected : {}]}>
            {props.name}
          </Text>
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
  selected: {
    backgroundColor: "rgba(255, 255, 255, 0.80)", // Define this color in your constants or directly here
    borderColor: "black", // Same as above
  },
  textSelected: {
    color: "black", // Same as above
  },
});

export default GroupItem;
