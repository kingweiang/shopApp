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
    Platform,
    Image,
    TouchableOpacity
} from 'react-native';

var BottomCommonCell=React.createClass({
    getDefaultProps(){
      return{
          leftIcon:'',
          leftTitle:'',
          rightTitle:''
      }
    },
    render() {
        return (
        <TouchableOpacity onPress = {()=>alert('heihei')}>
            <View style={styles.container}>
                {/*左边*/}
                <View style = {styles.leftViewStyle}>
                    <Image source={{uri:this.props.leftIcon}} style={{width:30, height:30,}}/>
                    <Text style={{marginLeft:5,fontSize:17}}>{this.props.leftTitle}</Text>
                </View>
                {/*右边*/}
                <View style = {styles.rightViewStyle}>
                    <Text style={{color:'gray'}}>{this.props.rightTitle}</Text>
                    <Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8, height:13, marginRight:8, marginLeft:5}}/>
                </View>
            </View>
        </TouchableOpacity>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        height:Platform.OS=='ios'?44:38,
        flexDirection:'row',
        backgroundColor: 'white',
        // 两端对齐
        justifyContent:'space-between',
        alignItems:'center',
        // 设置下边框
        borderBottomColor:"#e8e8e8",
        borderBottomWidth:1,
    },
    leftViewStyle: {
        marginLeft:5,
        flexDirection:'row',
        alignItems:'center',

    },
    rightViewStyle: {
        flexDirection:'row',
        alignItems:'center'

    },
});

module.exports = BottomCommonCell;
