/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View, Button, Easing } from "react-native"
import SettingsScreen from './src/module/settings/SettingsScreen'
import TabNavigator from './src/navigation/TabNavigator'
// import firebase from 'react-native-firebase'


const Stack = createStackNavigator()

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01
  }
};

const closeConfig = {
  animation: "timing",
  config: {
    duration: 500,
    easing: Easing.linear
  }
};

function getHeaderTitle(route) {
  const routeName = route.state ? route.state.routes[route.state.index].name : "Home";

  switch (routeName) {
    case "Home":
      return "Home";
    case "Upload":
      return "Upload";
    case "Settings":
      return "Settings";
  }
}

function shouldHeaderBeShown(route) {
  const routeName = route.state ? route.state.routes[route.state.index].name : "Home";
  switch (routeName) {
    case "Home":
      return false;
  }
}

export default function App() {

  // useEffect(() => {
  //   var firebaseConfig = {
  //     apiKey: "AIzaSyAbxzn5x25WrlIINwZUl3Vh1N2otUGAgg8",
  //     authDomain: "comic-4fc61.firebaseapp.com",
  //     projectId: "comic-4fc61",
  //     storageBucket: "comic-4fc61.appspot.com",
  //     messagingSenderId: "264633274607",
  //     appId: "1:264633274607:web:bd679fe52578d99160cb1a",
  //     measurementId: "G-03LR5D1KW2"
  //   };
  //   // Initialize Firebase
  //   firebase.initializeApp(firebaseConfig);
  //   firebase.analytics();
    
  // })

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",

        }}
        headerMode="float"
        animation="fade"
      >
        <Stack.Screen
          options={({ route }) => ({
            title: getHeaderTitle(route),
            headerShown: shouldHeaderBeShown(route)
          })}
          name="Home"
          component={TabNavigator}
        />
        {/* <Stack.Screen name="Settings" component={SettingsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

