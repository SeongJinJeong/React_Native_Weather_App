import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading() {
    return (
        <View style = {styles.container}>
            <StatusBar barStyle = "light-content"></StatusBar>
            <Text style = {styles.text}> Getting the Fucking Weather! </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#FDF6AA',
        paddingVertical : 50,
        paddingHorizontal : 20,
        justifyContent:'flex-end'

       
    },

    text : {
        color : '#2c2c2c',
        fontSize : 20,
    }

})