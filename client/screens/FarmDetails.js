import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, CheckBox, View, ListItem } from 'native-base';
import { Facilities } from './Facilities';

export class FarmDetails extends Component {

    static navigationOptions = {
        title: 'Farm Details',
    };

    render() {

        const { picture, name, email, phone, login, dob, location, farmLandName, farmPictureMain, farmDescription } = this.props.navigation.state.params;

        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Body>
                                <Image source={{ uri: farmPictureMain }} style={{ height: 200, width: 320 }} />
                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                                    {farmLandName}
                                </Text>
                                <Text>
                                    {location.street}, {location.city}
                                </Text>
                                <Text />
                                <Text />
                                <Text>
                                    {farmDescription}
                                </Text>
                                <Text />
                                <Text />
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                    Facilities includes
                                </Text>
                                <Facilities />
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}