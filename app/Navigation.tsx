import React from 'react';
import { createStackNavigator, } from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import QRGeneratorScreen from './src/screens/QRGeneratorScreen';
import ProcedureScreen from './src/screens/ProcedureScreen';
import InformationScreen from './src/screens/InformationScreen';
import CheckScreen from './src/screens/CheckScreen';
import FormScreen from './src/screens/FormScreen';
import QRReaderScreen from './src/screens/QRReaderScreen';

const TabBarComponent = props => <BottomTabBar {...props} />;

const MainNavigator = createBottomTabNavigator({
    Information: InformationScreen,
    Checklist: CheckScreen,
    Forms: FormScreen,
},  {
    tabBarComponent: props => (
        <TabBarComponent {...props} style={{ borderTopColor: '#605F60' }} />
    ),
});

export const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
    QR: QRGeneratorScreen,
    PROCEDURE: ProcedureScreen,
    Main: MainNavigator,
    Reader: QRReaderScreen,
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
});


