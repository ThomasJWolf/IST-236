import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AlarmItem from "./AlarmItem";
import { useSelector } from "react-redux";
import Color from "../../constants/colors";

const Alarm = ({ items, containerStyle, isEditing, groupAlarms,forceUpdate }) => {
  // Access the alarms from Redux store
  const [alarms, setAlarms] = useState(
    items.map((alarm) => ({
      ...alarm,
    }))
  );

  const handleToggle = (id) => () => {
    const updatedAlarms = alarms.map((alarm) =>
      alarm.id === id ? { ...alarm, active: !alarm.active } : alarm
    );
    setAlarms(updatedAlarms);
  };

const renderAlarmItem = ({ item }) => {
  return (
    <AlarmItem
      {...item}
      isEditing={isEditing}
      groupAlarms={groupAlarms}
      forceUpdate={forceUpdate}
      onToggle={handleToggle(item.id)}
    />
  );
};


  return (
    <View style={styles.container}>
      <FlatList
        data={alarms}
        keyExtractor={(item) => item.id}
        renderItem={renderAlarmItem}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <View style={{ height: 100 }} />}
        
      />
    </View>
  );
};

export default Alarm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Color.background,
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
