import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextStyle } from 'react-native';
import { useAppTheme } from '../../src/theme';

interface TextInputProps {
  placeholder: string;
  label: string;
  style?: TextStyle;
}

export default function Input(props: TextInputProps) {
  const { fonts, colors } = useAppTheme();

  return (
    <TextInput
      mode="flat"
      style={[
        props.style,
        {
          width: '90%',
          maxHeight: RFValue(60),
          fontFamily: fonts.SEN_BOLD,
          textTransform: 'capitalize',
          borderWidth: 1.5,
          borderRadius: 5,
          backgroundColor: colors.INPUT_COLOR
        }
      ]}
      underlineColor="transparent"
      theme={{ colors: { primary: colors.PRIMARY_TEXT } }}
      placeholder={props.placeholder}
      label={props.label}
      underlineColorAndroid="transparent"
    />
  );
}
