import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import DashboardTabs from './DashboardTabs';
import InvestPlus from '../pages/InvestPlus';
import IncentiveActions from '../pages/IncentiveActions';

const { Navigator, Screen } = createStackNavigator();

const AppStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="SignIn" component={SignIn} />
        <Screen name="Dashboard" component={DashboardTabs} />
        <Screen name="InvestPlus" component={InvestPlus} />
        <Screen name="IncentiveActions" component={IncentiveActions} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;