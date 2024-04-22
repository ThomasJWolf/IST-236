import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

const ClockListItem = ({ id, name, timezone, active, onToggle }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {name} - {timezone}
        </Text>
      </View>
      <View style={styles.switchContainer}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={active ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => onToggle(id)}
          value={active}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  text: {
    fontSize: 15,
    color: "#fff",
  },
  textContainer: {
    width: "80%",
  },
  switchContainer: {
    
  },
  
});

export default ClockListItem;
