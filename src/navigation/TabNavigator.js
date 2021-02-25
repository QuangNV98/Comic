import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeStackNavigator from './HomeStackNavigator'
import SettingsScreen from '../module/settings/SettingsScreen'
import UploadScreen from '../module/upload/UploadScreen'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator()

const TabNavigator = ({ navigation, route }) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name == "Home") {
                        iconName = "home";
                    } else if (route.name == "Upload") {
                        iconName = "filter";
                    } else if (route.name == "Settings") {
                        iconName = "settings";
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                }
            })}
        >
            <Tab.Screen name="Home" component={HomeStackNavigator} />
            <Tab.Screen name="Upload" component={UploadScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    )
}

export default TabNavigator