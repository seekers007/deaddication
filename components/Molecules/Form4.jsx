import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Text, Stack } from '@react-native-material/core';
import CustomInput,{CustomInputStandard,CustomInput2,CustomInput4} from '../CustomInput';
// import Datepicker from '../Datepicker';
import Dropdown from '../Dropdown'

const FormStep4 = ({ placeholder }) => {
  const options = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
    { value: 4, label: 'Option 4' },
  ];
  return (
    <View style={{ display: 'flex', flexDirection: 'column', rowGap: 40,overflow:'scroll',paddingHorizontal:20 }}>
      <View>
        <Text variant="h6">MENTAL HEALTH ASSESSMENT</Text>
        <View
          style={{
            marginHorizontal: 30,
            paddingTop: 20,
            display: 'flex',
            flexDirection: 'column',
            rowGap: 8,
          }}>
          <Text
            style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>
            Short term Goals
          </Text>
          <CustomInput2 label="Abstaining from alcohol & drugs" />
          <CustomInput2 label=" Getting back to a routine life" />
          <CustomInput2 label="Improvement in work life" />

          <Text
            style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>
            long term Goals
          </Text>
          <CustomInput2 label="Managing finances" />
          <CustomInput2 label="Dealing with defects of character" />
          <CustomInput2 label="Involvement in healthy recreational activities" />
          <CustomInput2 label="Dealing with relapses if any" />
          <Text
            style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>
            Follow-up measures
          </Text>
          <CustomInput4 label="Councellors Name"/>
          <CustomInput4 label="Date of Admission"/>
          <CustomInput4 label="estimated discharge date"/>
          <Text
            style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>
            follow up details (Counseling review)
          </Text>
          {/* <Datepicker title="Date"/> */}
          <CustomInputStandard label="Issue Dealt in counceling"/>
           <CustomInputStandard label="recovery status"/>
           <Dropdown options={options}/>
        </View>
      </View>
    </View>
  );
};

export default FormStep4;
