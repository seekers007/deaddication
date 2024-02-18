import React from 'react';
import { View ,Text} from 'react-native';
import { TextInput } from '@react-native-material/core';

export default function CustomInput({ label }) {
  return (
    <TextInput
      variant="outlined"
      label={label}
      color="black"
      style={{ borderRadius: 100, width: '100%', backgroundColor: '#ecf0f1' }}
      inputContainerStyle={{ backgroundColor: '#ecf0f1' }}
    />
  );
}

export const CustomInputStandard = ({ label }) => (
  <TextInput
    variant="standard"
    label={label}
    color="black"
    style={{ borderRadius: 100, width: '100%' }}
  />
);

export const CustomInput1 = ({ label }) => (
  <View style={{ display: 'flex',flexDirection:'row',justifyContent:'center',alignItems:'center', }}>
    <View style={{width:"70%"}}>
      <Text>{label}</Text>
    </View>
    <TextInput
     variant="outlined"
      // label={label}
      color="black"
      style={{ borderRadius: 100, width: '30%' }}
    />
  </View>
);
export const CustomInput3 = ({ label }) => (
  <View style={{ display: 'flex',flexDirection:'row',justifyContent:'center',alignItems:'center', }}>
    <View style={{width:"50%"}}>
      <Text>{label}</Text>
    </View>
    <TextInput
     variant="outlined"
      // label={label}
      color="black"
      style={{ borderRadius: 100, width: '50%' }}
    />
  </View>
);
export const CustomInput2 = ({ label }) => (
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
    />
    <TextInput
     variant="outlined"
      // label={label}
      color="black"
      style={{ borderRadius: 100, width: '20%' }}
      inputContainerStyle={{ height:40}}
    />
  </View>
);
export const CustomInput4 = ({ label }) => (
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
    />
  </View>
);