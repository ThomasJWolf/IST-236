import { View, StyleSheet, Text, Image, Linking } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Title from "../components/Title.js";
import Colors from "../constants/colors.js"

function HomeScreen(props) {
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
      <View style={styles.titleContainer}>
        <Title>McDonald's</Title>
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/mcdonalds.jpg")}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("tel:+18436514448")}
        >
          (843) 651-4448
        </Text>
        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("https://maps.app.goo.gl/6vFwowmpKUEWjDNv7")}
        >
          2913 US-17 BUS{"\n"}Garden City{"\n"}SC 29576
        </Text>
        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("https://www.mcdonalds.com/us/en-us/location/sc/garden-city/2913-hwy-17-business/5838.html")}
        >
          www.mcdonalds.com
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>View Menu</NavButton>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    flex: 4,
  },
  image: {
    resizeMode: "cover",
    height: "100%",
    width: 400,
  },
  infoContainer: {
    flex: 3,
  },
  infoText: {
    fontSize: 30,
    textAlign: "center",
    padding: 7,
    color: Colors.primary500,
    fontFamily: "speedee-bold"
  },
  buttonContainer: {
    flex: 1,
  },
});
