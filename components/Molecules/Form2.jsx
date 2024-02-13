import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {Text, Stack} from '@react-native-material/core';
import CustomCheckBox from './CustomCheckBox';
import CustomSwitch from './CustomSwitch';
import CustomInput, {CustomInputStandard} from './CustomInput';
import Datepicker from './Datepicker';

const FormStep2 = ({placeholder}) => {
  const [date, setDate] = useState(new Date());
  return (
    <View style={{display: 'flex', flexDirection: 'column', rowGap: 40}}>
      <View
        style={{
          marginHorizontal: 30,
          paddingTop: 20,
          display: 'flex',
          flexDirection: 'column',
          rowGap: 8,
        }}>
        <CustomInput label="Name" />
        <CustomInput label="REGISTRATION NO" />
        <CustomInput label="DATE OF REGISTRATION" />
        <Datepicker />
        <CustomInput label="Name" />
        <CustomInput label="Name" />
      </View>
    </View>
  );
};

export default FormStep2;
