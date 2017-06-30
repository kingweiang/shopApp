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
    Image,
    Platform,
    TouchableOpacity
} from 'react-native';

var CommonCell=React.createClass({
    getDefaultProps(){
        return{
            title:'',
        }
    },

    render() {
        return (
        <TouchableOpacity onPress={()=>{alert('点击了')}}>
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {/*左边*/}
                    {this.props.title}
                </Text>
                {/*右边*/}
                <Image source={{uri:'icon_cell_rightArrow'}} style={{width:Platform.OS == 'ios' ? 10 : 8,height:Platform.OS == 'ios' ? 13 : 15, marginRight:8,}}/>
            </View>
        </TouchableOpacity>
        );
    },
});

const styles = StyleSheet.create({
    container: {
        marginTop:Platform.OS == 'ios' ? 8 : 6,
        height:40,
        backgroundColor:'white',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5,

        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    welcome: {
        fontSize: Platform.OS == 'ios' ? 16 : 14,
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
