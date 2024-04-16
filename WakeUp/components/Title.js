import { StyleSheet, Text, useWindowDimensions } from "react-native";
import Colors from "../constants/colors";

// Creates the Title function for all screens to use
function Title(props) {
  const { width, hight } = useWindowDimensions();
  return <Text style={[styles.title, {fontSize: width * 0.13}]}>{props.children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    color: Colors.primary500,
    fontFamily: "antipastoPro",
  },
});
