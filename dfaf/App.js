import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Loading from "./Loading";
import Weather from './Weather';

const API_KEY = '06bb3d9425217aaf472d9821bf139ab9';

export default class App extends Component {

  state = {
    isLoading: true,
    error: null,
    temp: null,
    name: null
  };
  componentDidMount() {
    this._getLocation();
  }

  _getLocation= async() =>{
    try{
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        throw "Error On Grant!";
      }
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
          temp: json.main.temp,
          name: json.weather[0].main,
          isLoading: false,
          error : null,
        });
        console.log(json);
      })
      .catch(error => console.log(error))
  };

  render() {
    const {isLoading, temp, name} = this.state;
    return isLoading ? (<Loading />) : <Weather temp={Math.round(temp)} condition ={name}/>
  }
}
