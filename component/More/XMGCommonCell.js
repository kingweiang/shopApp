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

var CommonCell=React.createClass({
    getDefaultProps(){
        return{
            title:'',
        }
    },

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {/*左边*/}
                    {this.props.title}
                </Text>
                {/*右边*/}
                <Image source={{uri:'icon_mine_setting'}} style={{width:20,height:20}}/>
            </View>
        );
    },
});

const styles = StyleSheet.create({
    container: {
        height:40,
        backgroundColor:'white',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5,

        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        marginLeft:8,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

module.exports = CommonCell;
