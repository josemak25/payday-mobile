import styled from 'styled-components/native';


export const Container = styled.View`
  flex-direction: row;
`;

export const SubContainer = styled.View`
  flex-direction: column;
`;

export const NairaContainer = styled.View`
  padding-top: 5px;
  margin-left: 10px
`;
export const CardLogoContainer = styled.View`
  padding-top: 2px;
`;

export const Header = styled.Text`
  color: ${({ theme }) => theme.colors.PRIMARY_TEXT};
  font-family: ${({ theme }) => theme.fonts.SEN_BOLD};
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  padding-top: 5px;
  padding-left: 10px;
`;

export const HeaderTwo = styled.Text`
  color: ${({ theme }) => theme.colors.SECONDARY_TEXT};
  font-family: ${({ theme }) => theme.fonts.SEN_BOLD};
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
`;
