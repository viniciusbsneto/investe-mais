import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import SignIn from './src/pages/SignIn';
import { useFonts } from 'expo-font';
import { RobotoSlab_400Regular, RobotoSlab_700Bold } from '@expo-google-fonts/roboto-slab';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function App() {
  let [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <SignIn />
        <StatusBar style="auto" />
      </>
    );
  }
}
