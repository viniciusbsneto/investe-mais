import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';

import backgroundSalaryAntecipation from '../../assets/images/backgroundSalaryAntecipation.png';

import styles from './styles';

const SalaryAntecipation: React.FC = () => {
  return (
    <View style={styles.container}>
      <PageHeader title="Adiantamento de salário" />
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
            source={backgroundSalaryAntecipation}
          />
          <View>
            <Text style={styles.paragraph}>
              Você pode adiantar até 20% do seu salário e fazer seu dinheiro começar a render antecipadamente
            </Text>
          </View>
          <Text style={styles.taxesTitle}>
            Quantos dias você quer antecipar seu salário?
          </Text>
          <View style={styles.taxesHeader}>
            <Text style={styles.taxesHeaderText}>Dias</Text>
            <Text style={styles.taxesHeaderText}>Taxas</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <RectButton style={styles.button}>
              <Text style={styles.buttonText}>
                4 dias
              </Text>
              <Text style={styles.buttonText}>
                0%
              </Text>
            </RectButton>

            <RectButton style={styles.button}>
              <Text style={styles.buttonText}>
                8 dias
              </Text>
              <Text style={styles.buttonText}>
                0,2%
              </Text>
            </RectButton>

            <RectButton style={styles.button}>
              <Text style={styles.buttonText}>
                12 dias
              </Text>
              <Text style={styles.buttonText}>
                0,4%
              </Text>
            </RectButton>

            <RectButton style={styles.button}>
              <Text style={styles.buttonText}>
                16 dias
              </Text>
              <Text style={styles.buttonText}>
                0,8%
              </Text>
            </RectButton>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default SalaryAntecipation;