import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View,Image } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

export default class notification extends Component {
   
    static navigationOptions ={
        tabBarLabel:'Taib1',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-notifications" size={30} style={{color: tintColor}} />     
        )
    }
    render() {
      return (
        <Container>
          <Header >
            <Item>
              <Text>
                  Notification
                  </Text>
            </Item>
           
          </Header>
        </Container>
      );
    }
  }
  