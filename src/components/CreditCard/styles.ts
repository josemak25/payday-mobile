import styled from 'styled-components/native';
import { StyleSheet, Text, View , Image} from 'react-native'

export const Container = styled.View`
  align-items:center;
  flex-direction:row;
  justify-content:space-evenly;
  padding:20px;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_COLOR};
`;

export const LeftView = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_COLOR};
`;

export const RightView = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_COLOR};
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.SECONDARY_TEXT};
  font-size: 30px;
  font-weight: ${({ theme }) => theme.fonts.FONT_WEIGHT_HEAVY};
  font-family:${({ theme }) => theme.fonts.SEN_BOLD};
  margin-top:20px;
`;
export const Date = styled.Text`
  color: ${({ theme }) => theme.colors.PRIMARY_TEXT};
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE};
  font-weight: ${({ theme }) => theme.fonts.FONT_WEIGHT_HEAVY};
  font-family:${({ theme }) => theme.fonts.SEN_BOLD};
  margin-bottom:20px;
  
`;
export const Time = styled.Text`
  color: ${({ theme }) => theme.colors.SECONDARY_TEXT};
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE};
  font-weight: ${({ theme }) => theme.fonts.FONT_WEIGHT_HEAVY};
  font-family:${({ theme }) => theme.fonts.SEN_BOLD};
  
`;
export const ImageContainer = styled.View`
  width:0.5px;
  height:0.5px;
  flex-direction:row;
  align-content: flex-start;
  margin-bottom:20px
  
`;