import { View, StyleSheet, FlatList } from "react-native";
import NewsItem from "./NewsItem";
import Colors from "../../constants/colors";

function News(props) {
  function renderNewsItem(itemData) {
    const newsItemProps = {
      id: itemData.item.id,
      type: itemData.item.type,
      headline: itemData.item.headline,
      date: itemData.item.date,
      author: itemData.item.author,
      agency: itemData.item.agency,
      description: itemData.item.description,
      imageUrl: itemData.item.imageUrl,
    };
    return <NewsItem {...newsItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={props.items}
        keyExtractor={(item) => item.id}
        renderItem={renderNewsItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.primary500,
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
