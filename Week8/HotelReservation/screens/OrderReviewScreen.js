import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Title from "../components/Title.js";
import Colors from "../constants/colors.js";
import { LinearGradient } from "expo-linear-gradient";

function OrderReviewScreen(props) {
  // Set Safe Area Screen Bounderies
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      source={require("../assets/images/metal.png")}
      resize="cover"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
      <LinearGradient
        colors={[
          Colors.primary800,
          "rgba(0, 0, 0, 0.9)",
          "rgba(0, 0, 0, 0.85)",
        ]}
        style={styles.rootContainer}
      >
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
            <Title>Order Summary</Title>
          </View>

          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>
              Your order has been placed, with your order details below
            </Text>
          </View>

          <View style={styles.servicesContainer}>
            <Text style={styles.service}>Repair Time:</Text>
            <Text style={styles.subService}>{props.repairTime}</Text>
            <Text style={styles.service}>Services:</Text>
            {props.services.map((item) => {
              if (item.value) {
                return (
                  <Text key={item.id} style={styles.subService}>
                    {item.name}
                  </Text>
                );
              }
            })}
            <Text style={styles.service}>Subscriptions:</Text>
            <Text style={styles.subService}>
              {props.newsletter ? "Newsletter" : ""}
            </Text>
            <Text style={styles.subService}>
              {props.rentalMembership ? "Rental Membership" : ""}
            </Text>
          </View>

          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>
              Subtotal: ${props.price.toFixed(2)}
            </Text>
            <Text style={styles.subTitle}>
              Sales Tax: ${(props.price * 0.06).toFixed(2)}
            </Text>
            <Text style={styles.subTitle}>
              Total: ${(props.price + props.price * 0.06).toFixed(2)}
            </Text>
          </View>

          {/* Adds the button to go to the next page */}
          <View style={styles.buttonContainer}>
            <NavButton onPress={props.onNext}>Return Home</NavButton>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

export default OrderReviewScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
    fontFamily: "Text"


  },
  titleContainer: {
    marginBottom: 10,
    marginHorizontal: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.accent500,
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
    textAlign: "center",
    color: Colors.accent500,
    fontFamily: "Text"

  },
  servicesContainer: {
    flex: 3,
    marginLeft: 10,
    marginRight: 20,
  },
  service: {
    fontSize: 20,
    color: Colors.accent500,
    fontFamily: "Text"

  },
  subService: {
    textAlign: "center",
    fontSize: 17,
    color: Colors.primary500,
    fontFamily: "Text"

  },
  buttonContainer: {
    alignItems: "center",
  },
});