import React, { Component } from "react";
import { AppRegistry, Image, StatusBar, ImageBackground } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
const routes = ["AvailableRewards", "ClaimedRewards", "Challenge", "Profile"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
        <ImageBackground
            source={require('firstapp/img/drawerback.jpg')}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}>
            <Image
              square
              style={{ height: 80, width: 70 }}
              source={require('firstapp/img/cents.png')}
            />
          </ImageBackground>
            
          <List
            dataArray={routes}
          renderRow={data => {
            return (
              <ListItem
                button
                onPress={() => this.props.navigation.navigate(data)}>
                <Text>{data}</Text>
              </ListItem>
            );
          }}
          />
        </Content>
      </Container>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'green',
    width: 600
  },
  textContent: {
    fontSize: 20,
    color: 'red',
  },
};