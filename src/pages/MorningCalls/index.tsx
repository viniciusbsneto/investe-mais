import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

const MorningCalls: React.FC = () => {

  return (
    <View style={styles.container}>
      <PageHeader title="Últimas notícias" />
      <ScrollView
        style={styles.scrollPage}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <View style={styles.innerContainer}>
          
          <View style={styles.morningCallContainer}>
            <Text style={styles.paragraph}>
              Últimas notícias
            </Text>
          </View>
          
        </View>
      </ScrollView>
    </View>
  );
}

export default MorningCalls;