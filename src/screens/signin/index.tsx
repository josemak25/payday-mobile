import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
// import {SafeAreaView} from "react-native";
import { NavigationInterface } from '../types';
import AppHeader from '../../components/AppHeader'


// IMPORT FOR ALL CUSTOM STYLES
import { Container, Welcome } from './styles';
import AppFormInput from '../../components/AppFormInput';
import AppButton from '../../components/AppButton';
import AppHeaderStatOne from '../../components/AppHeaderStatOne';
import AppHeaderStatTwo from '../../components/AppHeaderStatTwo';

// DEFINE SCREEN PROP TYPES
interface ScreenProp extends NavigationInterface {}

const call = {
  callText: "No account",
  callActionTitle: "Sign up"
}


const firstLabel = {
  labelText: "Full name"
}

const secondLabel = {
  labelText: "Phone number"
}

const buttonLabel = {
  label: "Login"
}

export default function ProfileScreen(props: ScreenProp) {
  return (
    <Container> 
      <SafeAreaView>
        
          <AppHeader
            callText = {call.callText}
            callActionText = {call.callActionTitle}/>

          <Welcome>Welcome back</Welcome>

          <AppFormInput
            labelText = {firstLabel.labelText} />

          <AppFormInput
            labelText = {secondLabel.labelText}/>


          <AppButton
            labelText = {buttonLabel.label}
          />

      </SafeAreaView>
    </Container>
  );
}
