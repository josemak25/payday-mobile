import React from 'react';
import { NavigationInterface } from '../types';

// IMPORT FOR ALL CUSTOM STYLES
import { Container, Welcome } from './styles';

// DEFINE SCREEN PROP TYPES
interface ScreenProp extends NavigationInterface {}

export default function ProfileScreen(props: ScreenProp) {
  return (
    <Container>
      <Welcome>Home Screen Under Development</Welcome>
    </Container>
  );
}
