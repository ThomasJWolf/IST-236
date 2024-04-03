import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

function OrderForm() {
  return (
    <View>
      <Text>Order Details:</Text>
      <Input placeholder="Order Total" />
      <View>
        <Input placeholder="Order Description" multiline />
        <Input placeholder="Order Price" />
      </View>
    </View>
  );
}

export default OrderForm;

const styles = StyleSheet.create({});
