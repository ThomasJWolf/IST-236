import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import { useFonts } from "expo-font";
import Colors from "./constants/colors.js";
import AddRecipeScreen from "./screens/AddRecipeScreen.js";
import RecipesScreen from "./screens/RecipesScreen.js";

export default function App() {
  //Set up our custom fonts
  const [fontsLoaded] = useFonts({
    ItaliannoFont: require("./assets/fonts/Italianno-Regular.ttf"),
    ItalianaFont: require("./assets/fonts/Italiana-Regular.ttf"),
  });

  // Set state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentID, setCurrentID] = useState(4);
  const [currentRecipes, setCurrentRecipes] = useState([
    {
      "id": 1,
      "title": "Simple Spaghetti",
      "text": "1. Boil spaghetti in salted water until al dente.\n2. Sauté minced garlic in olive oil until golden.\n3. Toss spaghetti with garlic oil, chili flakes, and parsley.\n4. Season with salt and serve with grated Parmesan."
    },
    {
      "id": 2,
      "title": "Quick Tomato Basil Soup",
      "text": "1. Sauté chopped onions in olive oil until translucent.\n2. Add crushed tomatoes, vegetable broth, and season with salt and pepper.\n3. Simmer for 15 minutes.\n4. Stir in fresh basil leaves and blend until smooth.\n5. Serve hot with a dollop of cream."
    },
    {
      "id": 3,
      "title": "Easy Chicken Stir-Fry",
      "text": "1. Marinate chicken pieces in soy sauce and garlic.\n2. Stir-fry chicken in a hot pan until cooked through.\n3. Remove chicken and stir-fry bell peppers, broccoli, and onion.\n4. Return chicken to the pan, add a splash of soy sauce, and heat through.\n5. Serve with rice or noodles."
    }
    
  ]);

  // Sets the current screens
  function HomeScreenHandler() {
    setCurrentScreen("home");
  }

  function RecipesScreenHandler() {
    setCurrentScreen("recipes");
  }

  function AddRecipeScreenHandler() {
    setCurrentScreen("add");
  }

  // Adds the new recipe to the list
  function AddRecipeHandler(enteredRecipeTitle, enteredRecipeText) {
    setCurrentRecipes((currentRecipes) => {
      return [
        ...currentRecipes,
        { id: currentID, title: enteredRecipeTitle, text: enteredRecipeText },
      ];
    });
    setCurrentID(currentID + 1);
    RecipesScreenHandler();
  }

  // Deletes the chosen recipe
  function deleteRecipeHandler(id) {
    setCurrentRecipes((currentRecipes) => {
      return currentRecipes.filter((item) => item.id !== id);
    });
  }

  // Determine which screen to be on
  let screen = <HomeScreen onNext={RecipesScreenHandler} />;

  if (currentScreen === "add") {
    screen = (
      <AddRecipeScreen onAdd={AddRecipeHandler} onCancel={RecipesScreenHandler} />
    );
  }

  if (currentScreen === "recipes") {
    screen = (
      <RecipesScreen
        onHome={HomeScreenHandler}
        onAdd={AddRecipeScreenHandler}
        onDelete={deleteRecipeHandler}
        currentRecipes={currentRecipes}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: "center",
    justifyContent: "center",
  },
});
