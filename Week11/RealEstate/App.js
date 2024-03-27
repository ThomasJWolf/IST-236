import { StatusBar } from "expo-status-bar";
import { useState, useMemo, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Colors from "./constants/colors.js";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BookmarksScreen from "./screens/BookmarksScreen.js";
import HouseListingsScreen from "./screens/HouseListingsScreen.js";
import TownhouseListingsScreen from "./screens/TownhouseListingsScreen.js";
import TrailerListingsScreen from "./screens/TrailerListingsScreen.js";
import CondoListingsScreen from "./screens/CondoListingsScreen.js";
import ListingDetailsScreen from "./screens/ListingDetailsScreen.js";
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import BookmarksContextProvider from "./store/context/bookmarks-context.js";

// Create navigator objects
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Drawer navigation setup
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Listings"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: Colors.primary500 },
        contentStyle: { backgroundColor: "black" },
        headerTitleStyle: {
          fontFamily: "nolluqa",
          fontSize: 40,
          color: Colors.accent800,
        },
        sceneContainerStyle: { backgroundColor: Colors.primary300 },
        drawerContentStyle: { backgroundColor: Colors.primary500 },
        drawerActiveTintColor: Colors.primary300o5,
        drawerInactiveTintColor: Colors.primary300,
        drawerActiveBackgroundColor: Colors.primary800,
      }}
    >
      <Drawer.Screen
        name="Listings"
        component={TabsNavigator}
        options={{
          title: "All Listings",
          drawerLabel: "Real Estate Listings",
          drawerIcon: ({ color, size }) => (
            <Entypo name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="BookmarkedListings"
        component={BookmarksScreen}
        options={{
          title: "Bookmarked Listings",
          drawerLabel: "Bookmarked Listings",
          drawerIcon: ({ color, size }) => (
            <Entypo name="bookmark" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

// Tabs navigation setup for listing categories
function TabsNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Houses"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: Colors.primary300o5,
        tabBarInactiveTintColor: Colors.primary300,
        tabBarActiveBackgroundColor: Colors.primary800,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarStyle: { backgroundColor: Colors.primary500 },
        tabBarLabelStyle: { fontFamily: "playfairBold", fontSize: 12 },
      }}
    >
      <Tab.Screen
        name="HouseListings"
        component={HouseListingsScreen}
        options={{
          headerShown: false,
          title: "Houses",
          tabBarLabel: "Houses",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CondoListings"
        component={CondoListingsScreen}
        options={{
          headerShown: false,
          title: "Condos",
          tabBarLabel: "Condos",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="apartment" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TownhouseListings"
        component={TownhouseListingsScreen}
        options={{
          headerShown: false,
          title: "Townhouses",
          tabBarLabel: "Townhouses",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="holiday-village" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TrailerListings"
        component={TrailerListingsScreen}
        options={{
          headerShown: false,
          title: "Trailers",
          tabBarLabel: "Mobile Homes",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="truck-trailer"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Main application component

export default function App() {
  //Set up our custom fonts
  const [fontsLoaded, fontError] = useFonts({
    nolluqa: require("./assets/fonts/NolluqaRegular.otf"),
    playfair: require("./assets/fonts/Playfair.ttf"),
    playfairBold: require("./assets/fonts/PlayfairBold.ttf"),
    playfairBoldItalic: require("./assets/fonts/PlayfairBoldItalic.ttf"),
  });

  // Function to hide the splash screen after fonts are loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Show splash screen until fonts are loaded
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="light" />
        <BookmarksContextProvider>
          <NavigationContainer style={styles.container}>
            <Stack.Navigator
              initialRouteName="DrawerNavigator"
              screenOptions={{
                headerTintColor: Colors.primary300,
                headerStyle: { backgroundColor: Colors.primary500 },
                contentStyle: { backgroundColor: "black" },
              }}
            >
              <Stack.Screen
                name="DrawerNavigator"
                component={DrawerNavigator}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="ListingDetails"
                component={ListingDetailsScreen}
                options={{
                  headerBackTitleVisible: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </BookmarksContextProvider>
      </>
    );
  }
}

// Stylesheet for the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    alignContent: "center",
  },
});
