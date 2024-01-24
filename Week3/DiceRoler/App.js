import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Modal, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View, } from 'react-native';

export default function App() {
  // Set max and min dice value
  const maxVal = 6;
  const minVal = 1;
  // Create state management variables
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(2);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [userGuess, setUserGuess] = useState("");
  const [userWager, setUserWager] = useState("");
  const [diceSum, setDiceSum] = useState(0);

  function startDiceRollHandler() {
    setModalIsVisible(true);
    setUserGuess("");
    setUserWager("");
  }

  function endDiceRollHandler() {
    setModalIsVisible(false);
  }

  function onDiceRoll() {
    const rndNum1 = Math.floor(Math.random * (maxVal - minVal)) + minVal;
    const rndNum2 = Math.floor(Math.random * (maxVal - minVal)) + minVal;
    setDice1(rndNum1);
    setDice2(rndNum2);

    let result = rndNum1 + rndNum2;
    setDiceSum(result);

    endDiceRollHandler;
  }

  // Dynamically determine what type of result text to display
  let resultText = (
    <Text style={styles.resultText}>Roll the Dice and Make a Wager</Text>
  )

  const userGuessNum = parseInt(userGuess);
  const diceSumNum = parseInt(diceSum);
  if (userGuess !== "" && userGuessNUm === diceSumNum) {
    resultText = <Text style={styles.resultText}>You Won ${(userWager * 5).toFixed(2)}</Text>
  }

  if (userGuess !== "" && userGuessNUm !== diceSumNum) {
    resultText = <Text style={styles.resultText}>You lost ${(userWager)}</Text>
  }

  return (
    <>
      <StatusBar style='auto' />
      <SafeAreaView style={styles.container}>
        <View style={styles.titleBackground}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Dice Roller</Text>
          </View>
        </View>
        <View style={styles.rollButtonContainer}>
          <Pressable
            android_ripple={{ color: "#ff6f6f" }}
            style={({ pressed }) => pressed && styles.pressedButton}
          >
            <View style={styles.rollButton}>
              <Text style={styles.rollButtonText}>Roll Dice</Text>
            </View>
          </Pressable>
          {/* <Button title='Roll Dice' style={styles.rollButton} /> */}
        </View>
        <View style={styles.diceContainer}>
          <View style={styles.dice}>
            <Text style={styles.diceNumber}>{dice1}</Text>
          </View>
          <View style={styles.dice}>
            <Text style={styles.diceNumber}>{dice2}</Text>
          </View>
        </View>
        <View style={styles.resultsContainer}>
          <Text style={styles.resultText}>The resulting dice roll is{diceSum}</Text>
        </View>
        <View style={styles.resultsContainer}>
          <Text style={styles.resultText}>You Won/Lost ______</Text>
        </View>
        <Modal visible={modalIsVisible}>
          <SafeAreaView style={styles.modalRoot}>
            <Text style={styles.inputLabel}>"Guess the Roll Value"</Text>
            <TextInput
              style={styles.textInput}
              // Placeholder for when it's empty
              placeholder="Enter A Guess Between 2 and 12"
              // Set the keyboard type to number pad for only integers
              keybordType="number-pad"
              // When the text is changed, update the userGuess
              onChangeText={setUserGuess}
              // Tie the entered value to the userGuess so when it is reset to blank the input field will also reset
              value={userWager}
            />
            <Text style={styles.inputLabel}>What's Your Wager?</Text>
            <TextInput
              style={styles.textInput}
              // Placeholder for when it's empty
              placeholder="Enter A Guess Between 2 and 12"
              // Set the keyboard type to number pad for only integers
              keybordType="number-pad"
              // When the text is changed, update the userGuess
              onChangeText={setUserGuess}
              // Tie the entered value to the userGuess so when it is reset to blank the input field will also reset
              value={userGuess}
            />
            <View>
              <View>
                <Button title="Roll Dice"/>
              </View>
              <View>
              <Button title="Cancel" color="black"/>
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#510086',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  titleBackground: {
    backgroundColor: "white",
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 7
  },
  title: {
    fontSize: 60,
    fontWeight: "bold"
  },
  rollButtonContainer: {
    flex: 1,
  },
  pressedButton: {
    opacity: 0.5
  },
  rollButton: {
    backgroundColor: "white",
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 7
  },
  rollButtonText: {
    backgroundColor: "white",
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 7
  },
  diceContainer: {
    flex: 3,
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "center",
    alignItems: "center",
    width: "80%"
  },
  dice: {
    backgroundColor: "white",
    borderWidth: 3,
    margin: 20,
    width: 100,
    height: 100,
    justifyContent: "center"
  },
  diceNumber: {
    fontSize: 40,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center"
  },
  resultsContainer: {
    flex: 1
  },
  resultText: {
    fontSize: 25
  },
  modalRoot: {
flex:1,
backgroundColor: "green",
alignItems: "center"
  },
  inputLabel: {
    fontSize: 25,
    color: "white",
    marginTop: 20
  },
  textInput: {
    backgroundColor: "",
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    color: "",
    marginBottom: 30
  },
  modalButtonContainer:{

  },

});
