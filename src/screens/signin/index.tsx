import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
// import {SafeAreaView} from "react-native";
import { NavigationInterface } from '../types';
import AppHeader from '../../components/AppHeader';

// IMPORT FOR ALL CUSTOM STYLES
import { Container, Welcome } from './styles';
import AppFormInput from '../../components/AppFormInput';
import AppButton from '../../components/AppButton';
import AppHeaderStatOne from '../../components/AppUser';
import AppHeaderStatTwo from '../../components/StatisticsTracker';
import AppUser from '../../components/AppUser';
import StatisticsTracker from '../../components/StatisticsTracker';

// DEFINE SCREEN PROP TYPES
interface ScreenProp extends NavigationInterface {}

const call = {
  callText: 'No account',
  callActionTitle: 'Sign up'
};

const firstLabel = {
  labelText: 'Full name'
};

const secondLabel = {
  labelText: 'Phone number'
};

const buttonLabel = {
  label: 'Login'
};

const stat = {
  title: 'Total owed today',
  amount: 210
};

const statTwo = {
  title: 'Overall title owed',
  amount: 3110
};

export default function ProfileScreen(props: ScreenProp) {
  return (
    <Container>
      <SafeAreaView>
        <AppHeader
          callText={call.callText}
          callActionText={call.callActionTitle}
        />

        <Welcome>Welcome back</Welcome>

        <AppFormInput labelText={firstLabel.labelText} />

        <AppFormInput labelText={secondLabel.labelText} />

        <AppUser name="Peter John" />

        <StatisticsTracker
          title={stat.title}
          amount={stat.amount}
          nairaWidth={10}
          nairaHeight={10}
        />

        <StatisticsTracker
          title={statTwo.title}
          amount={statTwo.amount}
          statStyle={{
            fontSize: 50
          }}
          nairaWidth={18}
          nairaHeight={18}
        />

        <AppButton labelText={buttonLabel.label} />
      </SafeAreaView>
    </Container>
  );
}
