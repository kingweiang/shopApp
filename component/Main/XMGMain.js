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
    Platform    // 用来判断安卓和IOS平台
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import {Navigator} from 'react-native-deprecated-custom-components'
var Home = require('../Home/XMGHome');
var Shop = require('../Shop/XMGShop');
var More = require('../More/XMGMore');
var Mine = require('../Mine/XMGMine');

var Main=React.createClass({
    getInitialState(){
        return{
            selectedTab:'home'
        }
    },
    render() {
        return (
            <TabNavigator>
                {/*首页*/}
                <TabNavigator.Item
                    title = "首页"
                    renderIcon={()=> <Image source={{uri:'icon_tabbar_homepage'}} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_homepage_selected'}} style={styles.iconStyle}/>}
                    selected={this.state.selectedTab === 'home'}
                    onPress={() => this.setState({ selectedTab: 'home' })}
                >
                    <Navigator
                        initialRoute={{name:"首页",component:Home}}
                        configureScene={()=>{
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator} />;
                        }}
                    />
                </TabNavigator.Item>
                {/*商家*/}
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'shop'}
                    onPress={() => this.setState({ selectedTab: 'shop' })}
                    title = "商家"
                    renderIcon={()=> <Image source={{uri:'icon_tabbar_merchant_normal'}} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_merchant_selected'}} style={styles.iconStyle}/>}
                    >
                    <Navigator
                        initialRoute={{name:"商家",component:Shop}}
                        configureScene={()=>{
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator} />;
                        }}
                    />
                </TabNavigator.Item>
                {/*我的*/}
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'mine'}
                    onPress={() => this.setState({ selectedTab: 'mine' })}
                    title = "我的"
                    renderIcon={()=> <Image source={{uri:'icon_tabbar_mine'}} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_mine_selected'}} style={styles.iconStyle}/>}
                    >
                    <Navigator
                        initialRoute={{name:"我的",component:Mine}}
                        configureScene={()=>{
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator} />;
                        }}
                    />
                </TabNavigator.Item>
                {/*更多*/}
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'misc'}
                    onPress={() => this.setState({ selectedTab: 'misc' })}
                    title = "更多"
                    renderIcon={()=> <Image source={{uri:'icon_tabbar_misc'}} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_misc_selected'}} style={styles.iconStyle}/>}
                    >
                    <Navigator
                        initialRoute={{name:"更多",component:More}}
                        configureScene={()=>{
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator} />;
                        }}
                    />
                </TabNavigator.Item>

            </TabNavigator>
        );
    }
});

const styles = StyleSheet.create({
    iconStyle:{
        width: Platform.OS==='ios'?30:25,
        height:Platform.OS==='ios'?30:25
    }
});

module.exports = Main;
