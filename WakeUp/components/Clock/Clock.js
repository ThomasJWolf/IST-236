import React, { useState } from "react";
import { View, StyleSheet, FlatList, TextInput } from "react-native";
import ClockItem from "./ClockItem";
import Color from "../../constants/colors";

const Clock = ({ items, containerStyle }) => {
  const [clocks, setClocks] = useState(
    items.map((clock) => ({
      ...clock,
      active: false, // Ensure all clocks are initially not active
    }))
  );

  const handleToggle = (id) => () => {
    const updatedClocks = clocks.map((clock) =>
      clock.id === id ? { ...clock, active: !clock.active } : clock
    );
    setClocks(updatedClocks);
  };

  const renderClockItem = ({ item }) => {
    return <ClockItem {...item} onToggle={handleToggle(item.id)} />;
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList
        data={clocks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderClockItem}
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
    backgroundColor: Color.background,
  },
  searchInput: {
    fontSize: 18,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
  },
  backgroundImage: {
    opacity: 0.1,
  },
});

export default Clock;
