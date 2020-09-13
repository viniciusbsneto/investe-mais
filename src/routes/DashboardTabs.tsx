import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import CreditCard from '../pages/CreditCard';
import Investments from '../pages/Investments';
import { Ionicons } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();

const DashboardTabs: React.FC = () => {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Roboto_700Bold',
          fontSize: 13,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d',
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="ios-home" size={size} color={color} />
            );
          }
        }}
      />
      <Screen
        name="CreditCard"
        component={CreditCard}
        options={{
          tabBarLabel: 'Crédito',
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="ios-card" size={size} color={color} />
            );
          }
        }}
      />
      <Screen
        name="Investments"
        component={Investments}
        options={{
          tabBarLabel: 'Investimentos',
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="ios-stats" size={size} color={color} />
            );
          }
        }}
      />
    </Navigator>
  );
}

export default DashboardTabs;