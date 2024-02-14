import { View, StyleSheet, Text, Image, Linking, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Title from "../components/Title.js";
import Colors from "../constants/colors.js";

function NotesScreen(props) {
  // Set Safe Area Screen Bounderies
  const insets = useSafeAreaInsets();


  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Title>Current Thoughts</Title>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <NavButton onPress={props.onAdd}>Add New Note</NavButton>
        </View>

        <View style={styles.button}>
          <NavButton onPress={props.onHome}>Return Home</NavButton>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={currentNotes}
          keyExtractor={(item, index) => {
            return item.id
          }}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          renderItem={(itemData) => {
            return (
              <EventItem
                id={itemData.item.id}
                title={itemData.item.title}
                // onView={}
                onDelete={props.onDelete.bind(this, itemData.item.id)}
              />
            );
          }}
        />
      </View>
      <NoteView>
        visable={modalIsVisible}
      </NoteView>
    </View>
  );
}

export default NotesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "90%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    marginVertical: 20,
  },
item:{
  flex: 1
},
  buttonContainer: {
    flex: 2,
    justifyContent: "center",
    alignContent: "center",
  },
});
