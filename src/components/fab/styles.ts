import styled from 'styled-components/native';
import { Button } from 'react-native-paper';
import { RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from 'react-native';
import { theme } from '../../theme/types';


export const Container = styled(Button)`
width: 90%;
height: ${RFValue(50)}px;
border-radius: 100px;
`

export const Styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 0,
      right: 16,
      bottom: 32,
      backgroundColor: theme.colors.PRIMARY,
      elevation: 16,
      shadowColor: theme.colors.PRIMARY,
    },
  })