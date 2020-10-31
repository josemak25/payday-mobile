import React from 'react';
import { useAppTheme } from '../../theme';

import { Container } from './styles';

type FabProps = {
  onPress: () => void;
};

export default function FAButton(props: FabProps) {
  const { colors } = useAppTheme();

  return (
    <Container
      style={{
        shadowColor: colors.PRIMARY,
        shadowOpacity: 0.7,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        elevation: 20
      }}
      color={colors.WHITE_COLOR}
      icon="plus"
      onPress={props.onPress}
    />
  );
}
