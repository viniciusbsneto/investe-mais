import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Ionicons as Icon } from '@expo/vector-icons';
import PageHeader from '../../components/PageHeader';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const InvestPlus: React.FC = () => {

  const handleNavigateToIncentiveActions = useCallback(() => {
    navigate('IncentiveActions');
  }, []);

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <PageHeader title="Invest+" />
      <View style={styles.investContainer}>
        <View style={styles.invest}>
          <Text style={styles.investTitle}>Invista agora</Text>
          <View style={styles.investAvailableContainer}>
            <Text style={styles.investAvailableText}>Capital disponível:</Text>
            <Text style={styles.investAvailableValue}>R$158,75</Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.menuContainer}>
          <View style={styles.menu}>
            <RectButton style={styles.button} onPress={handleNavigateToIncentiveActions}>
              <Icon style={styles.buttonIcon} name="ios-trending-up" size={20}/>
              <Text style={styles.buttonText}>Ações de incentivo Safra</Text>
            </RectButton>

            <RectButton style={styles.button}>
              <Icon style={styles.buttonIcon} name="ios-trending-up" size={20}/>
              <Text style={styles.buttonText}>Perfil do investidor</Text>
            </RectButton>

            <RectButton style={styles.button}>
              <Icon style={styles.buttonIcon} name="ios-trending-up" size={20}/>
              <Text style={styles.buttonText}>Antecipação do salário</Text>
            </RectButton>

            <RectButton style={styles.button}>
              <Icon style={styles.buttonIcon} name="ios-trending-up" size={20}/>
              <Text style={styles.buttonText}>SafraBot</Text>
            </RectButton>

            <RectButton style={styles.button}>
              <Icon style={styles.buttonIcon} name="ios-trending-up" size={20}/>
              <Text style={styles.buttonText}>Taxas</Text>
            </RectButton>

            <RectButton style={styles.button}>
              <Icon style={styles.buttonIcon} name="ios-trending-up" size={20}/>
              <Text style={styles.buttonText}>Aprenda a investir</Text>
            </RectButton>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default InvestPlus;