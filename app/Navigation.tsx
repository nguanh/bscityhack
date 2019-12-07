import { createStackNavigator, } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import QRScreen from './src/screens/QRScreen';


export const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
    QR: QRScreen,
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

