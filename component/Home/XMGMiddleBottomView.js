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
var Home_D4 = require('../../LocalData/XMG_Home_D4.json');
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

                </View>
                {/*下部分*/}
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomItem()}
                </View>
            </View>
        );
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
        marginTop:10,
    },
    topViewStyle: {

    },
    bottomViewStyle: {
        flexDirection:'row',
        flexWrap:'wrap',

    },
});

module.exports = BottomView;
