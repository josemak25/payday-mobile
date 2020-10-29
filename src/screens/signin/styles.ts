import styled from 'styled-components/native';
import { Title } from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_COLOR};
  padding: 15px;
`;

export const Welcome = styled(Title)`
  margin-top: 80px;
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.SEN_BOLD};
  color: ${({ theme }) => theme.colors.PRIMARY_TEXT};
`;
