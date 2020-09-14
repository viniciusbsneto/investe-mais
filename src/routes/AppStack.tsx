import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import DashboardTabs from './DashboardTabs';
import InvestPlus from '../pages/InvestPlus';
import IncentiveActions from '../pages/IncentiveActions';
import SalaryAntecipation from '../pages/SalaryAntecipation';
import Taxes from '../pages/Taxes';
import InvestNow from '../pages/InvestNow';
import Learning from '../pages/Learning';
import SafraBot from '../pages/SafraBot';
import SuitabilityProfile from '../pages/SuitabilityProfile';
import MorningCalls from '../pages/MorningCalls';

const { Navigator, Screen } = createStackNavigator();

const AppStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="SignIn" component={SignIn} />
        <Screen name="Dashboard" component={DashboardTabs} />
        <Screen name="InvestPlus" component={InvestPlus} />
        <Screen name="IncentiveActions" component={IncentiveActions} />
        <Screen name="SalaryAntecipation" component={SalaryAntecipation} />
        <Screen name="Taxes" component={Taxes} />
        <Screen name="InvestNow" component={InvestNow} />
        <Screen name="Learning" component={Learning} />
        <Screen name="SafraBot" component={SafraBot} />
        <Screen name="SuitabilityProfile" component={SuitabilityProfile} />
        <Screen name="MorningCalls" component={MorningCalls} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;