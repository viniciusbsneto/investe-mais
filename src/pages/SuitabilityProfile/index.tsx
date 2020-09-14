import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';
import { useAuth } from '../../hooks/auth';

import avatar from '../../assets/images/profile.png';

import styles from './styles';

const SuitabilityProfile: React.FC = () => {
  const { user } = useAuth();
  const [selectedValue, setSelectedValue] = useState("0");
  
  return (
    <View style={styles.container}>
      <PageHeader title="Perfil do Investidor" />

      <ScrollView
        style={styles.scrollPage}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
      >
        <View style={styles.innerContainer}>
          <View style={styles.profile}>
            <Image style={styles.avatar} source={avatar} />

            <View style={styles.profileInfo}>
              <Text style={styles.name}>{user.Name}</Text>
              <Text style={styles.profileText}>{`Perfil: ${user.InvestorProfile}`}</Text>
            </View>
          </View>

          <Text style={styles.paragraph}>
            Como você avalia seu conhecimento sobre investimentos?
          </Text>

          <View style={styles.footer}>
            <Picker
              selectedValue={selectedValue}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Não tenho conhecimento" value="0" />
              <Picker.Item label="Razoável" value="1" />
              <Picker.Item label="Bom" value="2" />
              <Picker.Item label="Excelente" value="3" />
            </Picker>
            <RectButton style={styles.button}>
              <Text style={styles.buttonText}>Enviar</Text>
            </RectButton>
          </View>
        </View>
      </ScrollView>

    </View>
  );
}

export default SuitabilityProfile;