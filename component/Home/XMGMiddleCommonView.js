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
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var CommonView=React.createClass({
    getDefaultProps(){
        return{
            title:'',
            subTitle:'',
            rightIcon:'',
            titleColor:''
        }
    },

    render() {
        return (
        <TouchableOpacity onPress={()=>{alert('点击了')}}>
            <View style={styles.container}>
                {/*左边*/}
                <View>
                    <Text style={[{color:this.props.titleColor},styles.titleStyle]}>{this.props.title}</Text>
                    <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
                </View>
                {/*右边*/}
                <Image source={{uri:this.props.rightIcon}} style={{width:64,height:43}} />
            </View>
        </TouchableOpacity>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        width:width*0.5-1,
        height:59,
        marginBottom:1,
        alignItems:'center',

        flexDirection:'row',
        justifyContent:'space-around'
    },
    titleStyle:{
        fontSize:18,
        fontWeight:'bold',
    },
    subTitleStyle:{
        color:'gray'
    }
});

module.exports = CommonView;
