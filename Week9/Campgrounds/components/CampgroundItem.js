import { Pressable, View, Text, Image, StyleSheet } from "react-native";
import { useState } from "react";
import Colors from "../constants/colors";
import ImageViewModal from "../modal/ImageViewModal";

function CampgroundItem(props) {
  const [modalVisible, setModalVisible] = useState(false);

  function viewImageHandler() {
    setModalVisible(true);
  }

  function closeImageHandler() {
    setModalVisible(false);
  }

  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: props.listIndex % 2 === 0 ? "#ccc" : "#fff" },
      ]}
    >
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: Colors.primary300 }}
        onPress={viewImageHandler}
      >
        <View style={styles.rowContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{props.name}</Text>
            <View style={styles.innerRowContainer}>
              <Text style={styles.sites}>{props.numSites}</Text>
              <Text style={styles.year}>{props.foundedYear}</Text>
            </View>
            <Text style={styles.rating}>{props.rating}</Text>
          </View>
        </View>
      </Pressable>
      <ImageViewModal
        isVisible={modalVisible}
        imageUrl={props.imageUrl}
        onClose={closeImageHandler}
      />
    </View>
  );
}

export default CampgroundItem;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#ccc",
    paddingTop: 3,
    paddingHorizontal: 5,
    marginBotton: 3,
    borderRadius: 7,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  rowContainer: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    marginBotton: 10,
  },
  image: {
    width: "25%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 15,
  },
  infoContainer: {
    width: "75%",
    paddingLeft: 20,
  },
  name: {
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 20,
  },
  innerRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sites: {
    width: "85%",
    fontSize: 20,
  },
  year: {
    fontSize: 16,
    fontWeight: "bold",
  },
  rating: {
    fontSize: 13,
    fontStyle: "italic",
  },
});
