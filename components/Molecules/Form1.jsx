import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {Text, Stack} from '@react-native-material/core';
import CustomCheckBox from './CustomCheckBox';
import CustomSwitch from './CustomSwitch';
import CustomInput, {CustomInputStandard} from './CustomInput';

const FormStep1 = ({placeholder}) => {
  return (
    <View style={{display: 'flex', flexDirection: 'column', rowGap: 40}}>
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
          <CustomCheckBox label="DEPRESSTION" />
          <CustomCheckBox label="SUICIDAL IDEATIN/ATTEMPTS" />
          <CustomCheckBox label="CONFUSION" />
          <CustomCheckBox label="DALLUCINATIONS" />
          <CustomCheckBox label="PARANOIA" />
        </View>
      </View>
      <View>
        <Text variant="h6">CHRONIC HEALTH PROBLEMS</Text>
        <View
          style={{
            marginHorizontal: 30,
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
            marginHorizontal: 30,
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
