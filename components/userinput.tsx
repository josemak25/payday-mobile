import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet,View } from 'react-native';

interface TextInputProps {
    placeholder:string;
    icon:string,
    label:string,
    width:string,
    height:string,
    color:string,
    validator:(input:string)=>boolean
}

const UserInput = (props:TextInputProps) => {

  return (
      <View >
          <TextInput style={{width:props.width,height:props.height,color:props.color}}  label={props.label} underlineColorAndroid="transparent" />
      </View>
  )
}


export default UserInput;


