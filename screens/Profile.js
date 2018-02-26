import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Icon, StyleProvider, Header, Left, Body, Title, Button, Right } from 'native-base';
import getTheme from 'firstapp/native-base-theme/components';
import material from 'firstapp/native-base-theme/variables/material';
import { Image, View } from "react-native";
export default class Profile extends Component {
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
                            <Title>Profile</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content>
                        <Card>
                            <CardItem header><Text>@SomeUser</Text></CardItem>
                            <CardItem>
                                <Image source={require('firstapp/img/cents.png')}
                                    style={{
                                        width: null,
                                        height: 45
                                    }} />
                                <Text>100 Total Tokens</Text>
                            </CardItem>
                            <CardItem>
                                <Icon name="walk" style={{ color: '#DD5044' }} />
                                <Text>Completed 7 workouts</Text>
                            </CardItem>
                            <CardItem>
                                <Icon name="pulse" style={{ color: '#DD5044' }} />
                                <Text>Followed 7 medical plans</Text>
                            </CardItem>
                            <CardItem>
                                <Icon name="chatbubbles" style={{ color: '#DD5044' }} />
                                <Text>Challenged 14 people</Text>
                            </CardItem>
                            <CardItem footer><Text>Health Initiate</Text></CardItem>
                        </Card>
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}