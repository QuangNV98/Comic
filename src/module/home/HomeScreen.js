import React from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'

const HomeScreen = ({ navigation }) => {
    // navigation.setOptions({
    //   headerRight: () => (
    //     <Button
    //       title="Save"
    //       onPress={() => {
    //         //save the changes
    //         navigation.replace("Home");
    //       }}
    //     />
    //   )
    // });
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>HomeScreen</Text>
            <Button title="Go To Details Screen" onPress={() => navigation.navigate("Details")} />
        </View>
    )
}

export default HomeScreen