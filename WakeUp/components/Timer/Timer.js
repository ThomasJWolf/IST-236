import { View, StyleSheet, FlatList } from "react-native";
import TimerItem from "./TimerItem";
import Color from "../../constants/colors";

function Timer(props) {
  function renderTimerItem(itemData) {
    const timerItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      time: itemData.item.time,
      timerIndex: itemData.index,
    };
    return <TimerItem {...timerItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={props.items}
        keyExtractor={(item) => item.id}
        renderItem={renderTimerItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default Timer;

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
