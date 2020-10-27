import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import GlobalErrorBoundary from './libs/error';
import ThemeProvider from './theme';
import Router from './router';
import { StatusBar } from 'expo-status-bar';

export default function AppRouter() {
  return (
    <GlobalErrorBoundary>
      <SafeAreaProvider>
        <ThemeProvider>
          <StatusBar translucent animated style="dark" />
          <Router />
        </ThemeProvider>
      </SafeAreaProvider>
    </GlobalErrorBoundary>
  );
}
