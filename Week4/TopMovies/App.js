import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";

// Imports the MovieItem component
import MovieItem from "./components/MovieItem";

export default function App() {
  // Creates the movieItems  list
  const [movieItems, setMovieFilms] = useState([
    {
      name: "Finding Nemo",
      image: require("./assets/images/findingnemo.jpg"),
      ranking: "9.1",
    },
    {
      name: "Up",
      image: require("./assets/images/up.jpg"),
      ranking: "9.2",
    },
    {
      name: "How to Train Your Dragon",
      image: require("./assets/images/howtotrainyourdragon.jpg"),
      ranking: "9.3",
    },
    {
      name: "Jurassic Park",
      image: require("./assets/images/jurassicpark.jpg"),
      ranking: "9.4",
    },
    {
      name: "Avengers: Infinity War",
      image: require("./assets/images/avengersinfinitywar.jpg"),
      ranking: "9.5",
    },
    {
      name: "WALL·E",
      image: require("./assets/images/walle.jpg"),
      ranking: "9.6",
    },
    {
      name: "Forrest Gump",
      image: require("./assets/images/forrestgump.jpg"),
      ranking: "9.7",
    },
    {
      name: "Avengers: Endgame",
      image: require("./assets/images/avengersendgame.jpg"),
      ranking: "9.8",
    },
    {
      name: "Back to the Future",
      image: require("./assets/images/backtothefuture.jpg"),
      ranking: "9.9",
    },
    {
      name: "Spider-Man:\nAcross the Spider-Verse",
      image: require("./assets/images/spidermanacrossthespiderverse.jpg"),
      ranking: "10",
    },
  ]);

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Top 10 Movies</Text>
        </View>

        <View style={styles.listContainer}>
          {/* Creates a flat list */}
          <FlatList
            // Sends the data to the MovieItem.js file to be formated and send back
            data={movieItems}
            renderItem={(itemData) => (
              <MovieItem
                name={itemData.item.name}
                image={itemData.item.image}
                ranking={itemData.item.ranking}
              />
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

// All of the styles for the main part of the app

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#00012e",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 5,
    backgroundColor: "#161616ff",
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "white",
    width: 300,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#ff7b00",
  },
  listContainer: {
    flex: 8,
    width: "80%",
  },
  lineContainer: {
    borderWidth: 5,
  },
});
