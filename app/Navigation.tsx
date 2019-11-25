import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';


export const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
}, {
    initialRouteName: 'Home',
});

// TODO part 2 https://reactnavigation.org/docs/en/navigating.html
