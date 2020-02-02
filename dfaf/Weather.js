import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import PropTypes, { number } from 'prop-types';

export default function Weather({temp}){
    return (
        <View style={styles.container}>
            <Text>{temp}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        justifyContent : "center",
        flex : 1,
        alignItems: "center",
    }
});

Weather.PropTypes = {
    temp : PropTypes.number.isRequired
}