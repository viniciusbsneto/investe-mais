import React, { useCallback } from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';

import backgroundLearning from '../../assets/images/backgroundLearning.png';

import styles from './styles';

const Learning: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigateToMorningCalls = useCallback(() => {
    navigate('MorningCalls');
  }, []);

  return (
    <View style={styles.container}>
      <PageHeader title="Aprenda a investir" />
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
            source={backgroundLearning}
          />
          <View>
            <Text style={styles.paragraph}>
              Em parceria com a B3
            </Text>
          </View>
          <View style={styles.buttonsContainer}>
            <RectButton style={styles.button}>
              <Text style={styles.buttonText}>
                ABC do Investidor
              </Text>
            </RectButton>
            <RectButton style={styles.button}>
              <Text style={styles.buttonText}>
                Como começar a investir
              </Text>
            </RectButton>
            <RectButton style={styles.button}>
              <Text style={styles.buttonText}>
                B3 Cursos
              </Text>
            </RectButton>
            <RectButton style={styles.button} onPress={handleNavigateToMorningCalls}>
              <Text style={styles.buttonText}>
                Últimas notícias
              </Text>
            </RectButton>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Learning;