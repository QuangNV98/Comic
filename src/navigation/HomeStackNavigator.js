import React from 'react'
import HomeScreen from '../module/home/HomeScreen'
import DetailsScreen from '../module/home/DetailScreen'
import { createStackNavigator } from '@react-navigation/stack'

const HomeStack = createStackNavigator()

const HomeStackNavigator = ({ navigation, route }) => {
  if (route.state) {
    navigation.setOptions({
      tabBarVisible: route.state.index > 0 ? false : true
    });
  }
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator