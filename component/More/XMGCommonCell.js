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
    TouchableOpacity,
    Switch
} from 'react-native';

var CommonCell=React.createClass({
    getDefaultProps(){
        return{
            title:'',
            isSwitch:false,
            rightTitle:''
        }
    },
    getInitialState(){
        return{
            isOn:false,
        }
    },
    render() {
        return (
        <TouchableOpacity onPress={()=>{alert('点击了')}}>
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {/*左边*/}
                    {this.props.title}
                </Text>
                {/*右边*/}
                {this.renderRightView()}
            </View>
        </TouchableOpacity>
        );
    },

    // cell 右边显示的内容控制
    renderRightView(){
        if (this.props.isSwitch){
            return(
                <Switch value={this.state.isOn == true} onValueChange={()=>{this.setState({isOn:!this.state.isOn})}} style={{marginRight:Platform.OS == 'ios' ? 8 : 0,}}/>
            )
        }else {
            return(
            <View style={{flexDirection:'row',alignItems:'center'}}>
                {this.rightTitle()}
                <Image source={{uri:'icon_cell_rightArrow'}} style={{width:Platform.OS == 'ios' ? 10 : 8,height:Platform.OS == 'ios' ? 13 : 15, marginRight:8,}}/>
            </View>
            )
        }
    },

    rightTitle(){
        if(this.props.rightTitle.length>0){
            return(
                <Text style={{color:'gray',marginRight:3}}>{this.props.rightTitle}</Text>
            )
        }
    }
});

const styles = StyleSheet.create({
    container: {

        height:40,
        backgroundColor:'white',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5,

        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    welcome: {
        fontSize: Platform.OS == 'ios' ? 16 : 14,
        textAlign: 'center',
        margin: 10,
        marginLeft:8,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

module.exports = CommonCell;
