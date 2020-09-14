import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';

import backgroundTaxes from '../../assets/images/backgroundTaxes.png';

import styles from './styles';

const Taxes: React.FC = () => {
  return (
    <View style={styles.container}>
      <PageHeader title="Taxas de Investimento" />
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
            source={backgroundTaxes}
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
                >>
              </Text>
            </RectButton>

            <RectButton style={styles.button}>
              <Text style={styles.buttonText}>
                CDB, LCI, LCA
              </Text>
              <Text style={styles.buttonText}>
                >>
              </Text>
            </RectButton>

            <RectButton style={styles.button}>
              <Text style={styles.buttonText}>
                Fundos Imobiliários
              </Text>
              <Text style={styles.buttonText}>
                >>
              </Text>
            </RectButton>

            <RectButton style={styles.button}>
              <Text style={styles.buttonText}>
                Ações
              </Text>
              <Text style={styles.buttonText}>
                >>
              </Text>
            </RectButton>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Taxes;