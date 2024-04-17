import Alarm from "../components/Alarm/Alarm";
import { ALARMS } from "../data/alarms";
import { ALARM_GROUPS } from "../data/groups";
import NavButton from "../components/NavButton";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import Colors from "../constants/colors";
import { FlatList, Switch } from "react-native-gesture-handler";
import GroupButton from "../components/GroupButton";
import Group from "../components/Alarm/Group";

const screenWidth = Dimensions.get("window").width; // Get the full width of the screen
const buttonWidth = 100; // Width of the button, must match the style below

function AlarmsScreen() {
  const displayedGroups = ALARM_GROUPS.filter((groupItem) => groupItem);

    const displayedAlarms = ALARMS.filter((alarmItem) =>
    displayedGroups.some((group) => group.alarms.includes(alarmItem.id))
    );

  return (
    <View style={styles.screen}>
      <View style={styles.groupsContainer}>
        {/* <FlatList
          data={displayedGroups}
          renderItem={renderGroupItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.groupsList}
        /> */}
        <Group items={displayedGroups}/>
        <View style={styles.groupsEdit}>
          <GroupButton onPress={() => console.log("Edit Groups")}>
            Edit
          </GroupButton>
          <GroupButton onPress={() => console.log("Add Group")}>+</GroupButton>
          <GroupButton
            style={{
              buttonContainer: { paddingBottom: 45 },
            }}
            onPress={() => console.log("Toggle Settings")}
          >
            <Switch />
          </GroupButton>
        </View>
      </View>
      <Alarm items={displayedAlarms} />
      <View style={styles.buttonContainer}>
        <NavButton
          style={{
            buttonContainer: { borderColor: Colors.primary500, borderWidth: 3 },
          }}
          onPress={() => console.log("Add Alarm")}
        >
          +
        </NavButton>
      </View>
    </View>
  );
}

export default AlarmsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: "relative",
    backgroundColor: Colors.background,
  },
  groupsEdit: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
  groupsList: {
    flexGrow: 0,
  },
  groupItem: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: Colors.primary200,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
  },
  groupText: {
    color: Colors.primaryText,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  groupsContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 5,
    margin: screenWidth * 0.03,
  },
});
