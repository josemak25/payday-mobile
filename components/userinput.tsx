import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { View,StyleSheet } from 'react-native';
import { Theme } from 'react-native-paper/lib/typescript/src/types';

interface TextInputProps {
    placeholder:string;
    label:string,
    width:string,
    height:string
}

const UserInput = (props:TextInputProps) => {

  return (
      <View style={styles.ViewStyle}>
          <TextInput style={{width:props.width,height:props.height,color:"#FDE9DA65",borderColor:"#000000",borderStyle:"solid"}} 
          placeholder={props.placeholder} 
          label={props.label} 
          underlineColorAndroid="transparent" />
      </View>
  )
}

const styles=StyleSheet.create({
    ViewStyle:{

    }
})




export default UserInput;


