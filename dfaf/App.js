import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Loading from "./Loading"

export default class App extends Component {
  state = {
    isLoading : true,
    location: null,
    errorMessage: null,
  };

  componentDidMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
        isLoading : false,
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    const {coords:{latitude,longitude}} = location;
    this.setState({ location });
    console.log(this.state.location)
  };

  render() {
    const {isLoading} = this.state;
    return isLoading ? <Loading /> : null;
  }
}
