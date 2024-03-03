import React from 'react';
import {View} from 'react-native';
import {TextInput} from '@react-native-material/core';

export default function CustomInput({
  label,
  state,
  onChange,
  name,
  className,
  disabled,
}) {
  return (
    <TextInput
      variant="outlined"
      label={label}
      color="black"
      style={{borderRadius: 100, width: '100%', marginTop: 10, ...className}}
      inputContainerStyle={{backgroundColor: '#ecf0f1'}}
      name={name}
      value={state}
      placeholderTextColor={'#000'}
      onChangeText={value => onChange(name, value)}
      editable={disabled ? true : false}
    />
  );
}

export const CustomInputStandard = ({label, state, onChange, name}) => (
  <TextInput
    variant="standard"
    label={label}
    color="black"
    style={{borderRadius: 100, width: '100%'}}
    name={name}
    value={state}
    onChangeText={value => onChange(name, value)}
  />
);
