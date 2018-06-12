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
    
    registerUser(url, data) {
        return fetch(url, {
            body: JSON.stringify(data), // must match 'Content-Type' header
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, same-origin, *omit
            headers: {
              'user-agent': 'Mozilla/4.0 MDN Example',
              'content-type': 'application/json'
            },
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // *client, no-referrer
          })
          .then(response => response.json()) // parses response to JSON
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

                                this.registerUser('http://192.168.43.239:3000/users/register',
                                {
                                    "username": "shashidhar",
                                    "password": "mypassword"
                                })
                                .then(
                                    data => console.log(data)
                                ) // JSON from `response.json()` call
                                .catch(
                                    error => console.error(error)
                                )
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
