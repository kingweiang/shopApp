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
    TouchableOpacity,
    Platform,
} from 'react-native';

var Home_D4 = require('../../LocalData/XMG_Home_D4.json');
var Home_Top= require('../../LocalData/HomeTopMiddle.json')
var CommonView = require('./XMGMiddleCommonView')

var BottomView=React.createClass({
    getDefaultProps(){
        return{
            // 回调函数
            popTopHome: null
        }
    },

    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <View style={styles.topViewStyle}>
                    {this.renderTopItem()}
                </View>
                {/*下部分*/}
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomItem()}
                </View>
            </View>
        );
    },
    renderTopItem(){
        var leftData= Home_Top.data[0];
        return(
            <TouchableOpacity onPress={()=>{alert('0')}}>
                <View style={styles.leftViewStyle}>
                    <View >
                        <Text style={{color:'red',marginRight:5,fontSize:Platform.OS=='ios'?22:19,fontWeight:Platform.OS=='ios'?'400':'100'}}>{leftData.title}</Text>
                        <Text style={{color:'gray',fontSize:12}}>{leftData.subTitle}</Text>
                    </View>
                    <Image source={{uri:leftData.image}} style={styles.leftImageStyle}/>
                </View>
            </TouchableOpacity>
        )
    },
    renderBottomItem(){
        var itemArr = [];
        var DataArr =Home_D4.data;

        for(var i=0; i<DataArr.length; i++){
            var itemData=DataArr[i];
            itemArr.push(
                <CommonView
                    title={itemData.maintitle}
                    subTitle={itemData.deputytitle}
                    rightIcon={this.dealWithImgUrl(itemData.imageurl)}
                    titleColor={itemData.typeface_color}
                    tplurl={itemData.tplurl}
                    key = {i}
                    callBackClickCell={(data)=>this.popToTopView(data)}
                />
            );
        }
        return itemArr;
    },

    // 继续往父级界面传递数据
    popToTopView(data){
        console.log(data);
        console.log('popToTopView11111');
        // 继续执行回调函数
        this.props.popTopHome(data);
    },

    // 处理图像的尺寸
    dealWithImgUrl(url){
        if(url.search('w.h')==-1){
            return url;
        }else{
            return url.replace('http://','https://').replace('w.h','120.100');
        }
    },
});

const styles = StyleSheet.create({
    container: {
        marginTop:Platform.OS=='ios'?10:8,
    },
    topViewStyle: {

    },
    bottomViewStyle: {
        flexDirection:'row',
        flexWrap:'wrap',

    },
    leftViewStyle:{
        height:Platform.OS=='ios'?60:55,
        backgroundColor:'white',
        marginBottom:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',

    },
    leftImageStyle: {
        width:120,
        height:55,
        resizeMode:'contain',

    },
});

module.exports = BottomView;
