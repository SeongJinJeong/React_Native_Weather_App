import React from 'react';
import {StyleSheet,Text,View, StatusBar} from 'react-native';
import propTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import weatherOptions from './weatherOptions.json'

export default function Weather({temp,condition}){
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
                <StatusBar barStyle = "light-content"></StatusBar>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white"/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.halfContainer}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container : {
        justifyContent : "center",
        flex : 1,
        alignItems: "center",
    },
    halfContainer : {
        flex : 1,
        justifyContent: "center",
        alignItems : "center",
    },
    temp : {
        fontSize : 32,
        marginTop : 10,
        color: "white",
    },

    title : {
        fontSize : 50,
        color :"white",
        marginBottom : 20,
        justifyContent : "flex-start",
    },

    subtitle : {
        fontSize : 20,
        color : "white",
        justifyContent : "flex-start"
    }
});

Weather.propTypes = {
    temp : propTypes.number.isRequired,
    condition : propTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired,
}