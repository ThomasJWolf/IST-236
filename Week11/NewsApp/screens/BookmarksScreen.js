import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { BookmarksContext } from "../store/context/bookmarks-context";
import { NEWS_ITEMS } from "../data/dummy_data";
import News from "../components/News/News";
import Colors from "../constants/colors";

function BookmarksScreen() {
  const BookmarkedNewsCtx = useContext(BookmarksContext);
  const BookmarkedNews = NEWS_ITEMS.filter((NewsItem) =>
    BookmarkedNewsCtx.ids.includes(NewsItem.id)
  );

  if (BookmarkedNews.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>No Bookmarked News</Text>
      </View>
    );
  } else {
    return <News items={BookmarkedNews} />;
  }
}
export default BookmarksScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "playfairBold",
    color: Colors.primary300,
  },
});
