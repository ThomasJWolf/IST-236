import { View, StyleSheet, FlatList } from "react-native";
import ClockItem from "./ClockItem";
import Color from "../../constants/colors";

function Clock(props) {
  function renderClockItem(itemData) {
    const clockItemProps = {
      id: itemData.item.id,
      timezone: itemData.item.timezone,
      time: itemData.item.time,
      date: itemData.item.date,
      clockIndex: itemData.index,
    };
    return <ClockItem {...clockItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={props.items}
        keyExtractor={(item) => item.id}
        renderItem={renderClockItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default Clock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Color.background
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
