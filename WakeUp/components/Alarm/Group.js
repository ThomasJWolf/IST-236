import { View, StyleSheet, FlatList } from "react-native";
import GroupItem from "./GroupItem";
import Color from "../../constants/colors";

function Group(props) {
  function renderGroupItem(itemData) {
    const groupItemProps = {
      id: itemData.item.id,
      name: itemData.item.name,
      alarmList: itemData.item.alarmList,
      groupIndex: itemData.index,
      onGroupPress: props.onGroupPress, // Pass the function to GroupItem
    };
    return <GroupItem {...groupItemProps} />;
  }

  return (
    <View style={styles.groupContainer}>
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
