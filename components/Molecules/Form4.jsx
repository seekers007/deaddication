import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {Text, Stack} from '@react-native-material/core';

const FormStep4 = ({placeholder}) => {
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
          <Text style={{fontSize: 14, fontWeight: 'bold', textAlign: 'center'}}>
            Short term Goals
          </Text>
          <Text style={{fontSize: 14, fontWeight: 'bold', textAlign: 'center'}}>
            long term Goals
          </Text>
          <Text style={{fontSize: 14, fontWeight: 'bold', textAlign: 'center'}}>
            Follow-up measures
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FormStep4;
