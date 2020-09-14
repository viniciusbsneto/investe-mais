import React, { useCallback, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Ionicons as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

const Home: React.FC = () => {
  const { navigate } = useNavigation();
  const { user } = useAuth();


  const handleNavigateToInvestPlus = useCallback(() => {
    navigate('InvestPlus');
  }, []);

  return (  
    <View style={styles.container}>
      <PageHeader title={`Bem vindo, ${user.Nickname}`} />
      <View style={styles.balanceContainer}>
        <View style={styles.balance}>
          <Text style={styles.balanceTitle}>Conta</Text>
          <View style={styles.balanceAvailableContainer}>
            <Text style={styles.balanceAvailableText}>Saldo disponível:</Text>
            <Text style={styles.balanceAvailableValue}>{`R$${user.Amount}`}</Text>
          </View>
        </View>
      </View>
      <View style={styles.menuContainer}>
        <View style={styles.menu}>
          <RectButton style={styles.button}>
            <Icon style={styles.buttonIcon} name="ios-barcode" size={20}/>
            <Text style={styles.buttonText}>Pagar boleto</Text>
          </RectButton>

          <RectButton style={styles.button}>
            <Icon style={styles.buttonIcon} name="ios-barcode" size={20}/>
            <Text style={styles.buttonText}>Transferência</Text>
          </RectButton>

          <RectButton style={styles.button}>
            <Icon style={styles.buttonIcon} name="ios-barcode" size={20}/>
            <Text style={styles.buttonText}>Extrato</Text>
          </RectButton>

          <RectButton style={styles.button} onPress={handleNavigateToInvestPlus}>
            <Icon style={styles.buttonIcon} name="ios-trending-up" size={20}/>
            <Text style={styles.buttonText}>Invest+</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default Home;