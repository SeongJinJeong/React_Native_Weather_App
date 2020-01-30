import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';
import Loading from "./Loading";
import axios from "axios";

const API_KEY = '06bb3d9425217aaf472d9821bf139ab9';

export default class App extends Component {

  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null
  };
  componentDidMount() {
    this._getLocation();
  }

  _getLocation= async() =>{
    try{
      await Location.getPermissionsAsync();
       const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this._getWeather(latitude,longitude);
      
    }catch(error){
      Alert.alert("Can't find you.","So Sad...");
      console.log(error);
    }

  }

  _getWeather = (lat, long) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}&units=metric`
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          temperature: json.main.temp,
          name: json.weather[0].main,
          isLoaded: true
        });
      });
  };

  render() {
    const {isLoading} = this.state;
    console.log(this.state)
    return isLoading ? (<Loading />) : (<Text>NOTHING</Text>);
  }
}
