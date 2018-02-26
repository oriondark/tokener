// import React, { Component } from 'react';
// import { Image } from 'react-native';
// //import { Container, Icon, View, DeckSwiper, Card, CardItem, Thumbnail, Text } from 'native-base';
// import {StyleProvider, Container,View, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right,DeckSwiper } from 'native-base';
import React, { Component } from "react";
import { Image, View } from "react-native";
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
    StyleProvider
} from "native-base";
//import styles from "./styles";

import getTheme from 'firstapp/native-base-theme/components';
import material from 'firstapp/native-base-theme/variables/material';
const cards = [
    {
        text: 'YMCA Workout',
        name: '3 Tokens',
        image: require('firstapp/img/ymca.png'),
        iconname: "walk",
        note: "Running, Jogging, Hopping, heck, just being there is enough!"
    },
    {
        text: 'Took Meds',
        name: '5 Tokens',
        image: require('firstapp/img/shealth.png'),
        note: "Following the doctor helps the doctor help you... oh, and tokens!",
        iconname: "pulse"
    },
    {
        text: 'Workout',
        name: '5 Tokens',
        image: require('firstapp/img/ggym.png'),
        note: "Running, Jogging, Hopping, heck, just being there is enough!",
        iconname: "walk"
    }

];


export default class ClaimedRewards extends Component {
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
                            <Title>Claimed Rewards</Title>
                        </Body>
                        <Right />
                    </Header>

                    <View style={{ flex: 1, padding: 12 }}>
                        <DeckSwiper
                            ref={mr => (this._deckSwiper = mr)}
                            dataSource={cards}
                            looping={true}
                            renderEmpty={() =>
                                <View style={{ alignSelf: "center" }}>
                                    <Text>Over</Text>
                                </View>}
                            renderItem={item =>
                                <Card style={{ elevation: 3 }}>
                                    <CardItem>
                                        <Left>
                                            <Icon name={item.iconname} />
                                            <Body>
                                                <Text>
                                                    {item.text}
                                                </Text>
                                                <Text note>{item.note}</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem cardBody>
                                        <Image
                                            style={{
                                                resizeMode: "cover",
                                                width: null,
                                                flex: 1,
                                                height: 300
                                            }}
                                            source={item.image}
                                        />
                                    </CardItem>
                                    <CardItem>
                                        <Icon name={"medal"} style={{ color: "#ED4A6A" }} />
                                        <Text>
                                            {item.name}
                                        </Text>
                                    </CardItem>
                                </Card>}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            flex: 1,
                            position: "absolute",
                            bottom: 50,
                            left: 0,
                            right: 0,
                            justifyContent: "space-between",
                            padding: 15
                        }}
                    >
                     <Image source={require('firstapp/img/cents.png')}
                                style={{
                                    width: 45,
                                    
                                    height: 45
                                }}

                            />
                             <Text style={{color:'red',fontWeight:'bold'}}>100</Text>
                            
                             <Image source={require('firstapp/img/cents.png')}
                                style={{
                                    width: 45,
                                    
                                    height: 45
                                }}

                            />   
                        {/* <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
                           
                           
                        </Button>
                        <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
                            <Text>Swipe Right</Text>
                            <Icon name="arrow-forward" />
                        </Button> */}
                    </View>
                </Container>
            </StyleProvider>
        );
    }
}

// const styles = StyleSheet.create({
//     container: {
//         borderRadius: 4,
//         borderWidth: 0.5,
//         borderColor: '#d6d7da',
//         backgroundColor: "#fff"
//     }
// });