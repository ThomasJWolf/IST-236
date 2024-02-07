import { View, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";


function Title(props){
    return <Text style={StyleSheet.title}>{props.children}</Text>
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    alignItems: "center",
  },
});
