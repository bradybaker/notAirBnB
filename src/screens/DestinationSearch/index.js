import React, { useState }from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';
import searchResults from '../../../assets/data/search';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Config from 'react-native-config'
import SuggestionRow from './SuggestionRow'
 
const DestinationSearchScreen = () => {
    
    const navigation = useNavigation();
    const API_KEY = Config.GOOGLE_API_KEY

    return (
        <View style={styles.container}>
              <GooglePlacesAutocomplete
            placeholder='Where are you going?'
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
              navigation.navigate('Guests');
            }}
            fetchDetails
            styles={{
              textInput: styles.textInput
            }}
            query={{
              key: `${API_KEY}`,
              language: 'en',
              types: '(cities)',
            }}
            suppressDefaultStyles
            renderRow={(item) => <SuggestionRow item={item} />}
          />
        </View>
    )
}

export default DestinationSearchScreen;