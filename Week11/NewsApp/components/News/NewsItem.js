import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/colors";

function NewsItem(props) {
  const navigation = useNavigation();

  function selectedNewsHandler() {
    navigation.navigate("NewsDetails", {
      newsId: props.id,
    });
  }

  return (
    <View style={styles.itemContainer}>
      <Pressable onPress={selectedNewsHandler}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.headline}>{props.headline}</Text>
          <Text style={styles.date}>{props.date}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default NewsItem;

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 10,
    borderRadius: 7,
    backgroundColor: "black",
    borderColor: Colors.accent200,
    borderWidth: 2,
  },
  button: {
    flex: 1,
  },
  imageContainer: {
    height: 300,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
  },
  headline: {
    fontSize: 25,
    fontFamily: "SandeMore",
    color: Colors.accent500,
  },
  date: {
    fontSize: 15,
    fontFamily: "SandeMore",
    color: Colors.accent800,
  },
});
