import React from 'react';
import {StyleSheet,Text,View, StatusBar} from 'react-native';
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
      iconName: "weather-lightning",
      gradient: ["#093028", "#237A57"],
      title: "천둥",
      subtitle: "천둥이 칠거에요!"
    },
    Drizzle: {
      iconName: "weather-rainy",
      gradient: ["#89F7FE", "#66A6FF"],
      title: "산발적 비",
      subtitle: "비가 올 수도 있어요."
    },
    Rain: {
      iconName: "weather-pouring",
      gradient: ["#89F7FE", "#66A6FF"],
      title: "비 옴",
      subtitle: "밖에 비가 내리고 있어요."
    },
    Snow: {
      iconName: "weather-snowy",
      gradient: ["#7DE2FC", "#B9B6E5"],
      title: "눈 내림",
      subtitle: "눈이 내리네요."
    },
    Atmosphere: {
      iconName: "weather-fog",
      gradient: ["#89F7FE", "#66A6FF"]
    },
    Clear: {
      iconName: "weather-sunny",
      gradient: ["#FF7300", "#FEF253"],
      title: "맑음",
      subtitle: "오늘은 날씨가 좋네요."
    },
    Clouds: {
      iconName: "weather-cloudy",
      gradient: ["#D7D2CC", "#304352"],
      title: "구름 많음",
      subtitle: "구름이 너무 많아요"
    },
    Mist: {
      iconName: "weather-fog",
      gradient: ["#4DA0B0", "#D39D38"],
      title: "안개",
      subtitle: "안개가 껴있네요."
    },
    Dust: {
      iconName: "weather-hurricane",
      gradient: ["#4DA0B0", "#D39D38"],
      title: "황사",
      subtitle: "먼지가 많이 날려요."
    },
    Haze: {
      iconName: "weather-fog",
      gradient: ["#4DA0B0", "#D39D38"],
      title: "흐림",
      subtitle: "밖의 날씨가 흐립니다."
    }
  };

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

Weather.PropTypes = {
    temp : PropTypes.number.isRequired,
    condition : PropTypes.oneOf([
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