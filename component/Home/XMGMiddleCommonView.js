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

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var HomeDetail = require('./XMGHomeDetail');

var CommonView=React.createClass({
    getDefaultProps(){
        return{
            title:'',
            subTitle:'',
            rightIcon:'',
            titleColor:'',
            tplurl: '', //下级界面URL路径
            callBackClickCell: null
        }
    },

    render() {
        return (
        <TouchableOpacity onPress={()=>this.clickCell(this.props.tplurl)}>
            <View style={styles.container}>
                {/*左边*/}
                <View>
                    <Text style={[{color:this.props.titleColor},styles.titleStyle]}>{this.props.title}</Text>
                    <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
                </View>
                {/*右边*/}
                <Image source={{uri:this.props.rightIcon}} style={{width:64,height:43,resizeMode:'contain'}} />
            </View>
        </TouchableOpacity>
        );
    },

    clickCell(data){
      if(this.props.callBackClickCell == null) return;
      this.props.callBackClickCell(data);
      console.log(data);
      console.log('clickCell111');
    },
});

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        width:width*0.5-1,
        height:Platform.OS=='ios'?59:52,
        marginBottom:1,
        alignItems:'center',
        marginRight:1,

        flexDirection:'row',
        justifyContent:'space-around'
    },
    titleStyle:{
        fontSize:Platform.OS=='ios'?18:16,
        fontWeight:'bold',
    },
    subTitleStyle:{
        color:'gray',
        fontSize:Platform.OS=='ios'?12:10,
    }
});

module.exports = CommonView;
