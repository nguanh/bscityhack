import React from 'react';
import {ToastAndroid} from 'react-native';
import {NavigationParams, NavigationScreenProp, NavigationState} from 'react-navigation';
import {
    Container,
    Button,
    Input,
    Text,
    Item,
} from "native-base";
import {addItem} from '../store/actions/itemActions';
import {connect} from 'react-redux';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    addItem: (name: string) => void;
}

interface State {
    text: string;
}

class DetailsScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state ={
            text: "",
        };
    }
    static navigationOptions = {
        title: 'Details',
    };

    private setText(text: string) {
        this.setState({
            text,
        });
    }

    private addItem() {
        const item = {
            name: this.state.text,
        };
        this.props.addItem(item);
        this.setState({
            text: "",
        });
        ToastAndroid.show("Item added", ToastAndroid.SHORT);
    }


    render() {
        return (
            <Container>
                <Button
                    onPress={() => this.props.navigation.navigate('Home')}
                >
                    <Text>Go To Home </Text>
                </Button>
                <Text>New Task:</Text>
                <Item>
                    <Input value={this.state.text} onChangeText={this.setText.bind(this)} />
                </Item>
                <Button
                    onPress={this.addItem.bind(this)}
                >
                    <Text>ADD</Text>
                </Button>

            </Container>
        );
    }
}

export default connect(null, {addItem})(DetailsScreen)
