import React from 'react';
import {View} from 'react-native';
import {TextInput} from '@react-native-material/core';

export default function CustomInput({label}) {
  return (
    <TextInput
      variant="outlined"
      label={label}
      color="black"
      style={{borderRadius: 100, width: '100%', backgroundColor: '#ecf0f1'}}
      inputContainerStyle={{backgroundColor: '#ecf0f1'}}
    />
  );
}

export const CustomInputStandard = ({label}) => (
  <TextInput
    variant="standard"
    label={label}
    color="black"
    style={{borderRadius: 100, width: '100%'}}
  />
);
