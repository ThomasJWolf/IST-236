import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  // Set responses
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];

  // Create state management variables
  const [responce, setResponce] = useState("");
  const [userQuestion, setUserQuestion] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);

  // Opens the modal and calculates the responce for the question
  function startEightBall() {
    setModalIsVisible(true);
    const rndNum1 = Math.floor(Math.random() * 20);
    setResponce(responses[rndNum1]);
  }

  // Closes the modal
  function endEightBall() {
    setModalIsVisible(false);
  }


  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.titleContainer}>
          <View style={styles.titleBackground}>
            <Text style={styles.title}>Magic Eight Ball</Text>
          </View>
        </View>

        <View>
          <TextInput
            style={styles.textInput}
            // Placeholder for when it's empty
            placeholder="Enter A Question"
            // When the text is changed, update the userQuestion
            onChangeText={setUserQuestion}
            // Tie the entered value to the userQuestion so when it is reset to blank the input field will also reset
            value={userQuestion}
          />
        </View>

        <View style={styles.responceButtonContainer}>
          <Pressable
            // Adds the android ripple
            android_ripple={{ color: "#d9ffa7" }}
            // Style the button when pressed
            style={({ pressed }) => pressed && styles.pressedButton}
            // When pressed, open modal screen
            onPress={startEightBall}
          >
            <View style={styles.responceButton}>
              <Text style={styles.responceButtonText}>Ask Question</Text>
            </View>
          </Pressable>
          {/* <Button title='Roll Dice' style={styles.responceButton} /> */}
        </View>

        <Modal visible={modalIsVisible} animationType="fade">
          <SafeAreaView style={styles.modalRoot}>
            {/* Put the questions and responces on the modal page */}
            <View style={styles.modalTextContainer}>
              <Text style={styles.modalText}>Question: {userQuestion}</Text>
            </View>
            <View style={styles.modalTextContainer}>
              <Text style={styles.modalText}>Answer: {responce}</Text>
            </View>
            {/* Adds the close button */}
            <View style={styles.modalButtonContainer}>
              <View style={styles.modalButton}>
                <Button title="Close" color="black" onPress={endEightBall} />
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#22c0ff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  titleBackground: {
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 25,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
  },

  pressedButton: {
    opacity: 0.8,
  },

  inputLabel: {
    fontSize: 25,
    color: "white",
    marginTop: 20,
  },
  textInput: {
    backgroundColor: "#d9ffa7",
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    color: "#0b3f53",
    marginBottom: 30,
  },
  responceButtonContainer: {
    flex: 1,
  },
  pressedButton: {
    opacity: 0.8,
  },
  responceButton: {
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 15,
  },
  responceButtonText: {
    fontSize: 25,
  },

  modalTextContainer: {
    flex: 1,
  },
  modalText: {
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 15,
    fontSize: 25
  },
  modalRoot: {
    flex: 1,
    backgroundColor: "#22c0ff",
    alignItems: "center",
  },
  modalButtonContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 16,
  },
  modalButton: {
    width: "30%",
    marginHorizontal: 8,
  },
});
