import React from 'react';
import { Image } from 'react-native';

import {
  Container,
  CardView,
  Price,
  Date,
  Time,
  Naira,
  PriceWrapper
} from './styles';

export default function CreditCard({ price, date, time }) {
  return (
    <Container>
      <CardView>
        <Image source={require('../../../assets/images/logo.png')} />
        <Date>{date}</Date>
      </CardView>
      <CardView>
        <PriceWrapper>
          <Naira>&#8358;</Naira>
          <Price>{price}</Price>
        </PriceWrapper>
        <Time>{time}</Time>
      </CardView>
    </Container>
  );
}
