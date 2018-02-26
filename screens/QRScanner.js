import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Text, Container, Header, Title, Content, Footer, FooterTab, Button, Icon, StyleProvider } from 'native-base';
import { BarCodeScanner, Permissions } from 'expo';
import getTheme from 'firstapp/native-base-theme/components';
import material from 'firstapp/native-base-theme/variables/material';

export default class QRScanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //loading: true, 
            hasCameraPermission: null,
            lastScannedUrl: null,
        };
    }

    componentDidMount() {
        this._requestCameraPermission();
    }

    _requestCameraPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission: status === 'granted',
        });
    };

    _handleBarCodeRead = result => {
        if (result.data !== this.state.lastScannedUrl) {
            //LayoutAnimation.spring();
            console.log(result.data);
            this.setState({ lastScannedUrl: result.data });

        }
    };

    async componentWillMount() {
        // await Expo.Font.loadAsync({ 
        //   Roboto: require("./node_modules/native-base/Fonts/Roboto.ttf"),
        //   Roboto_medium: require("./node_modules/native-base/Fonts/Roboto_medium.ttf"),
        //   Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        // });
        this.setState({ loading: false });
    }

    render() {

        if (this.state.loading) {
            return <Expo.AppLoading />;
        }
        return (
            <StyleProvider> style={getTheme(material)}>
                    <Container>
                    <Header>
                        <Title>Header</Title>
                    </Header>
                    <Content>
                        {this.state.hasCameraPermission === null
                            ? <Text>Requesting for camera permission</Text>
                            : this.state.hasCameraPermission === false
                                ? <Text style={{ color: '#fff' }}>
                                    Camera permission is not granted
                                    </Text>
                                : <BarCodeScanner
                                    onBarCodeRead={this._handleBarCodeRead}
                                    style={{
                                        height: Dimensions.get('window').height,
                                        width: Dimensions.get('window').width,
                                    }}
                                />}
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
