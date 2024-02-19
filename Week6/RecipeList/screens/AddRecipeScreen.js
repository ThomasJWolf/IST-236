import {
  View,
  StyleSheet,
  Text,
  Image,
  Linking,
  ScrollView,
  TextInput,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton.js";
import Title from "../components/Title.js";
import Colors from "../constants/colors.js";
import { useState } from "react";

function AddRecipeScreen(props) {
  // Set Safe Area Screen Bounderies
  const insets = useSafeAreaInsets();

  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeText, setRecipeText] = useState("");

  function addRecipeHandler() {
    props.onAdd(recipeTitle, recipeText);
    props.onCancel();
  }

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
      {/* Adds the title */}
      <View style={styles.titleContainer}>
        <Title>Add New Recipes</Title>
      </View>

      {/* Adds a scrollview section where the user can enter the title and text of the new recipe */}
      <View style={styles.scrollContainer}>
        <ScrollView>
          <View style={styles.recipeTitleContainer}>
            <TextInput
              placeholder="Enter Recipe Title Here"
              style={styles.recipeTitle}
              onChangeText={setRecipeTitle}
            />
          </View>

          <View style={styles.recipeTextContainer}>
            <TextInput
              placeholder="Enter Recipe Text Here"
              style={styles.recipeText}
              onChangeText={setRecipeText}
              textAlignVertical="top"
              multiline={true}
              numberOfLines={20}
            />
          </View>
        </ScrollView>
      </View>

      {/* Adds buttons to submit the recipe or go back */}
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <NavButton onPress={addRecipeHandler}>Submit</NavButton>
        </View>

        <View style={styles.button}>
          <NavButton onPress={props.onCancel}>Cancel</NavButton>
        </View>
      </View>
    </View>
  );
}

export default AddRecipeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    marginVertical: 20,
    marginBottom: 50,
  },
  scrollContainer: {
    flex: 5,
  },
  recipeTitleContainer: {
    borderWidth: 3,
    backgroundColor: Colors.primary300,
  },
  recipeTitle: {
    color: Colors.accent800,
    fontWeight: "bold",
    fontSize: 30,
  },
  recipeTextContainer: {
    marginVertical: 5,
    borderWidth: 3,
    backgroundColor: Colors.primary300,
    alignItems: "flex-start",
  },
  recipeText: {
    color: Colors.primary800,
  },
  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
});
