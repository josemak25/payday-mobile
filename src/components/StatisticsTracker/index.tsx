import React from 'react';
import { Image, TextStyle } from 'react-native';
import {
  Container,
  SubContainer,
  StatTitle,
  StatAmount,
  CardLogoContainer,
  AmountContainer
} from './styles';

type StatisticsTrackerProps = {
  title: string;
  amount: number;
  nairaWidth?: number;
  nairaHeight?: number;
  statStyle?: TextStyle;
};

function StatisticsTracker(props: StatisticsTrackerProps) {
  return (
    <Container>
      <CardLogoContainer>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={{ width: 40, height: 40 }}
          resizeMode="contain"
        />
      </CardLogoContainer>

      <SubContainer>
        <StatTitle>{props.title}</StatTitle>
        <AmountContainer>
          <Image
            source={require('../../../assets/images/nigeria-naira-currency-symbol.png')}
            style={{
              width: props.nairaWidth,
              height: props.nairaHeight,
              marginLeft: 10
            }}
            resizeMode="contain"
          />
          <StatAmount style={props.statStyle}>{props.amount}</StatAmount>
        </AmountContainer>
      </SubContainer>
    </Container>
  );
}

export default StatisticsTracker;
