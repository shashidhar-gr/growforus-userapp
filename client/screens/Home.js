import React, { Component } from 'react';
import { Text,View, Button } from 'react-native';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <View>
                <Text>This is home screen</Text>
            </View>
        );
    }
}

export default Home;