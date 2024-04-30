import { View, StyleSheet, FlatList } from "react-native";
import GroupItem from "./GroupItem";
import React, { useState } from "react";
import Color from "../../constants/colors";

function Group({ items, isSelected, forceUpdate, onGroupPress }) {
  // Now items and isSelected are correctly recognized as props

  const [groups, setGroups] = useState(
    items.map((group) => ({
      ...group,
    }))
  );

  const handleToggle = (id) => () => {
    const updatedGroups = groups.map((group) =>
      group.id === id ? { ...group, active: !group.active } : group
    );
    setGroups(updatedGroups);
  };

  const renderGroupItem = ({ item }) => {
    return (
      <GroupItem
        {...item}
        isSelected={isSelected}
        forceUpdate={forceUpdate}
        onGroupPress={onGroupPress}
        onToggle={handleToggle(item.id)}
      />
    );
  };

  return (
    <View style={styles.groupContainer}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={renderGroupItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.groupsList}
      />
    </View>
  );
}

export default Group;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Color.background,
  },
  backgroundImage: {
    opacity: 0.1,
  },
  flatlist: {

  },
  groupContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    
  },
  groupsList: {
    flexGrow: 0,
  },
});
