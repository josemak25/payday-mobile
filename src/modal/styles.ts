import { TextInput } from 'react-native-paper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: grey; 
`;

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