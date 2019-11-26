import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';


export const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
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

// TODO part 2 https://reactnavigation.org/docs/en/navigating.html
