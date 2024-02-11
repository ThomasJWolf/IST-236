import {StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

function Header(props){
    return <Text style={styles.header}>{props.children}</Text>
}

export default Header;

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    alignItems: "center",
    color: Colors.primary500,
    fontFamily: "pokerGeneral"
  },
});
