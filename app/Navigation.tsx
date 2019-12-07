import { createStackNavigator, } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import QRGeneratorScreen from './src/screens/QRGeneratorScreen';


export const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
    QR: QRGeneratorScreen,
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

