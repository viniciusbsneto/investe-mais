import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

const Investments: React.FC = () => {
  return (
    <View style={styles.container}>
      <PageHeader title="Seus investimentos" />
    </View>
  );
}

export default Investments;