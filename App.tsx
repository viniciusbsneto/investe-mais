import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts } from 'expo-font';
import { RobotoSlab_400Regular, RobotoSlab_700Bold } from '@expo-google-fonts/roboto-slab';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import AppStack from './src/routes/AppStack';

import AppProvider from './src/hooks';

export default function App() {
  let [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_700Bold,
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <AppProvider>
          <AppStack />
          <StatusBar style="light" />
        </AppProvider>
      </>
    );
  }
}
