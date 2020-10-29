import React from 'react';
import {Image, View} from 'react-native'

import {Container, LeftView, RightView, Price, Date, Time, ImageContainer} from './styles'


export default function CreditCard({price, date, time}) {
    return (
        <Container>
            <LeftView>
                <ImageContainer>
                    <Image source={require('../../../assets/images/logo.png')} />
                </ImageContainer>
                <Price>{price}</Price>
            </LeftView>
            <RightView>
                <Date>{date}</Date>
                <Time>{time}</Time>
            </RightView>
        </Container>
    )
}


