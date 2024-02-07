import { View, StyleSheet, Text, NavButton, FlatList } from "react-native";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import EventItem from "../components/EventItems";

function EventScreen(props) {
  // Set Safe Area Screen Bounderies
  const insets = useSafeAreaInsets();

  const [eventItems, setEventItems] = useState([
    {
      name: "Temp 1",
      image: require("../assets/images/americanfloyd.jpg"),
      date: "temp 11",
      id: 1,
    },
    {
      name: "Temp 2",
      image: require("../assets/images/badfish.jpg"),
      date: "Temp 22",
      id: 2,
    },
    {
      name: "Temp 3",
      image: require("../assets/images/tellmelies.jpg"),
      date: "Temp 33",
      id: 3,
    },
    {
      name: "Temp 4",
      image: require("../assets/images/blackberry.jpg"),
      date: "Temp 44",
      id: 4,
    },
    {
      name: "Temp 5",
      image: require("../assets/images/electric.jpg"),
      date: "Temp 55",
      id: 5,
    },
  ]);

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
      <View>
        <Text>Events</Text>
      </View>
      <View>
        <FlatList
        data = {eventItems}
        keyExtractor={(item) => item.id}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        renderItem={(itemData) => {
            return (
                <EventItem
                name={itemDate.item.name}
                image={itemData.item.image}
                date={itemData.item.date}
                />
            );
        }}
        />
      </View>
      <View  style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>View Home</NavButton>
      </View>
    </View>
  );
}

export default EventScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
});
