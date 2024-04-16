import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../constants/colors";

// Mock data - replace with your actual data source

function GroupItem(props) {
  const navigation = useNavigation();

  // This function could be used to navigate to an group details screen or toggle group state
  const handleGroupPress = (groupId) => {
    console.log("Group pressed:", groupId);
    // navigation.navigate("GroupDetails", { groupId: groupId });
  };

  function selectedGroupHandler() {
    navigation.navigate("GroupDetails", {
      groupId: props.id,
    });
  }

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
      <Pressable onPress={selectedGroupHandler}>
        <View style={styles.groupContainer}>
          <Text style={styles.name}>{props.name}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background, // Replace with your actual color
  },
  itemContainer: {
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 3,
  },
  button: {
    flex: 1,
  },
  groupContainer: {
    flex: 1,
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

});

export default GroupItem;
