import React, { useState }from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';


const GuestScreen = () => {

  const [adults, setAdults] = useState(0)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)

  return (
        <View style={styles.container}>
          <View style={styles.row}>
            <View>
              <Text style={{fontWeight: 'bold'}}>
                Adults
              </Text>
              <Text style={{color: '#8d8d8d'}}>
                Ages 13 and above
              </Text>
            </View>
            <View style={styles.btnContainer}>
              <Pressable style={styles.btn} onPress={() => setAdults(Math.max(0, adults - 1))}><Text style={styles.operationSign}>-</Text></Pressable>
              <Text style={styles.guestValue}>{adults}</Text>
              <Pressable style={styles.btn} onPress={() => setAdults(adults + 1)}><Text style={styles.operationSign}>+</Text></Pressable>
            </View>
          </View>

          <View style={styles.row}>
            <View>
              <Text style={{fontWeight: 'bold'}}>
                Children
              </Text>
              <Text style={{color: '#8d8d8d'}}>
                Ages 2 - 12
              </Text>
            </View>
            <View style={styles.btnContainer}>
              <Pressable style={styles.btn} onPress={() => setChildren(Math.max(0, children - 1))}><Text style={styles.operationSign}>-</Text></Pressable>
              <Text style={styles.guestValue}>{children}</Text>
              <Pressable style={styles.btn} onPress={() => setChildren(children + 1)}><Text style={styles.operationSign}>+</Text></Pressable>
            </View>
          </View>

          <View style={styles.row}>
            <View>
              <Text style={{fontWeight: 'bold'}}>
                Infants
              </Text>
              <Text style={{color: '#8d8d8d'}}>
                Under 2
              </Text>
            </View>
            <View style={styles.btnContainer}>
              <Pressable style={styles.btn} onPress={() => setInfants(Math.max(0, infants - 1))}><Text style={styles.operationSign}>-</Text></Pressable>
              <Text style={styles.guestValue}>{infants}</Text>
              <Pressable style={styles.btn} onPress={() => setInfants(infants + 1)}><Text style={styles.operationSign}>+</Text></Pressable>
            </View>
          </View>
        </View>
    )
}

export default GuestScreen;