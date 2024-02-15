import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {Text, Stack} from '@react-native-material/core';
// import CustomSwitch from './CustomSwitch';
import CustomInput, {CustomInputStandard} from '../CustomInputBox';
import CustomCheckbox from '../CustomCheckbox';
import CustomSwitch from '../CustomSwitch';

const FormStep1 = ({placeholder}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: 40,
        padding: 20,
      }}>
      <View>
        <Text variant="h6">MENTAL HEALTH ASSESSMENT</Text>
        <View
          style={{
            marginHorizontal: 20,
            paddingTop: 20,
            display: 'flex',
            flexDirection: 'column',
            rowGap: 8,
          }}>
          <CustomCheckbox label="DEPRESSTION" />
          <CustomCheckbox label="SUICIDAL IDEATIN/ATTEMPTS" />
          <CustomCheckbox label="CONFUSION" />
          <CustomCheckbox label="DALLUCINATIONS" />
          <CustomCheckbox label="PARANOIA" />
        </View>
      </View>
      <View>
        <Text variant="h6">CHRONIC HEALTH PROBLEMS</Text>
        <View
          style={{
            marginHorizontal: 20,
            paddingTop: 20,
            display: 'flex',
            flexDirection: 'column',
            rowGap: 8,
          }}>
          <CustomSwitch label="DEPRESSTION" />
          <CustomSwitch label="SUICIDAL IDEATIN/ATTEMPTS" />
          <CustomSwitch label="CONFUSION" />
          <CustomSwitch label="DALLUCINATIONS" />
          <CustomSwitch label="PARANOIA" />
        </View>
      </View>
      <View>
        <Text variant="h6">OTHERE INFORMATION</Text>
        <View
          style={{
            marginHorizontal: 20,
            paddingTop: 20,
            display: 'flex',
            flexDirection: 'column',
            rowGap: 8,
          }}>
          <CustomSwitch label="USE OF TOBACCO PRODUCTS" />
          <CustomInputStandard label="IF YES,SPECIFY" />
          <CustomInput label="KNOWN ALLERGIES TO SPECIFIC DRUGS" />
        </View>
      </View>
    </View>
  );
};

export default FormStep1;
