import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useAppTheme } from '../../theme';
import { Container } from './styles';

interface ButtonProps {
  label: string;
  loading?: boolean;
  style?: ViewStyle;
  onClick: () => void;
  contentStyle?: ViewStyle;
  labelStyle?: TextStyle;
}

export default function Button(props: ButtonProps) {
  const {
    label = 'save',
    loading = false,
    style,
    contentStyle,
    labelStyle,
    onClick
  } = props;
  const { fonts, colors } = useAppTheme();

  return (
    <Container
      onPress={onClick}
      mode="contained"
      accessibilityLabel={`${label} button`}
      loading={loading}
      labelStyle={{
        fontSize: RFValue(fonts.MEDIUM_SIZE),
        fontFamily: fonts.SEN_BOLD,
        color: colors.WHITE_COLOR,
        textTransform: 'capitalize',
        ...labelStyle
      }}
      contentStyle={{ height: '100%', ...contentStyle }}
      style={{
        shadowColor: colors.PRIMARY,
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 28 },
        shadowRadius: 40,
        elevation: 20,
        ...style
      }}
    >
      {label}
    </Container>
  );
}
