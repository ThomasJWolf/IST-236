import { View, Text, StyleSheet, FlatList } from "react-native";
import { STATES } from "../data/dummy-data";
import StateGridTile from "../components/StateGridTile";

function HomeScreen(props) {
  function renderStateItem(itemData) {
    function pressHandler() {
      console.log("Hello");
      props.navigation.navigate("CampgroundsOverview", {
        stateId: itemData.item.id,
      });
    }

    return (
      <StateGridTile
        name={itemData.item.name}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={STATES}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={renderStateItem}
        numColumns={2}
      />
    </View>
  );
}

export default HomeScreen;
