import React, { Component } from 'react';
import { Text, AsyncStorage } from 'react-native';
import { Home } from './Home';
import { Login } from './Login';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false
        };
    }

    componentWillMount() {
        //this.props.loginIfo = await AsyncStorage.getItem('isLoggedIn');
        this.props.loginIfo = this.checkLoginStatus();
        this.setState({ isReady: true });

        if (this.props.loginIfo) {
            this.props.navigation.navigate('Home');
        }
        else {
            this.props.navigation.navigate('Login');
        }
    }

    async checkLoginStatus() {
        await AsyncStorage.getItem('isLoggedIn');
    }

    render() {
        return <Expo.AppLoading />;
    }
}

export default LandingPage;