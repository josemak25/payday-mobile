import styled from 'styled-components/native';
import { Button } from 'react-native-paper';


export const CustomButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.SECONDARY_TEXT};
  border-radius: 30px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 118px; 
  box-shadow: 0px 28px 25px #CF977570;
`;

export const ButtonLabel = styled.Text`
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
`;

