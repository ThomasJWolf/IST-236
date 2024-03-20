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
import USNewsScreen from "./screens/USNewsScreen.js";
import TechNewsScreen from "./screens/TechNewsScreen.js";
import WorldNewsScreen from "./screens/WorldNewsScreen.js";
import NewsDetailsScreen from "./screens/NewsDetailsScreen.js";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";

// Create navigator objects
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Drawer navigation setup
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="News"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: Colors.primary500 },
        contentStyle: { backgroundColor: "black" },
        headerTitleStyle: {
          fontFamily: "SandeMore",
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
        name="News"
        component={TabsNavigator}
        options={{
          title: "All News",
          drawerLabel: "All News",
          drawerIcon: ({ color, size }) => (
            <Entypo name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="BookmarkedNews"
        component={BookmarksScreen}
        options={{
          title: "Bookmarked News",
          drawerLabel: "Bookmarked News",
          drawerIcon: ({ color, size }) => (
            <Entypo name="bookmark" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

// Tabs navigation setup for News categories
function TabsNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="USNews"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: Colors.primary300o5,
        tabBarInactiveTintColor: Colors.primary300,
        tabBarActiveBackgroundColor: Colors.primary800,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarStyle: { backgroundColor: Colors.primary500 },
        tabBarLabelStyle: { fontFamily: "SandeMore", fontSize: 12},
      }}
    >
      <Tab.Screen
        name="USNews"
        component={USNewsScreen}
        options={{
          headerShown: false,
          title: "US News",
          tabBarLabel: "US News",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="flag-usa" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="WorldNews"
        component={WorldNewsScreen}
        options={{
          headerShown: false,
          title: "World News",
          tabBarLabel: "World News",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="globe" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TechNews"
        component={TechNewsScreen}
        options={{
          headerShown: false,
          title: "Tech News",
          tabBarLabel: "Tech News",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="code" color={color} size={size} />
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
    SandeMore: require("./assets/fonts/SandeMore-Regular.otf"),
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
              name="NewsDetails"
              component={NewsDetailsScreen}
              options={{
                headerBackTitleVisible: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
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
