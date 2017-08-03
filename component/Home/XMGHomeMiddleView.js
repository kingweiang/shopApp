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

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var CommonView = require('./XMGMiddleCommonView')
var TopMiddleData = require('../../LocalData/HomeTopMiddleLeft.json')

var HomeMiddleView=React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*左边*/}
                {this.renderLeftView()}
                {/*右边*/}
                <View>
                {this.renderRightView()}
                </View>
            </View>
        );
    },

    renderLeftView(){
        var leftData= TopMiddleData.dataLeft[0];
        return(
        <TouchableOpacity onPress={()=>{alert('0')}}>
            <View style={styles.leftViewStyle}>
                <Image source={{uri:leftData.img1}} style={styles.leftImageStyle}/>
                <Image source={{uri:leftData.img2}} style={styles.leftImageStyle}/>
                <Text style={{color:'gray',fontSize:15,marginBottom:5}}>{leftData.title}</Text>
                <View style={{flexDirection:'row',}}>
                    <Text style={{color:'blue',marginRight:5,fontSize:Platform.OS=='ios'?12:11}}>{leftData.price}</Text>
                    <Text style={{color:'orange',backgroundColor:'yellow',fontSize:Platform.OS=='ios'?12:11}}>{leftData.sale}</Text>
                </View>
            </View>
        </TouchableOpacity>
        )
    },

    renderRightView(){
        var itemArr = [];
        var rightData =TopMiddleData.dataRight;

        for(var i=0; i<rightData.length; i++){
            var data=rightData[i];
            itemArr.push(
                <CommonView
                    title={data.title}
                    subTitle={data.subTitle}
                    rightIcon={data.rightImage}
                    titleColor={data.titleColor}
                    key = {i}
                />
            );
        }
        return itemArr;
    },
});

const styles = StyleSheet.create({
    container: {
        marginTop:Platform.OS=='ios'?15:12,
        flexDirection:'row',
    },
    leftViewStyle: {
        width:width*0.5-1,
        height:Platform.OS=='ios'?119:105,
        backgroundColor:'white',
        marginRight:1,
        alignItems:'center',
        justifyContent:'center',
    },
    leftImageStyle: {
        width:120,
        height:Platform.OS=='ios'?30:28,
        resizeMode:'contain'
    },
});

module.exports = HomeMiddleView;
