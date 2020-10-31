import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import { useAppTheme } from '../../theme';
import { Styles } from './styles';
import { FAB } from 'react-native-paper';


interface FabProps {
  label: string;
  loading?: boolean;
  style?: ViewStyle;
  onClick: () => void;
  contentStyle?: ViewStyle;
  labelStyle?: TextStyle;
}

export default function (props: FabProps) {
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
    <FAB
    style={Styles.fab}
    small
    color= '#FFFFFF'
    icon= "plus"
    onPress={() => console.log('Fab Pressed')}
  />
  );
}
