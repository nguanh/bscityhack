import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationScreenProp, NavigationState, NavigationParams} from 'react-navigation';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class HomeScreen extends React.Component<Props> {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button title={"Go To Details"} onPress={() => this.props.navigation.navigate("Details")} />
            </View>
        );
    }
}
