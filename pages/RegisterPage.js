import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import styles from '../styles.js';

export default function RegisterPage({ navigation }) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    gender: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...formData, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Submitting form', formData);
    navigation.navigate('Review', { formData: formData });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={formData.first_name}
        onChangeText={(v) => handleInputChange('first_name', v)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={formData.last_name}
        onChangeText={(v) => handleInputChange('last_name', v)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={formData.email}
        onChangeText={(v) => handleInputChange('email', v)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={formData.password}
        onChangeText={(v) => handleInputChange('password', v)}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={formData.gender}
        onChangeText={(v) => handleInputChange('gender', v)}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Go Back" onPress={() => navigation.navigate('Home')} />
        </View>
        <View style={styles.button}>
          <Button title="Review And Submit" onPress={() => navigation.navigate('Review', { formData })} />
        </View>
      </View>
    </View>
  );
}

