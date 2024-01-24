import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Set status bar styling */}
      <StatusBar style="light" />
      {/* Set SafeAreaView Screen Container */}
      <SafeAreaView>
        {/* Set Title Container */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Shopping List</Text>
        </View>

        {/* Sets Add Item Button Container */}
        <View style={styles.buttonContainer}>
          <Text style={styles.text}></Text>
        </View>

        {/* Set Items to Get Title Container */}
        <View style={styles.subititleContainer}>
          <Text style={styles.subititle}></Text>
        </View>

        {/* Set List of Items Container */}
        <View style={styles.listContainer}>
          <Text style={styles.text}>List of Items Goes Here</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e085a",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  titleContainer: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 10,
    justifyContent: "center",
    backgroundColor: "white",
    borderBottonRightRadius: 20,
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
    marginTop: 40,
    paddingHorizontal: 30,
    justifyContent: "center",
    backgroundColor: "white",
    borderBottonRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  listContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
});
