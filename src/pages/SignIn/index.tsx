import React, { useCallback } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import logo from '../../../assets/logo.png';

const SignIn: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigateToDashboardPage = useCallback(() => {
    navigate('Dashboard');
  }, []);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <RectButton style={styles.button} onPress={handleNavigateToDashboardPage}>
        <Text style={styles.buttonText}>Entrar</Text>
      </RectButton>
    </View>
  );
}

export default SignIn;