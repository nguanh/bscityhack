import React from 'react';
import 'react-native-gesture-handler'
import {createAppContainer} from 'react-navigation';
import {AppNavigator} from './Navigation';
import {Provider} from 'react-redux';
import store from './src/store/store';

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
      <Provider store={store}>
        <AppContainer />
      </Provider>);
}
