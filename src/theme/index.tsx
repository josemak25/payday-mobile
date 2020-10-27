import React, { FunctionComponent, useContext } from 'react';
import { ThemeProvider, ThemeContext } from 'styled-components/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

import { theme, paperTheme } from './types';

const Theme: FunctionComponent = ({ children }) => {
  return (
    <PaperProvider theme={paperTheme}>
      <StatusBar translucent animated style="light" />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </PaperProvider>
  );
};

export const useAppTheme = () => useContext(ThemeContext);

export default Theme;
