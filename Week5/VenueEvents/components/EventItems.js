import { View, StyleSheet} from "react-native";

function EventItem(props) {
    return(
        <View style={styles.itemContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.name}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Text style={styles.image}>{props.image}</Text>
            </View>
            <View style={styles.dateContainer}>
                <Text style={styles.date}>{props.date}</Text>
            </View>
        </View>
    )
}

export default EventItem;

const styles = StyleSheet.create({
    itemContainer:{
        marginBottom: 20,
    },
    titleContainer: {
        backgroundColor: "white",
        borderWidth: 3,
        borderRadius: 5,
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        fontFamily: "squealer"
    },
    imageContainer: {
        alignItems: "center",
        backgroundColor: "black",
        borderWidth: 3,
        borderRadius: 5,

    },
    image: {
        width: "100%",
        height: 250,
        resizeMode: "cover",
    },
    dateContainer: {
        backgroundColor: "white",
        borderWidth: 3,
        borderRadius: 5,
    },
    date: {
        fontSize: 40,
        textAlign: "center",
        fontFamily: "squealer-embossed"
    }
});
