import styled from 'styled-components/native';


export const Container = styled.View`
  flex-direction: row;
`;

export const SubContainer = styled.View`
  flex-direction: column;
`;

export const AmountContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CardLogoContainer = styled.View`
  padding-top: 2px;
`;

export const StatTitle = styled.Text`
  color: ${({ theme }) => theme.colors.PRIMARY_TEXT};
  font-family: ${({ theme }) => theme.fonts.SEN_BOLD};
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  padding-top: 5px;
  padding-left: 10px;
`;

export const StatAmount = styled.Text`
  color: ${({ theme }) => theme.colors.SECONDARY_TEXT};
  font-family: ${({ theme }) => theme.fonts.SEN_BOLD};
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
`;
