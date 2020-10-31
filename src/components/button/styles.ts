import styled from 'styled-components/native';
import { Button } from 'react-native-paper';
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled(Button)`
width: 90%;
height: ${RFValue(50)}px;
border-radius: 100px;
`