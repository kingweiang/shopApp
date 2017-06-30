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
  View
} from 'react-native';

import {Navigator} from 'react-native-deprecated-custom-components'

var LaunchImage= require('./component/Main/XMGLaunchImage')

var ShopApp1=React.createClass( {
    render() {
        return (
            <Navigator
                initialRoute={{name:'启动页',component:LaunchImage}}
                configureScene={()=>{
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route,navigator)=>{
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator}/>;
                }}
            />
        );
    }
});

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('ShopApp1', () => ShopApp1);
