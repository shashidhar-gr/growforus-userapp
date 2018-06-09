import React, { Component } from 'react';
import { onSignIn } from '../auth';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, View } from 'native-base';

export class Registration extends Component {
    constructor() {
        super();
        this.state = {
            isReady: false
        };
    }

    static navigationOptions = {
        title: 'GrowForUs :)',
    };

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });
        this.setState({ isReady: true });
    }
    
    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Confirm Password</Label>
                            <Input />
                        </Item>
                        <Button primary block onPress={
                            () => {
                                onSignIn().then(() => this.props.navigation.navigate("SignedIn"));
                            }
                        }>
                            <Text> Register </Text>
                        </Button>
                        <Button primary block onPress={
                            () => {
                                this.props.navigation.navigate('SignIn');
                            }
                        }>
                            <Text> Login </Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}
