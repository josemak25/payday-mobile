import * as React from 'react';
import { Button } from 'react-native-paper';
import { CustomButton, ButtonLabel } from './styles';

const AppButton = (label: {labelText: string}) => (
  <CustomButton 
    mode="contained" 
    onPress={() => console.log('Pressed')}
    >
    <ButtonLabel>
        {label.labelText}
    </ButtonLabel>
  </CustomButton>
);

export default AppButton;