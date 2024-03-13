import { Modal, View, Button, Image, StyleSheet, Text } from "react-native";

function ImageViewModal(props) {
  return (
    <View style={styles.container}>
      <Modal
        visible={props.isVisible}
        animationType="slide"
        transparent={false}
      >
        <View style={styles.modalContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
          <Text style={styles.description}>{props.description}</Text>
          <Button title="Return to Vacations" onPress={props.onClose} />
        </View>
      </Modal>
    </View>
  );
}

export default ImageViewModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#640c0c",
  },
  image: {
    width: "100%",
    height: "80%",
    resizeMode: "contain",
  },
  description: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    backgroundColor: "#ffffffff",
  },

});
