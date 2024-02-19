import React, {useState} from 'react';
import {TextInput, View} from 'react-native';

const CustomTextInput = ({placeholder, name, onChange}) => {
  const [text, setText] = useState('');

  return (
    <View style={{marginHorizontal: 20, marginVertical: 15}}>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 8,
          backgroundColor: 'rgba(0,0,0,0.05)',
          color: 'black',
        }}
        placeholder={placeholder}
        placeholderTextColor={'#000'}
        onChangeText={val => onChange(name, val)}
      />
    </View>
  );
};

export default CustomTextInput;
