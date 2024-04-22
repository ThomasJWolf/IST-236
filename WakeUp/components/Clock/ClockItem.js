import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Clock from 'react-live-clock';
import { useNavigation } from '@react-navigation/native';

function ClockItem(props) {
  const navigation = useNavigation();

  const selectedClockHandler = () => {
    navigation.navigate("ClockDetails", {
      clockId: props.id,
    });
  };

  return (
    <View
      style={[
        styles.itemContainer,
        {
          backgroundColor:
            props.id % 2 === 0
              ? "rgba(231, 231, 231, 0.1)"
              : "rgba(255, 255, 255, 0.2)",
        },
      ]}
    >
      <Pressable onPress={selectedClockHandler}>
        <View style={styles.clockContainer}>
          <Text style={styles.name}>{props.name}</Text>
          <Clock
            format={"h:mm:ss a"}
            ticking={true}
            timezone={props.timezone}
            element={Text}
            style={styles.time}
          />
          <Clock
            format={"LL"}
            ticking={true}
            timezone={props.timezone}
            element={Text}
            style={styles.date}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 3,
  },
  clockContainer: {
    flex: 1,
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  time: {
    fontSize: 60,
    color: "white",
  },
  date: {
    fontSize: 20,
    color: "white",
    paddingBottom: 5,
  },
});

export default ClockItem;
