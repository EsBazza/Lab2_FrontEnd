import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import styles from '../styles.js';

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207' }}
      />
      <Text style={styles.title}>Home Page</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Register" 
          onPress={() => navigation.navigate('Register')}
          color={"#470647ff"}
        />
      </View>
    </View>
  );
}