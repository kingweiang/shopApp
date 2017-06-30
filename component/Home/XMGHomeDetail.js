/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

var HomeDetail=React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{this.popTopHome()}}>
                <Text style={styles.welcome}>
                    Welcome to HomeDetail!
                </Text>
                </TouchableOpacity>
            </View>
        );
    },

    popTopHome(){
      this.props.navigator.pop();
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

module.exports = HomeDetail;
