import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearchResultsTabNavigator from '../navigation/SearchResultsTabNavigator';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen 
            name={'Welcome'}
            component={HomeScreen}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen 
            name={'Search Results'}
            component={SearchResultsTabNavigator}
            options={{
                title: 'Search Your Destination'
            }}
        />
            
        </Stack.Navigator>
    )
}
 
export default Router;
