import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Modal,
  TextInput,
  Image,
  Pressable,
  FlatList,
  Alert,
} from "react-native";
import Item from "./components/Item";
import ItemInputModal from "./modals/ItemInputModal";

export default function App() {
  // Create state management variables
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [shoppingItems, setShoppingItems] = useState([]);
  const [currentID, setCurrentID] = useState(0);

  // Create Modal Screen Handler Functions
  function startAddItemHandler() {
    setModalIsVisible(true);
  }

  function endAddItemHandler() {
    setModalIsVisible(false);
  }

  function addItemHandler(enteredText) {
    setShoppingItems((currentShoppingItems) => [
      ...currentShoppingItems,
      { text: enteredText, id: currentID },
    ]);
    setCurrentID(currentID + 1);
    endAddItemHandler();
  }

  function deleteItemHandler(id) {
    Alert.alert("Delete Item", "Are you sure you want to delete?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Confirm",
        style: "default",
        onPress: () => {
          setShoppingItems((currentShoppingItems) => {
            return currentShoppingItems.filter((item) => item.id !== id);
          });
        },
      },
    ]);
  }

  return (
    <>
      {/* Set status bar styling */}
      <StatusBar style="light" />

      {/* Set SafeAreaView Screen Container */}
      <SafeAreaView style={styles.appContainer}>
        {/* Set Title Container */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Shopping List</Text>
        </View>

        {/* Sets Add Item Button Container */}
        <View style={styles.buttonContainer}>
          <Pressable
            // Add the android ripple
            android_ripple={{ color: "#b189f0" }}
            // Style the button when pressed
            style={({ pressed }) => pressed && styles.pressedButton}
            // When pressed, open modal screen
            onPress={startAddItemHandler}
          >
            <View style={styles.addButton}>
              <Text style={styles.addButtonText}>Add New Item</Text>
            </View>
          </Pressable>
        </View>

        {/* Set Items to Get Title Container */}
        <View style={styles.subititleContainer}>
          <Text style={styles.subititle}>Items To Get:</Text>
        </View>

        {/* Set List of Items Container */}
        <View style={styles.listContainer}>
          <FlatList
            data={shoppingItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(itemData) => (
              <Item
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteItemHandler}
              />
            )}
          />
        </View>

        <ItemInputModal
          onAddItem={addItemHandler}
          onCancel={endAddItemHandler}
          visible={modalIsVisible}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#1e085a",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  titleContainer: {
    flex: 1,
    margin: 10,
    paddingHorizontal: 30,
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  title: {
    fontSize: 40,
    color: "#5e08cc",
  },

  buttonContainer: {
    flex: 1,
    justifyContent: "center",
  },
  addButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },

  addButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5e08cc",
  },

  pressedButton: {
    opacity: 0.8,
  },

  subititleContainer: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 30,
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  subititle: {
    fontSize: 30,
    color: "#5e08cc",
  },

  listContainer: {
    flex: 7,
    width: "90%",
    alignItems: "center",
    marginTop: 10,
  },
  listText: {
    fontSize: 20,
    color: "black",
  },
});
