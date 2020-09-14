import React, { useCallback, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton, ScrollView, Switch } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';

import backgroundSafraBot from '../../assets/images/backgroundSafraBot.png';

import styles from './styles';

const SafraBot: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = useCallback(() => {
    setIsEnabled(previousState => !previousState);
  }, []);

  return (
    <View style={styles.container}>
      <PageHeader title="SafraBot" />
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
            source={backgroundSafraBot}
          />
          <Text style={styles.paragraph}>
            Quer deixar sua carteira de investimentos sendo 100% gerenciada automaticamente pelo SafraBot?
          </Text>
          <View style={styles.switchContainer}>
            <Switch
              value={isEnabled}
              onValueChange={toggleSwitch}

            />
            
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default SafraBot;