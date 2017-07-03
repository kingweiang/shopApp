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
    TouchableOpacity,
    TextInput,
    Image,
    Platform,
    ScrollView
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var HomeDetail = require('./XMGHomeDetail')
var TopView = require('./XMGTopView')

var Home=React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*导航条*/}
                {this.renderNavBar()}
                <ScrollView>
                    <TopView/>
                </ScrollView>
            </View>
        );
    },
    // 导航条
    renderNavBar(){
        return (
            <View style={styles.navBarStyle}>
                {/*左边*/}
                <TouchableOpacity onPress={()=>{alert('点击了')}}>
                    <Text style={{color:'white',marginTop: Platform.OS == 'ios' ? 12 : 0,}}>长沙</Text>
                </TouchableOpacity>
                {/*中间*/}
                <TextInput
                    placeholder="输入商家, 品类, 商圈"
                    style={styles.topInputStyle}
                />
                {/*右边*/}
                <View style={styles.rightNavViewStyle}>
                    <TouchableOpacity onPress={()=>{alert('点击了')}}>
                        <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.rightNavViewStyle}>
                    <TouchableOpacity onPress={()=>{alert('点击了')}}>
                        <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    },

    //跳转子页面
    pushToDetail(){
        this.props.navigator.push({
            component:HomeDetail,
            title:"Home详情页"
        })
    },
});

const styles = StyleSheet.create({
    navBarStyle:{ // 导航条样式
        height: Platform.OS == 'ios' ? 64 : 44,
        backgroundColor:'rgba(255,96,0,1.0)',
        // marginTop: Platform.OS == 'ios' ? 18 : 0,
        // 设置主轴的方向
        flexDirection:'row',
        // 垂直居中 ---> 设置侧轴的对齐方式
        alignItems:'center',
        // alignItems:'flex-end',
        // paddingBottom:8,

        // 设置主轴的对齐方式
        justifyContent:'space-around'
    },

    rightNavViewStyle:{
        flexDirection:'row',
        // backgroundColor:'blue',
        height:64,
        // 设置侧轴的对齐方式
        alignItems:'center',
    },

    topInputStyle:{ // 设置输入框
        width:width * 0.70,
        height:Platform.OS == 'ios' ? 35 : 38,
        alignItems:'flex-end',
        backgroundColor:'white',
        marginTop: Platform.OS == 'ios' ? 22 : 0,

        // 设置圆角
        borderRadius:Platform.OS == 'ios' ? 17 : 15,

    // 内左边距
        paddingLeft:Platform.OS == 'ios' ? 10 : 12,
        // paddingTop:Platform.OS == 'ios' ? 0 : 12,
    },

    navRightImgStyle:{ // 设置图片的大小
        width:Platform.OS == 'ios' ? 28: 24,
        height:Platform.OS == 'ios' ? 28: 24,
        marginTop: Platform.OS == 'ios' ? 16 : 0,

    },

    container: {
        flex: 1,
        backgroundColor: '#e8e8e8'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

module.exports = Home;
/**
 * Created by ww on 2017/6/28.
 */
