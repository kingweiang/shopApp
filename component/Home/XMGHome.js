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
var MiddleView = require('./XMGHomeMiddleView')
var BottomView = require('./XMGMiddleBottomView')
var ShopCenter = require('./XMGShopCenter')
var ShopCenterDetail = require('./ShopCenterDetail')

var Home=React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*导航条*/}
                {this.renderNavBar()}
                {/*首页主要内容*/}
                <ScrollView>
                    {/*头部*/}
                    <TopView/>
                    {/*中间*/}
                    <MiddleView

                    />
                    {/*下半部分*/}
                    <BottomView
                        popTopHome={(data)=>{this.pushToDetail(data)}}
                    />
                    {/*购物中心*/}
                    <ShopCenter
                        popToHomeView={(url)=>this.pushToShopCenterDetail(url)}
                    />
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
                    <Text style={{color:'white',marginTop: Platform.OS == 'ios' ? 12 : 0,fontSize:Platform.OS == 'ios' ?16:14,fontWeight:Platform.OS == 'ios' ?'600':'400'}}>长沙</Text>
                </TouchableOpacity>
                {/*中间*/}
                <TextInput
                    placeholder="输入商家, 品类, 商圈"
                    style={styles.topInputStyle}
                    underlineColorAndroid="transparent"
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
    // 跳转购物中心详情页
    pushToShopCenterDetail(url){
        // alert(url)
        this.props.navigator.push(
            {
                component: ShopCenterDetail, // 要跳转的版块
                title:'购物中心详情页',
                passProps:{'url':this.dealWithUrl(url)}
            }
        );
    },
    // 处理url
    dealWithUrl(url){
      return url.replace('imeituan://www.meituan.com/web/?url=http:','https:')
    },
// 跳转到二级界面
    pushToDetail(data){
        console.log(data);
        console.log('pushToDetail11111');
        alert(data);

        this.props.navigator.push(
            {
                component: HomeDetail, // 要跳转的版块
                title:'详情页'
            }
        );
    }
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
        height:Platform.OS == 'ios' ? 32 : 30,
        alignItems:'flex-end',
        backgroundColor:'white',
        marginTop: Platform.OS == 'ios' ? 22 : 0,
        textAlignVertical:'center',  // 针对android 设置
        padding: 0,                     // 针对android 设置
        paddingTop: Platform.OS == 'ios' ?3.5:0,
        // multiline = {true},
        fontSize:Platform.OS == 'ios' ?16:14,
        fontWeight:Platform.OS == 'ios' ?'400':'100',
        // 设置圆角
        borderRadius:Platform.OS == 'ios' ? 17 : 15,
        // fontcolor:'#666666',

    // 内左边距
        paddingLeft:Platform.OS == 'ios' ? 14 : 12,
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
