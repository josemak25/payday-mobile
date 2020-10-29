import React from 'react';
import { Image } from 'react-native'
import { Container, SubContainer, Header, HeaderTwo} from './style';

const AppHeader = (call: {callText: string, callActionText: string}) => {
    return (
        <Container>       
                <Image 
                source = {require('../../../assets/images/logo.png')}
                style = {{width: 40, height: 40}}
                resizeMode = "contain"
                />

            <SubContainer>
                <Header>{call.callText}</Header>
                <HeaderTwo>{call.callActionText}</HeaderTwo>
            </SubContainer>
        </Container>
    );
}

export default AppHeader;