import React from 'react';
import { Image } from 'react-native'
import { Container, SubContainer, Header, HeaderTwo, NairaContainer, CardLogoContainer} from '../AppHeaderStatTwo/styles';


function AppHeaderStatTwo(stat: {title: string, amount: number}) {
    return (
        <Container> 
            <CardLogoContainer>
                <Image 
                    source = {require('../../../assets/images/logo.png')}
                    style = {{width: 40, height: 40}}
                    resizeMode = "contain"
                    />
            </CardLogoContainer>     
    
            <SubContainer>
                <Header>{stat.title}</Header>

                <Container>
                    <NairaContainer>
                        <Image 
                        source = {require('../../../assets/images/nigeria-naira-currency-symbol.png')}
                        style = {{width: 10, height: 10, paddingRight: 10}}
                        resizeMode = "contain"
                        /> 
                    </NairaContainer> 
                    <HeaderTwo>{stat.amount}</HeaderTwo>
                </Container>
                
            </SubContainer>
        </Container>
    );
}

export default AppHeaderStatTwo;