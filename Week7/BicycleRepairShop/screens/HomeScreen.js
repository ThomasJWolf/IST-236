import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Switch,
  ImageBackground,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Title from "../components/Title.js";
import Colors from "../constants/colors.js";
import { RadioGroup } from "react-native-radio-buttons-group";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { LinearGradient } from "expo-linear-gradient";

function HomeScreen(props) {
  // Set Safe Area Screen Bounderies
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      source={require("../assets/images/metal.png")}
      resize="cover"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
      <LinearGradient
        colors={[Colors.primary800, "rgba(0, 0, 0, 0.9)", "rgba(0, 0, 0, 0.85)"]}
        style={styles.rootContainer}
      >
        <View
          style={[
            styles.rootContainer,
            {
              paddingTop: insets.top,
              paddingBottom: insets.bottom,
              paddingLeft: insets.left,
              paddingRight: insets.right,
            },
          ]}
        >
          {/* Adds the title */}
          <View style={styles.titleContainer}>
            <Title>Bicycle Repair</Title>
          </View>

          <ScrollView style={styles.scrollContainer}>
            <View style={styles.radioContainer}>
              <Text style={styles.radioHeader}>Repair Time:</Text>
              <RadioGroup
                radioButtons={props.repairTimeRadioButtons}
                onPress={props.onSetRepairTimeId}
                selectedId={props.repairTimeId}
                layout="row"
                containerStyle={styles.radioGroup}
                labelStyle={styles.radioGroupLabels}
              />
            </View>

            <View style={styles.rowContainer}>
              <View style={styles.checkBoxContainer}>
                <Text style={styles.checkBoxHeader}>Service Types:</Text>
                <View style={styles.checkBoxSubContainer}>
                  {props.services.map((item) => {
                    return (
                      <BouncyCheckbox
                        key={item.id}
                        text={item.name}
                        onPress={props.onSetServices.bind(this, item.id)}
                        textStyle={{
                          textDecorationLine: "none",
                          color: Colors.accent500,
                          fontFamily: "Text"

                        }}
                        innerIconStyle={{
                          borderRadius: 0,
                          borderColor: Colors.primary500,
                        }}
                        iconStyle={{
                          borderRadius: 0,
                        }}
                        fillColor={Colors.primary500}
                        style={{
                          padding: 2,
                        }}
                      />
                    );
                  })}
                </View>
              </View>
            </View>


            <View style={styles.rowContainer}>
              <View style={styles.addOnsContainer}>
                <View style={styles.addOnsSubContainer}>
                  <Text style={styles.addOnsLabel}>Newsletter</Text>
                  <Switch
                    onValueChange={props.onSetNewsletter}
                    value={props.newsletter}
                    thumbColor={
                      props.newsletter ? Colors.primary500 : Colors.accent500
                    }
                    trackColor={{
                      false: Colors.primary500,
                      true: Colors.accent500,
                    }}
                  />
                </View>
              </View>

              <View style={styles.addOnsContainer}>
                <View style={styles.addOnsSubContainer}>
                  <Text style={styles.addOnsLabel}>Rental Membership</Text>
                  <Switch
                    onValueChange={props.onSetRentalMembership}
                    value={props.rentalMembership}
                    thumbColor={
                      props.rentalMembership ? Colors.primary500 : Colors.accent500
                    }
                    trackColor={{
                      false: Colors.primary500,
                      true: Colors.accent500,
                    }}
                  />
                </View>
              </View>
            </View>
            {/* Adds the button to go to the next page */}
            <View style={styles.buttonContainer}>
              <NavButton onPress={props.onNext}>Submit Order</NavButton>
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
  },
  titleContainer: {
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.accent500,
    paddingHorizontal: 30,
    paddingVertical: 5,
    alignContent: "center",
  },
  scrollContainer: {
    flex: 1,
  },
  radioContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  radioHeader: {
    fontSize: 30,
    color: Colors.accent500,
    fontFamily: "Text"

  },
  radioGroup: {
    paddingBottom: 20,
    
  },
  radioGroupLabels: {
    fontSize: 15,
    color: Colors.accent500,
    fontFamily: "Text"

    
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 20,
  },
  checkBoxContainer: {},
  checkBoxHeader: {
    fontSize: 20,
    color: Colors.accent500,
    fontFamily: "Text"

  },
  checkBoxSubContainer: {
    padding: 2,
    
    
  },
  addOnsContainer: {
    justifyContent: "space-between",
  },
  addOnsSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addOnsLabel: {
    color: Colors.accent500,
    fontSize: 20,
    fontFamily: "Text"

  },
  buttonContainer: {
    alignItems: "center",
  },
});
