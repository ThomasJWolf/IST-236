import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";

export default function App() {
  return (
    <>
      {/* Set status bar styling */}
      <StatusBar style="light" />

      {/* Set SafeAreaView Screen Container */}
      <SafeAreaView  style={styles.appContainer}>
        {/* Set Title Container */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Shopping List</Text>
        </View>

        {/* Sets Add Item Button Container */}
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>Add Item Button Goes Here</Text>
        </View>

        {/* Set Items to Get Title Container */}
        <View style={styles.subititleContainer}>
          <Text style={styles.subititle}>Items To Get:</Text>
        </View>

        {/* Set List of Items Container */}
        <View style={styles.listContainer}>
          <Text style={styles.text}>List of Items Goes Here</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#1e085a",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  titleContainer: {
    flex: 1,
    margin: 10,
    paddingHorizontal: 30,
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  title: {
    fontSize: 40,
    color: "#5e08cc",
  },

  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },

  subititleContainer: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 30,
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  subititle: {
    fontSize: 30,
    color: "#5e08cc"
  },

  listContainer: {
    flex: 7,
    justifyContent: "center",
  },
});
