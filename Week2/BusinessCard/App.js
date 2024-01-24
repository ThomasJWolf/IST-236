import { StatusBar } from "expo-status-bar";
import {Linking, SafeAreaView, StyleSheet, Text, View, Image,
} from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("./assets/images/Thomas Wolf.jpg")}/>
        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.text}>Thomas Wolf</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("mailto:twolf1@hgtc.edu")}>Email</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("tel:1234567980")}>Phone</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("https://github.com/ThomasJWolf/")}>GitHub</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0004AF",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 3,
    paddingTop: 40,
    width: "100%",
  },
  image: {
    height: 300,
    width: "100%",
    resizeMode: "cover",
    borderWidth: 3,
    borderColor: "#05FF00",
  },
  informationContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    color: "#e5e9e4",
    fontStyle: "italic",
    marginBottom: 10,
  },
});
