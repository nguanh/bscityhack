import React from 'react';
import 'react-native-gesture-handler'
import {createAppContainer} from 'react-navigation';
import {AppNavigator} from './Navigation';
import {Provider} from 'react-redux';
import store from './src/store/store';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import {View} from 'react-native';

const AppContainer = createAppContainer(AppNavigator);

interface Props {

}

interface State {
    isReady: boolean
}
export default class App extends React.Component<Props, State>{
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
        };
    }
    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.setState({ isReady: true });
    }
    public render() {
        if (!this.state.isReady) {
            return (<View />);
        }
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>);
    }

}
