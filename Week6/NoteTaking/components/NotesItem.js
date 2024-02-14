import { View, StyleSheet, Text, Pressable, Button } from "react-native";
import Colors from "../constants/colors.js";

function NotesItem(props) {
  return (
      <View style={styles.NotesItem}>
        <View style={styles.itemTitleContainer}>
          <Text style={styles.itemTitle}>{props.children}</Text>
        </View>
        <View style={styles.itemButtonContainer}>
            <View style={styles.button}>
                <Button title="View" onPress={props.onView}/>
            </View>
            <View style={styles.button}>
                <Button title="Delete" onPress={props.onDelete}/>
            </View>
        </View>
      </View>
  );
}

export default NotesItem;

const styles = StyleSheet.create({
item: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
    borderRadius: 6,
    borderColor: Colors.accent500,
},
itemTitleContainer: {
    justifyContent: "center",
},
itemTitle: {
    fontFamily: "paperNoteBold",
    fontSize: 20,
    color: Colors.primary300,
    padding: 8,
},
itemButtonContainer: {
    flexDirection: "row",
},
button: {
    marginVertical: 5,
    marginHorizontal: 3,
}
});
