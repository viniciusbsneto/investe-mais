import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Ionicons as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import { useAuth } from '../../hooks/auth';

import styles from './styles';
import { formatPrice } from '../../util/format';

const InvestPlus: React.FC = () => {
  const { navigate } = useNavigation();
  const { user } = useAuth();

  const handleNavigateToIncentiveActions = useCallback(() => {
    navigate('IncentiveActions');
  }, []);
  
  const handleNavigateToSalaryAntecipation = useCallback(() => {
    navigate('SalaryAntecipation');
  }, []);

  const handleNavigateToTaxes = useCallback(() => {
    navigate('Taxes');
  }, []);

  const handleNavigateToInvestNow = useCallback(() => {
    navigate('InvestNow');
  }, []);

  const handleNavigateToLearning = useCallback(() => {
    navigate('Learning');
  }, []);

  const handleNavigateToSafraBot = useCallback(() => {
    navigate('SafraBot');
  }, []);

  const handleNavigateToSuitabilityProfile = useCallback(() => {
    navigate('SuitabilityProfile');
  }, []);

  return (
    <View style={styles.container}>
      <PageHeader title="Invest+" />
        <View style={styles.investContainer}>
          <RectButton onPress={handleNavigateToInvestNow} >
            <View style={styles.invest}>
              <Text style={styles.investTitle}>Invista agora</Text>
              <View style={styles.investAvailableContainer}>
                <Text style={styles.investAvailableText}>Capital disponível:</Text>
                <Text style={styles.investAvailableValue}>{formatPrice(Number(user.Amount))}</Text>
              </View>
            </View>
          </RectButton>
        </View>
      <ScrollView>
        <View style={styles.menuContainer}>
          <View style={styles.menu}>
            <RectButton style={styles.button} onPress={handleNavigateToIncentiveActions}>
              <Icon style={styles.buttonIcon} name="ios-trending-up" size={20}/>
              <Text style={styles.buttonText}>Ações de incentivo Safra</Text>
            </RectButton>

            <RectButton style={styles.button} onPress={handleNavigateToSuitabilityProfile}>
              <Icon style={styles.buttonIcon} name="ios-trending-up" size={20}/>
              <Text style={styles.buttonText}>Perfil do investidor</Text>
            </RectButton>

            <RectButton style={styles.button} onPress={handleNavigateToSalaryAntecipation}>
              <Icon style={styles.buttonIcon} name="ios-trending-up" size={20}/>
              <Text style={styles.buttonText}>Antecipação do salário</Text>
            </RectButton>

            <RectButton style={styles.button} onPress={handleNavigateToSafraBot}>
              <Icon style={styles.buttonIcon} name="ios-trending-up" size={20}/>
              <Text style={styles.buttonText}>SafraBot</Text>
            </RectButton>

            <RectButton style={styles.button} onPress={handleNavigateToTaxes}>
              <Icon style={styles.buttonIcon} name="ios-trending-up" size={20}/>
              <Text style={styles.buttonText}>Taxas</Text>
            </RectButton>

            <RectButton style={styles.button} onPress={handleNavigateToLearning}>
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