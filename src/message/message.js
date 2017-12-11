import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View,Image } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
export default class message extends Component {
    static navigationOptions ={
       
        tabBarIcon: ({ tintColor }) => (
            <Image style={{ width: 22, height: 22 }} 
            source={require('../images/message1600.png')} />
      )
    }
  render() {
    return (
      <Container>
        <Header >
          <Item>
            <Text>
                Messages
                </Text>
          </Item>
         
        </Header>
      </Container>
    );
  }
}

