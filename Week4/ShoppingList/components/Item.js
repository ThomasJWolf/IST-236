import { StyleSheet, Text, View, Pressable } from "react-native";

function Item(props) {

  return (
    <View style={styles.item}>
      <Pressable
        // Adds the android ripple
        android_ripple={{ color: "#210644" }}
        // Style the button when pressed
        style={({ pressed }) => pressed && styles.pressedButton}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.itemText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default Item;

const styles = StyleSheet.create({
  item: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e08cc",
    width: 300
  },
  pressedItem: {
    opacity: 0.5,
  },
  itemText: {
    color: "#ffffff",
    padding: 8,
  },
});
