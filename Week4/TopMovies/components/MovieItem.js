import { StyleSheet, Text, View, Image } from "react-native";

function MovieItem(props) {
  return (
    // Creates the formating for all the items
    <View style={styles.itemContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.itemTitle}>{props.name}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.itemImage} source={props.image} />
      </View>
      <View style={styles.rankingContainer}>
        <Text style={styles.itemranking}>{props.ranking}</Text>
      </View>
    </View>
  );
}

// Sends the data back to app.js
export default MovieItem;

// All of the styles for the movie items

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 20,
  },
  titleContainer: {
    backgroundColor: "#161616ff",
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "white",
  },
  itemTitle: {
    fontSize: 30,
    textAlign: "center",
    color: "#ff7b00",
  },
  imageContainer: {
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 5,
  },
  itemImage: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
  },
  rankingContainer: {
    backgroundColor: "#161616ff",
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "white",
    marginBottom: 20,
  },
  itemranking: {
    fontSize: 30,
    textAlign: "center",
    color: "#ff7b00",
  },
});
