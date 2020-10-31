import styled from 'styled-components/native';


export const Container = styled.View`
  flex-direction: row;
`;

export const SubContainer = styled.View`
  flex-direction: column;
`;

export const Header = styled.Text`
  color: ${({ theme }) => theme.colors.SECONDARY_TEXT};
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE}px;
  padding-top: 5px;
  padding-left: 10px;
`;

export const HeaderTwo = styled.Text`
  color: ${({ theme }) => theme.colors.PRIMARY_TEXT};
  font-family: ${({ theme }) => theme.fonts.SEN_BOLD};
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  padding-left: 10px;
`;
