import { StatusBar } from "expo-status-bar";
import { useState, useMemo, useCallback, useEffect } from "react";
import { Settings, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Colors from "./constants/colors.js";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "./screens/SettingsScreen.js";
import ClocksScreen from "./screens/ClocksScreen.js";
import ClockDetailsScreen from "./screens/ClockDetailsScreen.js";
import TimersScreen from "./screens/TimersScreen.js";
import TimerDetailsScreen from "./screens/TimerDetailsScreen.js";
import StopwatchesScreen from "./screens/StopwatchesScreen.js";
import StopwatchDetailsScreen from "./screens/StopwatchDetailsScreen.js";
import AlarmsScreen from "./screens/AlarmsScreen.js";
import AboutScreen from "./screens/AboutScreen.js";
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store.js";
import { initializeClocks, initializeAlarms, initializeGroups, initializeStopwatches, initializeTimers } from "./redux/actions.js";

// Create navigator objects
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Drawer navigation setup
function DrawerNavigator() {




  return (
    <Drawer.Navigator
      initialRouteName="Clocks"
      drawerPosition="right" // Optional: Set this if the drawer should slide from the right
      screenOptions={({ navigation }) => ({
        headerTintColor: "white",
        headerStyle: { backgroundColor: Colors.primary500 },
        contentStyle: { backgroundColor: Colors.background },
        headerTitleStyle: {
          fontFamily: "antipastoPro",
          fontSize: 40,
          color: Colors.primary300,
        },
        sceneContainerStyle: { backgroundColor: Colors.primary300 },
        drawerContentStyle: { backgroundColor: Colors.primary500 },
        drawerActiveTintColor: Colors.primary300o5,
        drawerInactiveTintColor: Colors.primary300,
        drawerActiveBackgroundColor: Colors.primary800,
        headerRight: () => (
          <Entypo
            name="dots-three-vertical" // Change this to any icon you prefer
            size={30}
            color="white"
            onPress={() => navigation.toggleDrawer()}
            style={{ marginRight: 10 }}
          />
        ),
        headerLeft: () => null, // Removes any component on the left side of the header
      })}
    >
      <Drawer.Screen
        name="Clocks&Timers"
        component={TabsNavigator}
        options={{
          title: "Clocks & Timers",
          drawerLabel: "Clocks & Timer",
          drawerPosition: "right",
          drawerIcon: ({ color, size }) => (
            <Entypo name="clock" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          drawerLabel: "Settings",
          drawerPosition: "right",
          drawerIcon: ({ color, size }) => (
            <Feather name="settings" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: "About",
          drawerLabel: "About",
          drawerPosition: "right",
          drawerIcon: ({ color, size }) => (
            <Feather name="info" color={color} size={size} />
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
      initialRouteName="Clocks"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: Colors.primary300o5,
        tabBarInactiveTintColor: Colors.primary300,
        tabBarActiveBackgroundColor: Colors.primary800,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarStyle: { backgroundColor: Colors.primary500 },
        tabBarLabelStyle: {
          fontFamily: "antipastoPro",
          fontSize: 12,
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="Clocks"
        component={ClocksScreen}
        options={{
          headerShown: false,
          title: "Clocks",
          tabBarLabel: "Clocks",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clock" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Timers"
        component={TimersScreen}
        options={{
          headerShown: false,
          title: "Timers",
          tabBarLabel: "Timers",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="timer" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Stopwatches"
        component={StopwatchesScreen}
        options={{
          headerShown: false,
          title: "Stopwatches",
          tabBarLabel: "Stopwatches",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="stopwatch" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Alarms"
        component={AlarmsScreen}
        options={{
          headerShown: false,
          title: "Alarms",
          tabBarLabel: "Alarms",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="alarm" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Main application component

export default function App() {

    useEffect(() => {
      store.dispatch(initializeClocks());
      store.dispatch(initializeAlarms());
      store.dispatch(initializeGroups());
      store.dispatch(initializeStopwatches());
      store.dispatch(initializeTimers());
    }, []);

  //Set up our custom fonts
  const [fontsLoaded, fontError] = useFonts({
    antipastoPro: require("./assets/fonts/AntipastoPro_trial.ttf"),
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
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <StatusBar style="light" />
            <NavigationContainer style={styles.container}>
              <Stack.Navigator
                initialRouteName="DrawerNavigator"
                screenOptions={{
                  headerTintColor: Colors.primary300,
                  headerStyle: { backgroundColor: Colors.primary500 },
                  contentStyle: { backgroundColor: Colors.background },
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
                  name="ClockDetails"
                  component={ClockDetailsScreen}
                  options={{
                    title: "Clocks",
                  }}
                />
                <Stack.Screen
                  name="TimerDetails"
                  component={TimerDetailsScreen}
                  options={{
                    title: "Timers",
                  }}
                />
                <Stack.Screen
                  name="StopwatchDetails"
                  component={StopwatchDetailsScreen}
                  options={{
                    title: "Stopwatches",
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </>
    );
  }
}

// Stylesheet for the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    alignContent: "center",
  },
});
