import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationParams, NavigationScreenProp, NavigationState} from 'react-navigation';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class DetailsScreen extends React.Component<Props> {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.push('Details')}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}
