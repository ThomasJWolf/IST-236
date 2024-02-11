import { Text, View, StyleSheet, Image } from "react-native";
import Colors from "../constants/colors";

function MenuItem(props) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.name}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={props.image} />
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{props.price}</Text>
      </View>
    </View>
  );
}

export default MenuItem;

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 20,
  },
  titleContainer: {
    backgroundColor: "white",
    borderWidth: 3,
    borderRadius: 5,
    borderColor: Colors.primary500,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "speedee-bold",
    color: Colors.primary800,
  },
  imageContainer: {
    alignItems: "center",
    backgroundColor: Colors.primary500,
    borderColor: Colors.primary500,
    borderWidth: 3,
    borderRadius: 5,
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  priceContainer: {
    backgroundColor: "white",
    borderWidth: 3,
    borderRadius: 5,
    borderColor: Colors.primary500,
  },
  price: {
    fontSize: 40,
    textAlign: "center",
    fontFamily: "speedee-bold",
    color: Colors.primary800,
  },
});
