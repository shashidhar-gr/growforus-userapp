import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { onSignIn } from '../auth';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

export class Login extends Component {

  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  static navigationOptions = {
    title: 'Uesr Login',
  };

  componentWillMount() {
    /*await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });*/
    this.setState({ isReady: true });
  }

  async setLoginStatus() {
    await AsyncStorage.setItem('isLoggedIn', true);
  }

  render() {
    /*if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }*/
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button primary block onPress={
              () => {
                onSignIn().then(() => this.props.navigation.navigate("SignedIn"));
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