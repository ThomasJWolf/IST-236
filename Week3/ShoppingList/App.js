import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Modal,
  TextInput,
  Images,
  Pressable,
} from "react-native";

export default function App() {
  // Create state management variables
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [shoppingItems, setShoppingItems] = useState("");
  const [enteredItemsText, setEnteredItemsText] = useState(0);

  function startAddItemHandler() {
    setModalIsVisible(true);
  }

  function endAddItemHandler() {
    setModalIsVisible(false);
  }

  function addItemHandler() {
    console.log(enteredItemsText);
    if (shoppingItems === "") {
      setShoppingItems(enteredItemsText);
    } else {
      setShoppingItems(shoppingItems + "\n" + enteredItemsText);
    }
    setEnteredItemsText("");
    endAddItemHandler();
  }

  return (
    <View style={styles.container}>
      {/* Set status bar styling */}
      <StatusBar style="light" />
      {/* Set SafeAreaView Screen Container */}
      <SafeAreaView>
        {/* Set Title Container */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Shopping List</Text>
        </View>

        {/* Sets Add Item Button Container */}
        <View style={styles.buttonContainer}>
          <Text style={styles.text}></Text>
        </View>

        {/* Set Items to Get Title Container */}
        <View style={styles.subititleContainer}>
          <Text style={styles.subititle}></Text>
        </View>

        {/* Set List of Items Container */}
        <View style={styles.listContainer}>
          <Text style={styles.text}>List of Items Goes Here</Text>
        </View>
        <Modal visible={modalIsVisible} animationType="slide">
          <SafeAreaView style={styles.appContainer}>
            <View style={styles.inputContainer}>
              <Image
                style={styles.image}
                source={require("./assets/images/ShoppingCart.png")}
              />

              <TextInput
              style={styles.textInput}
              placeholder="Enter Item Here"
              onChangeText={itemInputHandler}
              value={enteredItemsText}

              />

              <View style={styles.buttonContainer}>
              <View style={styles.button}>
                  <Button
                  title="Add Item"
                  color= ""
                  onPress={addItemHandler}
                  />
                </View>
                <View style={styles.button}>
                <Button
                  title="Cancle"
                  color= ""
                  onPress={endAddItemHandler}
                  />
                </View>
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e085a",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  titleContainer: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 10,
    justifyContent: "center",
    backgroundColor: "white",
    borderBottonRightRadius: 20,
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

  subititleContainer: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 30,
    justifyContent: "center",
    backgroundColor: "white",
    borderBottonRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  subititle: {
    fontSize: 30,
    color: ""
  },

  listContainer: {
    flex: 7,
    width: "90%",
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center"
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    width: "90%",
    backgroundColor: "#d4e0ff"
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: "",
    backgroundColor: "",
    color: "",
    borderRadius: 6,
    width: "100%",
  },

});
