import * as React from 'react';

import { AppTextInput } from './style';

const AppFormInput = (label: {labelText: string})=> {
  const [text, setText] = React.useState('');
  const [focus, setFocus] = React.useState(false)

  return (
    <AppTextInput
      label= {label.labelText}
      mode = "outlined"
      value={text}
      selectionColor = "brown"
      onChangeText={(text: string) => setText(text)}
      theme={{colors: {primary: '#CF9775'}}}
    />   
  );
};

export default AppFormInput;

