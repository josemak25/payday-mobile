import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import Animated, { useValue } from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import { useAppTheme } from '../../theme';

import { Container, Remember } from './styles';

type CheckboxProps = {
  title: string;
};

export default function Checkbox(props: CheckboxProps) {
  const { colors } = useAppTheme();

  const [checked, setChecked] = useState(true);
  const defaultSpringBox = useValue(1);
  const springBox = useValue<1 | 0.7>(1);

  const handleCheck = () => {
    springBox.setValue(0.7);

    Animated.spring(springBox, {
      toValue: defaultSpringBox,
      damping: 7,
      mass: 1,
      stiffness: 120,
      overshootClamping: false,
      restSpeedThreshold: 0.001,
      restDisplacementThreshold: 0.001
    }).start(() => setChecked(!checked));
  };

  return (
    <Container>
      <TouchableOpacity onPress={handleCheck}>
        <Animated.View
          style={[
            { transform: [{ scale: springBox }] },
            {
              height: RFValue(20),
              width: RFValue(20),
              borderRadius: RFValue(20 / 2),
              borderWidth: 1.5,
              borderColor: colors.PRIMARY_TEXT,
              backgroundColor: 'transparent',
              alignItems: 'center',
              justifyContent: 'center'
            }
          ]}
        >
          {checked ? (
            <Ionicons
              name="ios-checkmark"
              size={RFValue(20)}
              color={colors.PRIMARY_TEXT}
            />
          ) : null}
        </Animated.View>
      </TouchableOpacity>

      <Remember>{props.title}</Remember>
    </Container>
  );
}
