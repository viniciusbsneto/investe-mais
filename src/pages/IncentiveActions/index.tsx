import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';

import backgroundIncentiveActions from '../../assets/images/backgroundIncentiveActions.png';

import { useAuth } from '../../hooks/auth';

import styles from './styles';

const IncentiveActions: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <View style={styles.container}>
      <PageHeader title="Ações de incentivo Safra" />
      <ScrollView
        style={styles.scrollPage}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <View style={styles.innerContainer}>
          <Image
            style={styles.banner}
            source={backgroundIncentiveActions}
          />
          <View>
            <Text style={styles.paragraph}>
              A cada 1 dólar investido com o Invest+ ganhe
              uma SafraCoin para que você possa investir mais ainda
            </Text>
          </View>
          <Text style={styles.totalCoins}>
            Total de SafraCoins acumulados
          </Text>
          <Text style={styles.totalCoinsValue}>{user.SafraCoins}</Text>
          <View style={styles.buttonsContainer}>
            <RectButton style={styles.button}>
              <Text style={styles.buttonText}>
                Trocar SafraCoins
              </Text>
            </RectButton>
            <RectButton style={styles.button}>
              <Text style={styles.buttonText}>
                Extrato SafraCoins
              </Text>
            </RectButton>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default IncentiveActions;