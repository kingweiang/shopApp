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
    ScrollView,
    ListView,
    Image
} from 'react-native';

var Dimensions = require('Dimensions');
var {width}=Dimensions.get('window');
var TopMenu = require('../../LocalData/TopMenu.json')
var ToplistView = require('./XMGTopListView')

var TopView=React.createClass({
    getInitialState(){
        return{
            activePage:0
        }
    },
    render() {
        return (
            <View style={styles.container}>
                {/*内容部分*/}
                <ScrollView
                    horizontal={true}      // 横向显示
                    pagingEnabled={true}    // 设置页面
                    showsHorizontalScrollIndicator={false}  // 隐藏横向滚动条
                    onMomentumScrollEnd ={this.onScrollAnimationEnd}  // 当一帧滚动完成
                >
                    {this.renderScrollView()}
                </ScrollView>

                {/*页码部分*/}
                <View style={styles.indicatorStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    },

    onScrollAnimationEnd(e){
        // 获取当前页码
        var currentPage =Math.floor(e.nativeEvent.contentOffset.x/width);

        this.setState({
            activePage:currentPage
        })
    },

    renderScrollView(){
        // 组件数组
        var itemArr = [];
        // 颜色数组-->数据数组
        var dataArr =TopMenu.data;
        for (var i=0;i<dataArr.length;i++){
            itemArr.push(
              <ToplistView key={i}
                dataArr ={dataArr[i]}
              />
            );
        }
        return itemArr;
    },

    renderIndicator(){
        // 指示器数组
        var indicatorArr = [],style;
        for (var i=0 ; i<4 ; i++){
            style=(i===this.state.activePage)?{color:'orange'}:{color:'gray'}
            indicatorArr.push(
                <Text key={i} style={[{fontSize:25},style]}>&bull;</Text>
            )
        }
        return indicatorArr;
    }

});

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
    },
    indicatorStyle:{
        flexDirection:'row',
        justifyContent:'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

module.exports = TopView;
