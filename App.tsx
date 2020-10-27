import React, { useState, useEffect } from 'react';
import { enableScreens } from 'react-native-screens';
import loadResources from './src/libs/loadResources';
import AppRouter from './src';
import './src/config';

enableScreens();

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    loadApp();
  }, []);

  const loadApp = async () => {
    await loadResources();
    setIsAppReady(true);
  };

  return isAppReady ? <AppRouter /> : null;
}
