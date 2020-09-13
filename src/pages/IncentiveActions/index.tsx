import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';

import backgroundIncentiveActions from '../../assets/images/backgroundIncentiveActions.png';

import styles from './styles';

const IncentiveActions: React.FC = () => {
  return (
    <View style={styles.container}>
      <PageHeader title="Ações de incentivo Safra" />
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
      <View style={styles.buttonsContainer}>
        <RectButton style={styles.button}>
          <Text style={styles.buttonText}>
            
          </Text>
        </RectButton>
      </View>
    </View>
  );
}

export default IncentiveActions;