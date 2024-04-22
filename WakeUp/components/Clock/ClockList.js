import React, { useState } from "react";
import { View, StyleSheet, FlatList, TextInput } from "react-native";
import ClockListItem from "./ClockListItem";
import Color from "../../constants/colors";
import { connect, useSelector } from "react-redux";
import { toggleClock } from "../../redux/actions";


const ClockList = ({ clocks, toggleClock, containerStyle }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const clocksData = useSelector((state) => state.clocks.clocks);

      const handleToggle = (id) => {
        toggleClock(id);
      };

    // Function to ensure data is an array and filter it
    const getFilteredClocks = () => {
      let filteredClocks = [];
      let clocksArray = Array.isArray(clocksData)
        ? clocksData
        : Object.values(clocksData);

      for (let clock of clocksArray) {
        const clockName = clock.name ?? ""; // Use empty string if undefined
        const clockTimezone = clock.timezone ?? ""; // Use empty string if undefined
        if (
          clockName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          clockTimezone.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          filteredClocks.push(clock);
        }
      }
      return filteredClocks;
    };

    const filteredClocks = getFilteredClocks();

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search clocks"
      />
      <FlatList
        data={filteredClocks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ClockListItem
            id={item.id}
            name={item.name}
            timezone={item.timezone}
            active={item.active}
            onToggle={() => handleToggle(item.id)}
          />
        )}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  clocks: state.clocks,
});

const mapDispatchToProps = {
  toggleClock,
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

export default connect(mapStateToProps, mapDispatchToProps)(ClockList);
