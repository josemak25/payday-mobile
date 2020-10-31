import styled from 'styled-components/native';
import { Paragraph } from 'react-native-paper';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Remember = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.SEN_BOLD};
  color: ${({ theme }) => theme.colors.PRIMARY_TEXT};
  padding-left: 5px;
`;
