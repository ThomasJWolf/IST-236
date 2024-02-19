import { View, StyleSheet, Text, Image, Linking, FlatList } from "react-native";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton.js";
import Title from "../components/Title.js";
import Colors from "../constants/colors.js";
import RecipeView from "../modals/RecipeView.js";
import RecipesItem from "../components/RecipesItem.js";

function RecipesScreen(props) {
  // Set Safe Area Screen Bounderies
  const insets = useSafeAreaInsets();

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalRecipeTitle, setModalRecipeTitle] = useState("");
  const [modalRecipeText, setModalRecipeText] = useState("");

  function recipeViewHandler(title, text) {
    setModalRecipeTitle(title);
    setModalRecipeText(text);
    setModalIsVisible(true);
  }

  function closeRecipeViewHandler() {
    setModalIsVisible(false);
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
        <Title>Current Recipes</Title>
      </View>

      {/* Adds the flatlist to display each items title and a button to view or delete them */}
      <View style={styles.itemContainer}>
        <FlatList
          data={props.currentRecipes}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          renderItem={(itemData) => {
            return (
              <RecipesItem
                id={itemData.item.id}
                title={itemData.item.title}
                onView={recipeViewHandler.bind(
                  this,
                  itemData.item.title,
                  itemData.item.text
                )}
                onDelete={props.onDelete.bind(this, itemData.item.id)}
              />
            );
          }}
        />
      </View>

      {/* Calls the RecipeView modal to display the title and text of the selected recipe */}
      <RecipeView
        visible={modalIsVisible}
        title={modalRecipeTitle}
        text={modalRecipeText}
        onClose={closeRecipeViewHandler}
      />

      {/* Adds the nav buttons to go to the next page and back */}
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <NavButton onPress={props.onAdd}>Add New Recipe</NavButton>
        </View>

        <View style={styles.button}>
          <NavButton onPress={props.onHome}>Return Home</NavButton>
        </View>
      </View>
    </View>
  );
}

export default RecipesScreen;

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
  itemContainer: {
    flex: 6,
  },
  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  button: {
    marginHorizontal: 10,
  },
});
