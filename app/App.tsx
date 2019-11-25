import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import {createAppContainer} from 'react-navigation';
import {AppNavigator} from './Navigation';

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return ( <AppContainer /> );
}
