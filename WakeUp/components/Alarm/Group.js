import { View, StyleSheet, FlatList } from "react-native";
import GroupItem from "./GroupItem";
import Color from "../../constants/colors";

function Group(props) {
  function renderGroupItem(itemData) {
    const groupItemProps = {
      id: itemData.item.id,
      name: itemData.item.name,
      alarms: itemData.item.alarms,
      groupIndex: itemData.index,
    };
    return <GroupItem {...groupItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={props.items}
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
    flex: 1,
    padding: 16,
    backgroundColor: Color.background,
  },
  groupsContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 5,
    flexGrow: 0,
  },
});
