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
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

var BottomCommonCell = require('./XMGBottomCommonCell')
var Home_D5 = require('../../LocalData/XMG_Home_D5.json')

var ShopCenter=React.createClass({
    getDefaultProps(){
        return{
            popToHomeView:null,
        }
    },
    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <BottomCommonCell
                    leftIcon="gw"
                leftTitle="购物中心"
                rightTitle={Home_D5.count}
                />
                {/*下部分*/}
                <ScrollView style={styles.scrollViewStyle}
                    horizontal={true} // 横向展示
                    showsHorizontalScrollIndicator={false} //删除滚动条
                >
                    {this.renderAllItem()}
                </ScrollView>
            </View>
        );
    },
    // 返回下部分所有的Item
    renderAllItem(){
        var itemArr = [];
        var shopData = Home_D5.data;
        for(var i = 0;i<shopData.length;i++){
            var data =shopData[i];
            itemArr.push(
                <ShopCenterItem
                    shopImage={data.img}
                    shopSale={data.showtext.text}
                    shopName={data.name}
                    detailurl={data.detailurl}
                    popTopShopCenter={(url)=>this.popToHome(url)}
                    key={i}
                />
            )
        }
        return itemArr;
    },
    popToHome(url){
        if(this.props.popToHomeView == null) return;
        this.props.popToHomeView(url)
    }
});

// 子组件，每一个商场
var ShopCenterItem=React.createClass({
    getDefaultProps(){
        return{
            shopImage:'',
            shopSale:'',
            shopName:'',
            detailurl:'',
            popTopShopCenter:null
        }
    },
    render(){
        return(
            <TouchableOpacity onPress={()=>this.clickItem(this.props.detailurl)}>
                <View style = {styles.itemViewStyle}>
                    <Image source={{uri:this.props.shopImage}} style={styles.imageStyle}/>
                    <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
                    <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
                </View>
            </TouchableOpacity>
        )
    },

    clickItem(url){
        if(this.props.detailurl == null) return;
        this.props.popTopShopCenter(url)
    }
});

const styles = StyleSheet.create({
    container: {
        marginTop:Platform.OS=='ios'?10:8,
        backgroundColor: '#F5FCFF',
    },
    imageStyle: {
        width:120,
        height:80,
        borderRadius:8,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    scrollViewStyle:{
        flexDirection:'row',
        backgroundColor:'white',
        padding:10,
    },
    itemViewStyle:{
        margin:8,
    },
    shopSaleStyle:{
        //绝对定位
        position:'absolute',
        left:0,
        bottom:Platform.OS=='ios'?20:24,
        backgroundColor:'orange',
        color:'white',
        padding:2,
        fontSize:Platform.OS=='ios'?11:10,
        borderTopLeftRadius:4,
        borderTopRightRadius:4,
        borderBottomLeftRadius:4,
        borderBottomRightRadius:4,

    },
    shopNameStyle:{
        textAlign:'center',
        marginTop:3,
    }
});

module.exports = ShopCenter;
