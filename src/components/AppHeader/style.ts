import styled from 'styled-components/native';


export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SubContainer = styled.View`
  flex-direction: row;
`;


export const Header = styled.Text`
  color: ${({ theme }) => theme.colors.PRIMARY_TEXT};
  font-family: ${({ theme }) => theme.fonts.SEN_BOLD};
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  padding-top: 10px;
  padding-right: 5px;
`;

export const HeaderTwo = styled.Text`
  color: ${({ theme }) => theme.colors.SECONDARY_TEXT};
  font-family: ${({ theme }) => theme.fonts.SEN_BOLD};
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  padding-top: 10px;
`;

export const Logo = styled.Image`
  
`;




