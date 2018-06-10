import React, { Component } from 'react';
import { Image } from 'react-native';
import { users } from '../config/data'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export class FarmList extends Component {

    static navigationOptions = {
        title: 'Farm List',
    };
    
    onLearnMore = (user) => {
        this.props.navigation.navigate('FarmDetails', { ...user });
    };

    render() {
        return (
            <Container>
                <Content>
                    {users.map((user) => (
                        <Card key = { user.login.username }>
                            <CardItem button onPress = { () => this.onLearnMore(user) }>
                                <Left>
                                    <Thumbnail source={{ uri: user.picture.thumbnail }} />
                                    <Body>
                                        <Text>{user.name.first} {user.name.last}</Text>
                                        <Text note>{user.farmLandName}</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody button onPress = { () => this.onLearnMore(user) }>
                                <Image source={{ uri: user.farmPictureMain }} style={{ height: 200, width: 300, flex: 1 }} />
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Button transparent>
                                        <Icon active name="thumbs-up" />
                                        <Text>12 Likes</Text>
                                    </Button>
                                </Left>
                                <Body>
                                    <Button transparent>
                                        <Icon active name="chatbubbles" />
                                        <Text>10 comments</Text>
                                    </Button>
                                </Body>
                            </CardItem>
                        </Card>
                    ))}
                </Content>
            </Container>
        );
    }

}