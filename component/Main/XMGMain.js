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
                {this.renderTabBarItem('首页','icon_tabbar_homepage','icon_tabbar_homepage_selected','home',Home,'首页')}
                {/*商家*/}
                {this.renderTabBarItem('商家','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','shop',Shop,'商家')}
                {/*我的*/}
                {this.renderTabBarItem('我的','icon_tabbar_mine','icon_tabbar_mine_selected','mine',Mine,'我的')}
                {/*更多*/}
                {this.renderTabBarItem('更多','icon_tabbar_misc','icon_tabbar_misc_selected','more',More,'更多','3')}

            </TabNavigator>
        );
    },

    renderTabBarItem(title,iconName,selectedIconName,selectedTab,componentName,componentTitle,badg){
        return(
            <TabNavigator.Item
                title = {title}  //  传递变量用大括号
                renderIcon={()=> <Image source={{uri:iconName}} style={styles.iconStyle}/>}
                renderSelectedIcon={() => <Image source={{uri:selectedIconName}} style={styles.iconStyle}/>}
                selected={this.state.selectedTab === selectedTab}
                onPress={() => this.setState({ selectedTab: selectedTab})}
                selectedTitleStyle={styles.selectedTitleStyle}
                badgeText = {badg}

            >
                <Navigator
                    initialRoute={{name:componentTitle,component:componentName}}
                    configureScene={()=>{
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route,navigator)=>{
                        let Component = route.component;
                        return <Component {...route.passProps} navigator={navigator} />;
                    }}
                />
            </TabNavigator.Item>
        )
    },
});

const styles = StyleSheet.create({
    iconStyle:{
        width: Platform.OS==='ios'?30:25,
        height:Platform.OS==='ios'?30:25
    },
    selectedTitleStyle:{
        color:'orange',
    }
});

module.exports = Main;
