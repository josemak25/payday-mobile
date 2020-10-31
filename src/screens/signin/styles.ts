import styled from 'styled-components/native';
import { Title } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_COLOR};
`;

export const Welcome = styled(Title)`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.SEN_BOLD};
  color: ${({ theme }) => theme.colors.PRIMARY_TEXT};
  text-transform: capitalize;
`;

