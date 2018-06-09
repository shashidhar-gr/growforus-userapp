import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { onSignOut } from "../auth";

export class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>This is Profile screen, user settings list will come here.</Text>
                <Button
                    backgroundColor = "#03A9F4"
                    title = "Logout"
                    onPress = { () => onSignOut().then(() => this.props.navigation.navigate("SignedOut")) }
                />
            </View>
        );
    }
}
