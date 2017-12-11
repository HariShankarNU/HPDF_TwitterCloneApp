/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Text,View} from 'react-native'

import {TabNavigator, DrawerNavigator, StackNavigator} from 'react-navigation'
import homescreen from './src/homescreen/homescreen'
import search from './src/search/search'
import notification from './src/notification/notification'
import message from './src/message/message'
import profile from './src/profile'

var navigator =TabNavigator({
  tab1:{screen:homescreen},
  tab2:{screen:search},
  tab3:{screen:notification},
  tab4:{screen:message}
},{
  swipeEnabled: true,
  tabBarOptions:{
    activeTintColor:'blue',
    activeBackgroundColor:'black',
    inactiveTintColor:'grey',
    inactiveBackgroundColor:'black',
    showLabel:false,
    showIcon:'true',
    labelStyle:{
      fontSize:40
    },
    style: {
      backgroundColor: 'white',
    },
  }
}

);
var stack =StackNavigator(
  
    {mytab:{screen:navigator,
    navigationOptions:{title:'Twitter'}
      
    },}
  )
  
var drawer=DrawerNavigator(

  {
    Home:{screen:stack,
      navigationOptions: {
        drawerLabel: 'Home',
      },
    },
    Profile:{screen:profile},
    List:{screen:profile},
    Moments:{screen:profile}
    

  }
)

navigator.navigationOptions={
  title:"tab example"
};
export default drawer;
