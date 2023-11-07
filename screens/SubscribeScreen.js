import React, { useState } from 'react';
import { Alert, View, Image, StyleSheet, Text, Pressable, TextInput } from 'react-native';
import styles from '../styles';
import {validateEmail} from "../utils";
import Button from "../components/Button";


const SubscribeScreen = () => {
  const [email, onChangeEmail] = useState('');

  const isEmailValid = validateEmail(email);

  return (
    <View style={styles.container}>
      <View style={styles.subscribeContentContainer}>

        <Image 
          style={styles.logoSmall} 
          source={require('../assets/little-lemon-logo-grey.png')}
        />

        <Text 
          style={styles.bodyText}>
            Subscribe to our newsletter for our latest delicious recipes!
        </Text>

        <TextInput 
          style={styles.inputBox} 
          value={email} 
          onChangeText={onChangeEmail} 
          placeholder={'Enter your email address'} 
          keyboardType={'email-address'}
        />

        <Button
          style={styles.button}
          onPress={() => {
            Alert.alert("Thanks for subscribing, stay tuned!");
          }}
          disabled={!isEmailValid}>
            Subscribe
          </Button>
      </View>
    </View>
  );
};

export default SubscribeScreen;
