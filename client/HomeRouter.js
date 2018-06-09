import { createStackNavigator } from 'react-navigation';
import { FarmList } from './screens/FarmList';
import { FarmDetails } from './screens/FarmDetails';

export const HomeRouter = createStackNavigator(
    {
        'Home': FarmList,
        'FarmDetails': FarmDetails
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#1d6dba',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }
);