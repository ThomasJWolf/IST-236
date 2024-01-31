import { StyleSheet, Text, View, Pressable } from "react-native";

function Item(props) {
  function deleteItemHandler() {
    props.onDeleateItem;
  }
  return (
    <View>
      <Pressable
        // Adds the android ripple
        android_ripple={{ color: "#210644" }}
        // Style the button when pressed
        style={({ pressed }) => pressed && styles.pressedButton}
        onPress={props.onDeleateItem.bind(this, props.id)}
      >
        <Text>{props.text}</Text>
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
  },
  pressedItem: {
    opacity: 0.5,
  },
  itemText: {
    color: "#ffffff",
    padding: 8,
  },
});
