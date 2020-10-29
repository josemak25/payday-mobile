import React from 'react'
import { View, Text } from 'react-native'
import { Image } from 'react-native'
import { Container, SubContainer, Header, HeaderTwo} from './style';


export default function AppHeaderStatOne() {
    return (
        <Container>       
                <Image 
                source = {require('../../../assets/images/avatar.png')}
                style = {{width: 40, height: 40}}
                resizeMode = "contain"
                />

            <SubContainer>
                <Header>Good morning</Header>
                <HeaderTwo>Peter John</HeaderTwo>
            </SubContainer>
        </Container>
    )
}
