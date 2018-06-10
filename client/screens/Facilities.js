import React, { Component } from 'react';
import { CheckBox, Content, List, ListItem, Body, Text } from 'native-base';

export class Facilities extends Component {
    render() {
        return (
            <Content>
                <List>
                    <ListItem>
                        <CheckBox checked={true} />
                        <Text>  Watering</Text>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={true} />
                        <Text>  Sowing</Text>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={true} />
                        <Text>  De-weeding</Text>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={true} />
                        <Text>  Harvesting</Text>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={true} />
                        <Text> Home Delivery</Text>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={true} />
                        <Text> Seeds</Text>
                    </ListItem>
                </List>
            </Content>
        );
    }
}

/*
<Content>
                <Body>
                    <CheckBox checked={true} />
                    <Text>Watering</Text>
                </Body>
            </Content>
*/

/*
<List>
                    <ListItem>
                        <CheckBox checked={true} />
                        <Body>
                            <Text>Watering</Text>
                        </Body>
                    </ListItem>
                </List>
*/