import React, {useState} from 'react';
import {TextInput, View} from 'react-native';

const CustomTextInput = ({placeholder}) => {
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
        }}
        placeholder={placeholder}
        onChangeText={setText}
        value={text}
      />
    </View>
  );
};

export default CustomTextInput;
