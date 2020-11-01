import 'styled-components';
import { configureFonts, DefaultTheme } from 'react-native-paper';

// All app colors
enum COLORS {
  BACKGROUND_COLOR = '#FAF4EE65',
  PRIMARY_LIGHT = '#CF97756F',
  SECONDARY_TEXT = '#CF9775',
  PRIMARY_TEXT = '#000000',
  INPUT_COLOR = '#FDE9DA65',
  WHITE_COLOR = '#FFFFFF',
  SECONDARY = '#B98875',
  PRIMARY = '#CF9775'
}

// All app font sizes
enum FONTS {
  SMALL_SIZE = 10,
  LARGE_SIZE = 18,
  MEDIUM_SIZE = 14,
  FONT_WEIGHT_LIGHT = 200,
  FONT_WEIGHT_HEAVY = 800,
  FONT_WEIGHT_MEDIUM = 600,
  SEN_BOLD = 'senBold',
  SEN_REGULAR = 'senRegular',
  SEN_EXTRA_BOLD = 'senExtraBold'
}

declare module 'styled-components' {
  export interface DefaultTheme {
    // All Global App Colors
    colors: {
      PRIMARY: string;
      SECONDARY: string;
      WHITE_COLOR: string;
      INPUT_COLOR: string;
      PRIMARY_TEXT: string;
      PRIMARY_LIGHT: string;
      SECONDARY_TEXT: string;
      BACKGROUND_COLOR: string;
    };

    // All Global App Font Sizes
    fonts: {
      SEN_BOLD: string;
      LARGE_SIZE: number;
      SMALL_SIZE: number;
      MEDIUM_SIZE: number;
      SEN_REGULAR: string;
      SEN_EXTRA_BOLD: string;
      FONT_WEIGHT_LIGHT: number;
      FONT_WEIGHT_HEAVY: number;
      FONT_WEIGHT_MEDIUM: number;
    };
  }
}

const paperFontConfig = {
  default: {
    regular: {
      fontFamily: FONTS.SEN_REGULAR,
      fontWeight: 'normal'
    },

    medium: {
      fontFamily: FONTS.SEN_BOLD,
      fontWeight: 'normal'
    },

    light: {
      fontFamily: FONTS.SEN_REGULAR,
      fontWeight: 'normal'
    },

    thin: {
      fontFamily: FONTS.SEN_REGULAR,
      fontWeight: 'normal'
    }
  }
};

export const paperTheme = {
  ...DefaultTheme,
  // @ts-ignore
  fonts: configureFonts(paperFontConfig)
};

// App theme
export const theme = { colors: COLORS, fonts: FONTS };
