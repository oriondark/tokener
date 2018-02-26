import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Icon, StyleProvider, Header, Left, Body, Title, Button, Right, Form, Input, Radio, Item, Label, ListItem } from 'native-base';
import getTheme from 'firstapp/native-base-theme/components';
import material from 'firstapp/native-base-theme/variables/material';
export default class AvailableRewards extends Component {
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
                            <Title>Challenge</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content>
                        <Form>
                            <Card>
                                <CardItem header>
                                    <Left>
                                        <Text>Challenge Friend</Text>
                                    </Left>
                                    <Body>
                                        <Text note>Gift Tokens for Work</Text>
                                        <Text note>Or Better yet, whip your friends into shape</Text>
                                    </Body>
                                </CardItem>
                            </Card>

                            <Item fixedLabel>
                                <Label>Email</Label>
                                <Input />
                            </Item>
                            <Item fixedLabel>
                                <Label>Cent Reward</Label>
                                <Input>5</Input>
                            </Item>

                            <ListItem>
                                <Text>30 minute Workout</Text>
                                <Right>
                                    <Radio selected={false} />
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Text>100 pushups</Text>
                                <Right>
                                    <Radio selected={true} />
                                </Right>
                            </ListItem>
                            <Button><Text> 7 tokens in your wallet</Text></Button>
                        </Form>
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}