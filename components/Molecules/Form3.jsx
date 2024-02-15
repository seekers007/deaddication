import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Text, Stack} from '@react-native-material/core';
import CustomSwitch from '../CustomSwitch';
import CustomInput from '../CustomInputBox';

const FormStep3 = ({placeholder}) => {
  return (
    <View style={{display: 'flex', flexDirection: 'column', rowGap: 40}}>
      <View style={{paddingTop: 20}}>
        <View style={{marginHorizontal: 30}}>
          <Text style={styles.header}>Demographics</Text>
        </View>
        <View
          style={{
            marginHorizontal: 30,
            paddingTop: 20,
            display: 'flex',
            flexDirection: 'column',
            rowGap: 8,
          }}>
          <CustomSwitch label="Are you currently employed?" />
          <CustomSwitch label="Have you ever been laid off from a job?" />
          <CustomSwitch label="Have you ever quit a job due to occupational stress or burnout?" />
          <CustomSwitch label="does your current job provide health insurance?" />
          <CustomSwitch label="Are you satisfied with your current job?" />
          <Text style={styles.header}>Occupational History</Text>
          <CustomInput label="At what age did you start working?" />
          <CustomSwitch label="Have you ever been laid off from a job?" />
          <CustomSwitch label="Have you ever quit a job due to occupational stress or burnout?" />
          <CustomSwitch label="Does your current job provide health insurance?" />
          <CustomSwitch label="are you satisfied with your current job?" />
          <Text style={styles.header}>Occupational Damage</Text>
          <Text style={{fontSize: 12}}>
            specify nature of the current work:
          </Text>
          <CustomInput label="" />
          <Text style={{fontSize: 12}}>
            If unemployed, for how long were you unemployed?
          </Text>
          <CustomInput label="" />
          <Text style={{fontSize: 12}}>
            For what reasons were you unemployed?
          </Text>
          <CustomInput label="" />
          <Text style={{fontSize: 12}}>
            Have you ever received any disciplinary actions at work?
          </Text>
          <CustomSwitch label="" />
          <Text style={{fontSize: 12}}>
            Which of the following types of disciplinary actions have you
            received?
          </Text>
          <View style={{width: '100%'}}>
            <CustomSwitch label="Abstenteeism" />
            <CustomSwitch label="warning/ Memos" />
            <CustomSwitch label="Suspension Order" />
            <CustomSwitch label="Dismissal order " />
            <CustomSwitch label="Transfer order" />
          </View>
          <Text style={styles.header}>Legal History</Text>
          <CustomSwitch label="Arrested for the sale of drugs" />
          <CustomSwitch label="Arrested for the possession of drugs" />
          <CustomSwitch label="Arrested for drunken/ Drug influenced behaviour" />
          <CustomSwitch label="Fined for drunken driving " />
          <CustomSwitch label=" had an accident while driving under the influence of alochol/drugs" />
          <CustomSwitch label="Arrested for Assault" />
          <CustomSwitch label="arrested for other reasons" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'grey',
    paddingVertical: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default FormStep3;
