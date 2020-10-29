import React from 'react';
import { NavigationInterface } from '../types';
import CreditCard from '../../components/CreditCard';

// IMPORT FOR ALL CUSTOM STYLES
import { Container, Welcome } from './styles';

// DEFINE SCREEN PROP TYPES
interface ScreenProp extends NavigationInterface {}

export default function ProfileScreen(props: ScreenProp) {
  return (
    <Container>
      {/* <CreditCard price="200" date="Today" time="12:00AM"/> */}
      <Welcome>Signin Screen Under Development</Welcome>
    </Container>
  );
}
