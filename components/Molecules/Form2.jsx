import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {Text, Stack} from '@react-native-material/core';
import CustomInput from '../CustomInputBox';
import Datepicker from '../DatePicker';
import CustomSwitch from '../CustomSwitch';

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
        <Datepicker />
        <CustomInput label="SEX" />
        <CustomInput label="EDUCATION BACKGROUND" />
        <CustomInput label="RELIGION" />
        <CustomInput label="LIVING ARANGEMENT" />
        <CustomInput label="PHONE NO." />
        <CustomInput label="HOME ADDRESS" />
        <CustomInput label="STREET" />
        <CustomInput label="CITY" />
        <CustomInput label="STATE" />
        <CustomInput label="PIN CODE" />
        <CustomInput label="GUARDIAN PHONE NO" />
        <CustomSwitch label="Prior Treatment for Addiction" />
        <Text style={{fontSize: 12}}>
          Facility where the patient received previous treatment---
        </Text>
        <CustomInput label="" />
        <CustomInput label="Year of previous treatment" />
        <Text style={{fontSize: 12}}>
          Duration of recovery period after previous treatment
        </Text>
        <CustomInput label="" />
        <Text variant="h6">Family History</Text>
        <CustomInput label="FATHER'S NAME" />
        <CustomInput label="OCCUPATION" />
        <CustomInput label="AGE" />
        <CustomInput label="INCOME" />

        <CustomInput label="MOTHER'S NAME" />
        <CustomInput label="OCCUPATION" />
        <CustomInput label="AGE" />
        <CustomInput label="INCOME" />
        <Text variant="h6">FAMILY SITUATION & SUPPORT SYSTEM</Text>
        <CustomSwitch label="Living with Family" />
        <CustomSwitch label="Living with Friends or Distant Relatives" />
        <CustomSwitch label="Living On Street " />
        <CustomInput label="Name of Family Member / Support Person" />
        <CustomInput label="RELATIONSHIP TO PATIENT" />
        <CustomInput label="Address & Telephone No." />
      </View>
    </View>
  );
};

export default FormStep2;
