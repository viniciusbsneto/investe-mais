import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

import logo from '../../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignIn;