import { View, Text, StyleSheet, Image } from "react-native";
import { useState, useLayoutEffect } from "react";
import { NEWS_ITEMS } from "../data/dummy_data";
import BookmarkButton from "../components/BookmarkButton";
import Colors from "../constants/colors";
import { BookmarksContext } from "../store/context/bookmarks-context";

function NewsDetailsScreen(props) {
  const BookmarkedNewsCtx = useContext(BookmarksContext);

    const newsIsBookmarked = BookmarkedNewsCtx.ids.includes(newsId);


  const newsId = props.route.params.newsId;
  const selectedNews = NEWS_ITEMS.find((news) => news.id === newsId);

  const [pressed, setPressed] = useState(false);

    function changeBookmarkStatusHandler() {
      if (newsIsBookmarked) {
        BookmarkedNewsCtx.removeFavorite(newsId);
      } else {
        BookmarkedNewsCtx.addFavorite(newsId);
      }
    }


  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: selectedNews.headline, // Display the headline as the title
      headerRight: () => (
        <BookmarkButton pressed={newsIsBookmarked} onPress={changeBookmarkStatusHandler} />
      ),
    });
  }, [props.navigation, pressed, changeBookmarkStatusHandler]);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: selectedNews.imageUrl }} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.headline}>{selectedNews.headline}</Text>
        <Text style={styles.date}>Date: {selectedNews.date}</Text>
        <Text style={styles.author}>Author: {selectedNews.author}</Text>
        <Text style={styles.agency}>Agency: {selectedNews.agency}</Text>
        <Text style={styles.description}>{selectedNews.description}</Text>
      </View>
    </View>
  );
}

export default NewsDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    marginVertical: 10,
    height: 300,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    borderRadius: 7,
    backgroundColor: Colors.primary500,
    flex: 1,
    alignItems: "center",
    padding: 20, // Added padding for better text alignment
  },
  headline: {
    color: Colors.accent500, // Adjusted for visual emphasis
    fontSize: 30,
    fontFamily: "SandeMore",
    paddingBottom: 10,
  },
  date: {
    color: Colors.primary300,
    fontSize: 25,
    fontFamily: "SandeMore",
    paddingBottom: 5,
  },
  author: {
    color: Colors.primary300,
    fontSize: 25,
    fontFamily: "SandeMore",
    paddingBottom: 5,
  },
  agency: {
    color: Colors.primary300,
    fontSize: 25,
    fontFamily: "SandeMore",
    paddingBottom: 5,
  },
  description: {
    color: Colors.primary300,
    width: "100%",
    textAlign: "justify",
    fontSize: 23,
    fontFamily: "SandeMore",
  },
});
