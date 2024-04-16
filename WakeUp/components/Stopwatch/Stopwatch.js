import { View, StyleSheet, FlatList } from "react-native";
import StopwatchItem from "./StopwatchItem";
import Color from "../../constants/colors";

function Stopwatch(props) {
  function renderStopwatchItem(itemData) {
    const stopwatchItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      time: itemData.item.time,
      laps: itemData.item.laps,
      stopwatchIndex: itemData.index,
    };
    return <StopwatchItem {...stopwatchItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={props.items}
        keyExtractor={(item) => item.id}
        renderItem={renderStopwatchItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default Stopwatch;

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
