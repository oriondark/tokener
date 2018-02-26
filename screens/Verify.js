import React, { Component } from 'react';
//import { Container, Content, Card, CardItem, Text, Icon, StyleProvider, Header, Left, Body, Title, Button, Right } from 'native-base';
import {
    Container,
    Header,
    Title,
    Button,
    IconNB,
    DeckSwiper,
    Card,
    CardItem,
    Icon,
    Thumbnail,
    Text,
    Left,
    Right,
    Body,
    StyleProvider,
    Content
} from "native-base";

import getTheme from 'firstapp/native-base-theme/components';
import material from 'firstapp/native-base-theme/variables/material';
import { Image, View } from "react-native";

const mydata = [
    {
        type: 'workout',
        typenote: 'Just being there is enough!',
        typeicon: 'walk',
        typetokens: '3',
        typereddem: 'once per day',
        name: 'YMCA',
        image: require('firstapp/img/ymca.png'),
        latlong: '35.0565357, -85.3134157}',
        address: '301 West 6th St Chattanooga TN'
    },
    {
        type: 'workout',
        typenote: 'Just being there is enough',
        typeicon: 'walk',
        typetokens: '3',
        typereddem: 'once per day',
        name: 'Golds Gym',
        image: require('firstapp/img/ggym.png'),
        latlong: '{35.0517089, -85.3829881}',
        address: '210 West 4th St Chattanooga  TN'
    },
    {
        type: 'workout',
        typenote: 'Running, Jogging, Hopping, heck, just being there is enough!',
        typeicon: 'walk',
        typetokens: '3',
        typereddem: 'once per day',
        name: 'Fitbit',
        image: require('firstapp/img/fitbit.jpg'),
        latlong: '123',
        address: '456'
    }
    , {
        type: 'meds',
        typenote: 'Keep the doc and your insurance happy!',
        typeicon: 'pulse',
        typetokens: '5',
        typereddem: 'once per day',
        name: 'SlipHealth',
        image: require('firstapp/img/shealth.png'),
        latlong: '',
        address: ''
    }
];
export default class Verify extends Component {
    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Container>
                    <Header>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                                <Icon name="menu" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>YMCA </Text>
                        </Body>
                        <Right />
                    </Header>
                    <Content>
                        <Card>
                            <CardItem header>
                                <Thumbnail source={data.image} />
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}