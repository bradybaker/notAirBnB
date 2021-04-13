import React, { useState }from 'react';
import {View, TextInput, FlatList, Text, Pressable, processColor} from 'react-native';
import styles from './styles';
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Config from 'react-native-config'
 
const DestinationSearchScreen = () => {
    
    const navigation = useNavigation();
    const [inputText, setInputText] = useState('');
    const API_KEY = Config.GOOGLE_API_KEY

    return (
        <View style={styles.container}>
          {/* Input */}
          <View style={{height: 500}}>
              <GooglePlacesAutocomplete
            placeholder='Where are you going?'
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
            }}
            query={{
              key: `${API_KEY}`,
              language: 'en',
              types: '(cities)',
            }}
          />
          </View>


          


            <TextInput 
              style={styles.textInput}
              placeholder="Where are you going?"
              value={inputText}
              onChangeText={setInputText}
            />

          {/* List of destinations */}
            <FlatList
              data={searchResults}
              renderItem={(({item}) => (
                <Pressable onPress={() => navigation.navigate('Guests')} style={styles.row}>
                  <View style={styles.iconContainer}>
                    <Entypo name={"location-pin"} size={25} />
                  </View>
                  <Text style={styles.locationText}>{item.description}</Text>
                </Pressable>
              ))}
            />
        </View>
    )
}

export default DestinationSearchScreen;