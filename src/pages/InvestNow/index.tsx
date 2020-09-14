import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';

import backgroundInvestNow from '../../assets/images/backgroundInvestNow.png';

import styles from './styles';

const InvestNow: React.FC = () => {
  return (
    <View style={styles.container}>
      <PageHeader title="Invista agora" />
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
            source={backgroundInvestNow}
          />
          <View>
            <Text style={styles.paragraph}>
              Nós oferecemos Taxa ZERO em títulos de Renda Fixa e Tesouro Direto
            </Text>
          </View>
          <View style={styles.buttonsContainer}>
            <RectButton style={styles.button}>
              <Text style={styles.buttonText}>
                Tesouro Direto
              </Text>
              <Text style={styles.buttonText}>
                IPCA 2026+, IPCA 2035+
              </Text>
            </RectButton>

            <RectButton style={styles.button}>
              <Text style={styles.buttonText}>
                Fundos Imobiliários
              </Text>
              <Text style={styles.buttonText}>
                HGLG11, XPML11
              </Text>
            </RectButton>

            <RectButton style={styles.button}>
              <Text style={styles.buttonText}>
                Ações
              </Text>
              <Text style={styles.buttonText}>
                SAFR4, ENBR3, ITSA4
              </Text>
            </RectButton>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default InvestNow;