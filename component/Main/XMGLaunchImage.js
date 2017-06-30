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
    Image
} from 'react-native';
var Main=require('./XMGMain')

var LaunchImage=React.createClass({
    render() {
        return (
            <Image source={{uri:'launchimage'}} style={styles.launchstyle}/>
        );
    },
    // 定时器，网络请求
    componentDidMount(){
        setTimeout(()=>{
            this.props.navigator.replace({
                component:Main,
            });
        },1000);
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    launchstyle: {
        flex: 1,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

module.exports = LaunchImage;
