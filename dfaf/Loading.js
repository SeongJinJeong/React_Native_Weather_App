import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading() {
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}> Getting the Fucking Weather! </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 0,
        backgroundColor : '#FDF6AA',
        paddingVertical : 50,
        paddingHorizontal : 20,
        justifyContent:'center'

       
    },

    text : {
        color : '#2c2c2c',
        fontSize : 20,
    }

})