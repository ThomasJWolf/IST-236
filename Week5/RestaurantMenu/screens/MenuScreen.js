import { View, StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MenuItem from "../components/MenuItems";
import NavButton from "../components/NavButton";
import Title from "../components/Title";

function MenuScreen(props) {
  // Set Safe Area Screen Bounderies
  const insets = useSafeAreaInsets();

  const [menuItems, setMenuItems] = useState([
    {
      name: "Big Mac",
      image: require("../assets/images/BigMac.png"),
      price: "$5.09",
      id: 1,
    },
    {
      name: "Quarter Pounder with Cheese",
      image: require("../assets/images/QuarterPounderwithCheese.png"),
      price: "$5.09",
      id: 2,
    },
    {
      name: "McDouble",
      image: require("../assets/images/McDouble.png"),
      price: "$3.09",
      id: 3,
    },
    {
      name: "Cheeseburger",
      image: require("../assets/images/Cheeseburger.png"),
      price: "$2.39",
      id: 4,
    },
    {
      name: "40 Piece Chicken McNuggets",
      image: require("../assets/images/40McNuggets.png"),
      price: "$11.99",
      id: 5,
    },
    { name: "Large Fries", 
      image: require("../assets/images/LargeFries.png"), 
      price: "$3.29", 
      id: 6 
    },
        { name: "Apple Slices", 
      image: require("../assets/images/AppleSlices.png"), 
      price: "$1.19", 
      id: 7 
    },
    { name: "Hamburger Happy Meal", 
    image: require("../assets/images/HamburgerHappyMeal.png"), 
    price: "$4.50", 
    id: 8
    },
    { name: "Baked Apple Pie", 
    image: require("../assets/images/BakedApplePie.png"), 
    price: "$2.09", 
    id: 9 
    },
    { name: "Coca-Cola", 
    image: require("../assets/images/Coke.png"), 
    price: "$2.59", 
    id: 10 
    },
    { name: "Chocolate Milk", 
    image: require("../assets/images/ChocolateMilk.png"), 
    price: "$2.09", 
    id: 11
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
      <View style={styles.titleContainer}>
        <Title>Menu</Title>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          renderItem={(itemData) => {
            return (
              <MenuItem
                name={itemData.item.name}
                image={itemData.item.image}
                price={itemData.item.price}
              />
            );
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>Home Page</NavButton>
      </View>
    </View>
  );
}

export default MenuScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: 400,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  listContainer: {
    flex: 7,
    width: "95%",
  },
  buttonContainer: {
    flex: 1,
    marginTop: 20,
  },
});
