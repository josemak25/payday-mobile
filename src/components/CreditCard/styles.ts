import styled from 'styled-components/native';


export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_COLOR};

`;

export const CardView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_COLOR};
`;


export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.SECONDARY_TEXT};
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE * 2}px;
  font-weight: ${({ theme }) => theme.fonts.FONT_WEIGHT_HEAVY};
  font-family:${({ theme }) => theme.fonts.SEN_BOLD};
`;

export const Naira = styled.Text`
  color: ${({ theme }) => theme.colors.SECONDARY_TEXT};
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-weight: ${({ theme }) => theme.fonts.FONT_WEIGHT_MEDIUM};
  font-family:${({ theme }) => theme.fonts.SEN_BOLD};
  `;

export const PriceWrapper = styled.View`
 flex-direction:row;
 align-items: center;
`;

export const Date = styled.Text`
  color: ${({ theme }) => theme.colors.PRIMARY_TEXT};
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-weight: ${({ theme }) => theme.fonts.FONT_WEIGHT_HEAVY};
  font-family:${({ theme }) => theme.fonts.SEN_BOLD};
`;

export const Time = styled.Text`
  color: ${({ theme }) => theme.colors.SECONDARY_TEXT};
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE}px;
  font-weight: ${({ theme }) => theme.fonts.FONT_WEIGHT_HEAVY};
  font-family:${({ theme }) => theme.fonts.SEN_BOLD};
  
`;

