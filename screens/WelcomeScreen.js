import * as React from 'react';
import {  View, Image, StyleSheet, Text, Pressable } from 'react-native';
import styles from '../styles';
import Button from "../components/Button";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>

        <Image 
          style={styles.logo} 
          source={require('../assets/little-lemon-logo.png')}
        />

        <Text 
          style={styles.bodyText}>
            Little Lemon, your local Mediterranean Bistro
        </Text>

      </View>

      <View style={styles.footer}>

      <Button
        style={styles.button}
        onPress={() => {
          navigation.navigate("Subscribe");
        }}>
          Newsletter
        </Button>

      </View>
    </View>
  );
};

export default WelcomeScreen;
