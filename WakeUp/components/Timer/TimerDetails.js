import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import TimerItem from "./TimerItem";
import { useSelector } from "react-redux";
import Color from "../../constants/colors";
import TimerDetailsItem from "../../screens/TimerDetailsScreen";

const Timer = ({ items, containerStyle }) => {
  // Access the timers from Redux store
  const [timers, setTimers] = useState(
    items.map((timer) => ({
      ...timer,
    }))
  );

  const handleToggle = (id) => () => {
    const updatedTimers = timers.map((timer) =>
      timer.id === id ? { ...timer, active: !timer.active } : timer
    );
    setTimers(updatedTimers);
  };

  const renderTimerDetailsItem = ({ item }) => {
    return <TimerDetailsItem {...item} onToggle={handleToggle(item.id)} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={timers}
        keyExtractor={(item) => item.id}
        renderItem={renderTimerDetailsItem}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <View style={{ height: 100 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default Timer;
