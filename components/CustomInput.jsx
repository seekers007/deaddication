import React from 'react';
import { View ,Text} from 'react-native';
import { TextInput } from '@react-native-material/core';

export  function CustomInput({label, state, onChange, name}) {
  return (
    <TextInput
      variant="outlined"
      label={label}
      color="black"
      style={{ borderRadius: 100, width: '100%', backgroundColor: '#ecf0f1' }}
      inputContainerStyle={{ backgroundColor: '#ecf0f1' }}
      name={name}
      value={state}
      onChangeText={value => onChange(name, value)}
    />
  );
}

export const CustomInputStandard = ({label, state, onChange, name}) => (
  <TextInput
    variant="standard"
    label={label}
    color="black"
    style={{ borderRadius: 100, width: '100%' }}
    name={name}
      value={state}
      onChangeText={value => onChange(name, value)}
  />
);

export const CustomInput1 = ({label, state, onChange, name}) => (
  <View style={{ display: 'flex',flexDirection:'row',justifyContent:'center',alignItems:'center', }}>
    <View style={{width:"70%"}}>
      <Text>{label}</Text>
    </View>
    <TextInput
     variant="outlined"
      // label={label}
      color="black"
      style={{ borderRadius: 100, width: '30%' }}
      name={name}
      value={state}
      onChangeText={value => onChange(name, value)}
    />
  </View>
);
export const CustomInput3 = ({label, state, onChange, name}) => (
  <View style={{ display: 'flex',flexDirection:'row',justifyContent:'center',alignItems:'center', }}>
    <View style={{width:"50%"}}>
      <Text>{label}</Text>
    </View>
    <TextInput
     variant="outlined"
      // label={label}
      color="black"
      style={{ borderRadius: 100, width: '50%' }}
      name={name}
      value={state}
      onChangeText={value => onChange(name, value)}
    />
  </View>
);
export const CustomInput2 = ({label, state, onChange1,onChange2, name1,name2}) => (
  <View style={{ display: 'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',columnGap:20}}>
    <View style={{width:"40%"}}>
      <Text style={{color:'black'}}>{label}</Text>
    </View>
    <TextInput
     variant="outlined"
      // label={label}
      color="black"
      style={{ borderRadius: 100, width: '40%' }}
      inputContainerStyle={{ height:40}}
      name={name1}
      value={state}
      onChangeText={value => onChange(name, value)}
    />
    <TextInput
     variant="outlined"
      // label={label}
      color="black"
      style={{ borderRadius: 100, width: '20%' }}
      inputContainerStyle={{ height:40}}
      name={name2}
      value={state}
      onChangeText={value => onChange(name, value)}
    />
  </View>
);
export const CustomInput4 = ({label, state, onChange, name}) => (
  <View style={{ display: 'flex',flexDirection:'row',justifyContent:'center',alignItems:'center', }}>
    <View style={{width:"50%"}}>
      <Text style={{color:'black'}}>{label}</Text>
    </View>
    <TextInput
     variant="outlined"
      // label={label}
      color="black"
      style={{ borderRadius: 100, width: '50%'}}
      inputContainerStyle={{ height:40}}
      name={name}
      value={state}
      onChangeText={value => onChange(name, value)}
    />
  </View>
);