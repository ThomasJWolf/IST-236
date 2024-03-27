import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { BookmarksContext } from "../store/context/bookmarks-context";
import { LISTINGS } from "../data/dummy_data";
import List from "../components/List/List";
import Colors from "../constants/colors";

function BookmarksScreen() {
  const BookmarkedListingsCtx = useContext(BookmarksContext);
  const BookmarkedListings = LISTINGS.filter((listingItem) =>
    BookmarkedListingsCtx.ids.includes(listingItem.id)
  );

  if (BookmarkedListings.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>No Bookmarked Listings</Text>
      </View>
    );
  } else {
    return <List items={BookmarkedListings} />;
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
