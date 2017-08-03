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
    ListView,
    TouchableOpacity,
    Platform
} from 'react-native';

var Dimensions = require('Dimensions');
var {width}=Dimensions.get('window');

var TopListView=React.createClass({
    getDefaultProps(){
        return{
            dataArr:[]
        }
    },

    getInitialState(){
        // 创建数据源
        var ds = new ListView.DataSource({rowHasChanged:(row1,row2)=>row1!==row2});
      return{
        dataSource:ds.cloneWithRows(this.props.dataArr)
      }
    },

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={false}  //  禁止上下滚动
            />
        );
    },

    renderRow(rowdata){
        return(
        <TouchableOpacity onPress={()=>{alert('0')}}>
            <View style={styles.cellStyle}>
                <Image source={{uri:rowdata.image}} style={{width:Platform.OS == 'ios' ?52:50,height:Platform.OS == 'ios' ?52:50}}/>
                <Text style={{fontSize:Platform.OS=='ios'?12:11,color:'gray'}}>{rowdata.title}</Text>
            </View>
        </TouchableOpacity>
        );
    },
});

const styles = StyleSheet.create({
    contentViewStyle:{
        // cell 在同一行显示
        flexWrap:'wrap',
        //  主轴方向
        flexDirection:'row',
        width:width,
    },
    cellStyle:{
        width:70,
        height:Platform.OS == 'ios' ?70:59,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginLeft:(width-70*5)/(5+1),
        marginBottom:3,
       // backgroundColor:'orange'
    }
});

module.exports = TopListView;
