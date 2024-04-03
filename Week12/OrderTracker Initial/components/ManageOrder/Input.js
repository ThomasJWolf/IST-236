const { View } = require("react-native");
import React from "react";
import { Text, TextInput, StyleSheet } from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";

function Input(props) {
  let inputStyles = [styles.input];

  if (props.textInputConfig && props.textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={[styles.inputContainer, props.style]}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={inputStyles} {...props.textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 12,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 12,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
