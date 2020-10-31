import { TextInput } from 'react-native-paper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: grey;
`;

export const ModalContainer = styled.View`
justify-content: center;
align-items: center;
background-color: ${({ theme }) => theme.colors.WHITE_COLOR};
border-radius:10px
`

export const ModalInput = styled(TextInput)`
width: 100%;
padding: 8px;
margin-top: 50;
align-self: center;
height: 60
`

export const TouchableButton = styled.View`
width: 100%;
border-radius: 30px;
height: 50px;
align-items: center;
justify-content: center;
align-self: center;
`

export const TopView = styled.View`
flex: 0.6;
width: 100%;
margin-top: 20
`;


export const BottomView = styled.View`
flex: 0.4;
width: 90%;
justify-content: center
`;

export const ModalTitle = styled.Text`
text-align: center;
margin-top: 5%;
font-weight: bold;
font-size: 20
`;