import {
  View,
  StyleSheet,
  Text,
  Image,
  Linking,
  ScrollView,
  Switch,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Title from "../components/Title.js";
import Colors from "../constants/colors.js";
import { RadioGroup } from "react-native-radio-buttons-group";
import BouncyCheckbox from "react-native-bouncy-checkbox";

function OrderReviewScreen(props) {
  // Set Safe Area Screen Bounderies
  const insets = useSafeAreaInsets();

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
      {/* Adds the title */}
      <View style={styles.titleContainer}>
        <Title>Order Summery</Title>
      </View>

      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>
          Your order has been placed, with you rorder details below
        </Text>
      </View>

      <View style={styles.ingredientsContainer}>
        <Text style={styles.ingredient}>Sandwich Size:</Text>
        <Text style={styles.subIngredient}>{props.size}</Text>
        <Text style={styles.ingredient}>Bread:</Text>
        <Text style={styles.subIngredient}>{props.bread}</Text>
        <Text style={styles.ingredient}>Cheese:</Text>
        <Text style={styles.subIngredient}>{props.cheese}</Text>
        <Text style={styles.ingredient}>Meats:</Text>
        {props.meats.map((item) => {
          if (item.value) {
            return (
              <Text key={item.id} style={styles.subIngredient}>
                {item.name}
              </Text>
            );
          }
        })}
        <Text style={styles.ingredient}>Sauces:</Text>
        {props.sauces.map((item) => {
          if (item.value) {
            return (
              <Text key={item.id} style={styles.subIngredient}>
                {item.name}
              </Text>
            );
          }
        })}
        <Text style={styles.ingredient}>Vegetables:</Text>
        {props.vegetables.map((item) => {
          if (item.value) {
            return (
              <Text key={item.id} style={styles.subIngredient}>
                {item.name}
              </Text>
            );
          }
        })}
        <Text style={styles.ingredient}>Add Ons:</Text>
        <Text style={styles.subIngredient}>
          {props.toasted ? "Toasted" : ""}
        </Text>
        <Text style={styles.subIngredient}>
          {props.doubleMeat ? "Double Meat" : ""}
        </Text>
        <Text style={styles.subIngredient}>
          {props.doubleCheese ? "Double Cheese" : ""}
        </Text>
        <Text style={styles.subIngredient}>
          {props.mealCombo ? "Meal Combo" : ""}
        </Text>
      </View>

      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Subtotal: ${props.price.toFixed(2)}</Text>
        <Text style={styles.subTitle}>Sales Tax: ${(props.price * 0.06).toFixed(2)}</Text>
        <Text style={styles.subTitle}>Total: ${(props.price + props.price * 0.06).toFixed(2)}</Text>
      </View>

      {/* Adds the button to go to the next page */}
      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>Return Home</NavButton>
      </View>
    </View>
  );
}

export default OrderReviewScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "90%",
  },
  titleContainer: {
    marginBottom: 10,
    marginHorizontal: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary500,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  subTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.primary500,
  },
  ingredientsContainer: {
    flex: 3,
  },
  ingredient: {
    fontSize: 20,
    color: Colors.primary500,
  },
  subIngredient: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
  buttonContainer: {
    alignItems: "center",
  },
});
