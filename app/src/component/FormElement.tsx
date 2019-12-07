import React from 'react';
import {Text, ListItem, Left} from 'native-base';



interface Props {
    text: string;
}
export default class FormElement extends React.Component<Props> {

    public render() {
        return (
            <ListItem>
                <Left>
                    <Text>{this.props.text}</Text>
                </Left>
                {this.props.children}
            </ListItem>
        );
    }
}
