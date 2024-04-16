import { View, StyleSheet, FlatList } from "react-native";
import AlarmItem from "./AlarmItem";
import Color from "../../constants/colors";

function Alarm(props) {
  function renderAlarmItem(itemData) {
    const alarmItemProps = {
      id: itemData.item.id,
      time: itemData.item.time,
      name: itemData.item.name,
      active: itemData.item.active,
      days: itemData.item.days,
      alarmIndex: itemData.index,
    };
    return <AlarmItem {...alarmItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={props.items}
        keyExtractor={(item) => item.id}
        renderItem={renderAlarmItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default Alarm;

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
