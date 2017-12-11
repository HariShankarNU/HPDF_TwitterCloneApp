import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

import { Image } from 'react-native';

export default class homescreen extends Component {
    static navigationOptions = {
        
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-home" style={{color: tintColor ,fontSize:30}} />     
        
        )
    }
    render() {
        return (
          <Container>
            <Header >
              <Item>
                <Text>
                    Homescreen
                    </Text>
              </Item>
             
            </Header>
          </Container>
        );
      }
    }