import styled from 'styled-components/native';
import { FAB } from 'react-native-paper';

export const Container = styled(FAB)`
  position: absolute;
  right: 25px;
  bottom: 40px;
  background-color: ${({ theme }) => theme.colors.PRIMARY};
`;
