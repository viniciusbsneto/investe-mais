import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

const CreditCard: React.FC = () => {
  return (
    <View style={styles.container}>
      <PageHeader title="Suas faturas" />
    </View>
  );
}

export default CreditCard;