import { StatusBar } from "expo-status-bar";
import { useState, useMemo, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import { useFonts } from "expo-font";
import Colors from "./constants/colors.js";
import * as SplashScreen from "expo-splash-screen";
import VacationsOverview from "./screens/VacationsOverviewScreen.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VacationsOverviewScreen from "./screens/VacationsOverviewScreen.js";

const Stack = createNativeStackNavigator();

export default function App() {
  //Set up our custom fonts
  const [fontsLoaded, fontError] = useFonts({
    mountain: require("./assets/fonts/Classic Vibes Free.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
              headerStyle: {
                backgroundColor: Colors.primary500,
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontFamily: "mountain",
              },
              contentStyle: {
                backgroundColor: Colors.primary800,
              },
            }}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Vacation Loactions" }}
            />
            <Stack.Screen
              name="VacationsOverview"
              component={VacationsOverviewScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    alignContent: "center",
  },
});
