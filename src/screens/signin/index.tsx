import React from 'react';
import { NavigationInterface } from '../types';
import Checkbox from '../../components/checkbox';

// IMPORT FOR ALL CUSTOM STYLES
import { Container, Welcome } from './styles';

// DEFINE SCREEN PROP TYPES
interface ScreenProp extends NavigationInterface {}

//BOUNCY CHECKBOX

// import { } from 'react-native-paper/lib/typescript/src/styles/colors';

export default function ProfileScreen(props: ScreenProp) {
  return (
    <Container>
      <Welcome>Signin Screen Under Development</Welcome>
      <Checkbox title="Remember me" />
    </Container>
  );
}
