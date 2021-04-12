import React from 'react';
import { 
    View, 
    Text, 
    ImageBackground, 
    Pressable } from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {
  const navigation = useNavigation();

    return (
        <View>
            <Pressable 
              style={styles.searchBtn}
              onPress={() => navigation.navigate('Destination Search')}
            >
              <Fontisto name="search" size={25} color={"#f15454"} />
              <Text style={styles.searchBtnText}>Where are you going?</Text>
            </Pressable>
            <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} style={styles.image}>
            <Text style={styles.title}>Go Near</Text>

            <Pressable 
              style={styles.btn}
              onPress={() => console.warn('Pressed the button')}
            >
              <Text style={styles.btnText}>Explore nearby stays</Text>
            </Pressable>
            </ImageBackground>
        </View>
    )
}

export default HomeScreen;
