import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchResultsScreen from '../screens/SearchResults';

Tab = createMaterialTopTabNavigator();


const SearchResultsTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={"list"} component={SearchResultsScreen} />
            <Tab.Screen name={'map'} component={SearchResultsScreen} />
        </Tab.Navigator>
    )
}

export default SearchResultsTabNavigator;
