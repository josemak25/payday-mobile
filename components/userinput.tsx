import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { View } from 'react-native';

interface TextInputProps {
    placeholder:string;
    icon:string,
    color:string,
    label:string,
    width:string,
    height:string,
    fontSize:string,
    placeholder_text_color:string,
    border:string
}

const UserInput = (props:TextInputProps) => {

  return (
      <View >
          <TextInput style={{width:props.width,height:props.height,color:props.color,borderColor:props.border}} 
          placeholder={props.placeholder} 
          placeholderTextColor={props.placeholder_text_color} 
          label={props.label} 
          underlineColorAndroid="transparent" />
      </View>
  )
}


export default UserInput;


