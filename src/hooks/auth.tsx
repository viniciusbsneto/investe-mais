import React, { createContext, useCallback, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

interface AuthState {
  token: string;
  user: IUser;
}

interface AuthContextData {
  user: IUser;
  token: string;
  signIn(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@Invest+:token',
        '@Invest+:user',
      ]);

      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async () => {

    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoic2FmcmEtc2VjcmV0IiwianRpIjoiMTcwNjBkMzktZTc3Yi00Y2YxLTgxYWUtNGY4MmM0ODg3NjMxIiwiaWF0IjoxNTk5ODgyNDI2LCJleHAiOjE1OTk4ODYwMjZ9.f-LhhN5uLcpVCGldireDayaAJsfSWhYlxI11wAinIac';

    const responseUser = await api.get('/invest-plus/v1/accounts/00711234511', {
      headers: {
        'Authorization': `${token}`,
      },
    });

    const user = responseUser.data.Accounts[0];

    await AsyncStorage.multiSet([
      ['@Invest+:token', token],
      ['@Invest+:user', JSON.stringify(user)]
    ]);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, token: data.token, signIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error('useAuth must be used within a AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
