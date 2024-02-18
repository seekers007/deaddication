import React, {useState, useContext} from 'react';
import {TextInput, View} from 'react-native';
import {Text, Stack} from '@react-native-material/core';
import {CustomInputStandard, CustomInput2, CustomInput4} from '../CustomInput';
import CustomInput from '../CustomInputBox';
// import Datepicker from '../Datepicker';
import Dropdown from '../Dropdown';
import {FormDataDetailContext} from '../../Context/FormDataContext';
import {validatePathConfig} from '@react-navigation/native';

const FormStep4 = ({placeholder}) => {
  const {formData, dispatchFormData} = useContext(FormDataDetailContext);

  const checkBoxHandler = (name, value) => {
    dispatchFormData({type: name, payload: value});
  };

  const textBoxHandler = (type, value) => {
    dispatchFormData({type: type, payload: value});
  };
  // const CustomInput2Handler=(type1,type2,value1,value2)=>{
  //   dispatchFormData({type:type1,payload:value1});
  //   dispatchFormData({type:type2,payload:value2})
  // }
  const CustomInput2Handler = (type, value) => {
    dispatchFormData({type: type, payload: value});
  };
  const options = [
    {value: 1, label: 'Option 1'},
    {value: 2, label: 'Option 2'},
    {value: 3, label: 'Option 3'},
    {value: 4, label: 'Option 4'},
  ];
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: 40,
        overflow: 'scroll',
        paddingHorizontal: 20,
      }}>
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
          <CustomInput2
            label="Abstaining from alcohol & drugs"
            onChange1={value => {
              CustomInput2Handler(
                'TREATMENT_AND_GOALS_SHORT_TERM_GOALS_ABSTRAIN_ALCOHOL_AND_DRUGS_GOALS',
                value,
              );
            }}
            onChange2={value => {
              'TREATMENT_AND_GOALS_SHORT_TERM_GOALS_ABSTRAIN_ALCOHOL_AND_DRUGS_TIME_FRAME',
                value;
            }}
          />
          <CustomInput2
            label=" Getting back to a routine life"
            onChange1={value => {
              CustomInput2Handler(
                'TREATMENT_AND_GOALS_SHORT_TERM_GOALS_BACK_TO_LIFE_GOALS',
                value,
              );
            }}
            onChange2={value => {
              CustomInput2Handler(
                'TREATMENT_AND_GOALS_SHORT_TERM_GOALS_BACK_TO_LIFE_TIME_FRAME',
                value,
              );
            }}
          />
          <CustomInput2
            label="Improvement in work life"
            onChange1={value => {
              CustomInput2Handler(
                'TREATMENT_AND_GOALS_SHORT_TERM_GOALS_IMPROVED_WORK_LIFE_GOALS',
                value,
              );
            }}
            onChange2={value => {
              CustomInput2Handler(
                'TREATMENT_AND_GOALS_SHORT_TERM_GOALS_IMPROVED_WORK_LIFE_TIME_FRAME',
                value,
              );
            }}
          />

          <Text style={{fontSize: 14, fontWeight: 'bold', textAlign: 'center'}}>
            long term Goals
          </Text>
          <CustomInput2
            label="Managing finances"
            onChange1={value => {
              CustomInput2Handler(
                'TREATMENT_AND_GOALS_LONG_TERM_GOALS_MANAGE_FINANCES_GOALS',
                value,
              );
            }}
            onChange2={value => {
              CustomInput2Handler(
                'TREATMENT_AND_GOALS_LONG_TERM_GOALS_MANAGE_FINANCES_TIME_FRAME',
                value,
              );
            }}
          />
          <CustomInput2
            label="Dealing with defects of character"
            onChange1={value => {
              dispatch({
                type: 'TREATMENT_AND_GOALS_LONG_TERM_GOALS_DEAL_WITH_DEFECT_CHARACTERS_GOALS',
                payload: value,
              });
            }}
            onChange2={value => {
              dispatch({
                type: 'TREATMENT_AND_GOALS_LONG_TERM_GOALS_DEAL_WITH_DEFECT_CHARACTERS_TIME_FRAME',
                payload: value,
              });
            }}
          />
          <CustomInput2
            label="Improving family ties"
            onChange1={value => {
              dispatch({
                type: 'TREATMENT_AND_GOALS_LONG_TERM_GOALS_FAMILY_RELATION_GOALS',
                payload: value,
              });
            }}
            onChange2={value => {
              dispatch({
                type: 'TREATMENT_AND_GOALS_LONG_TERM_GOALS_FAMILY_RELATION_TIME_FRAME',
                payload: value,
              });
            }}
          />

          <CustomInput2
            label="Involvement in healthy recreational activities"
            onChange1={value => {
              dispatch({
                type: 'TREATMENT_AND_GOALS_LONG_TERM_GOALS_RECREATIONAL_ACTIVITIES_GOALS',
                payload: value,
              });
            }}
            onChange2={value => {
              dispatch({
                type: 'TREATMENT_AND_GOALS_LONG_TERM_GOALS_RECREATIONAL_ACTIVITIES_TIME_FRAME',
                payload: value,
              });
            }}
          />

          <CustomInput
            label="Dealing with relapses if any"
            name=""
            onChange={textBoxHandler}
            state={formData.tratmentAndGoals.longTermGoals.dealingRelapses}
          />
          <Text style={{fontSize: 14, fontWeight: 'bold', textAlign: 'center'}}>
            Follow-up measures
          </Text>
          <CustomInput4
            label="Councellors Name"
            name="TREATMENT_AND_GOALS_FOLLOW_UP_MEASURES_EXTENTION_DETAILS_COUNCELLORS_NAME"
            onChange={textBoxHandler}
            state={
              formData.tratmentAndGoals.followUpMeasures.extentionDetails
                .councellorsName
            }
          />
          <CustomInput4
            label="Date of Admission"
            name="TREATMENT_AND_GOALS_FOLLOW_UP_MEASURES_EXTENTION_DETAILS_DATE_OF_ADMISSIONS"
            onChange={textBoxHandler}
            state={
              formData.tratmentAndGoals.followUpMeasures.extentionDetails
                .DateOfAdmissions
            }
          />
          <CustomInput4
            label="estimated discharge date"
            name="TREATMENT_AND_GOALS_FOLLOW_UP_MEASURES_EXTENTION_DETAILS_DISCHARGE"
            onChange={textBoxHandler}
            state={
              formData.tratmentAndGoals.followUpMeasures.extentionDetails
                .discharge
            }
          />
          <Text style={{fontSize: 14, fontWeight: 'bold', textAlign: 'center'}}>
            follow up details (Counseling review)
          </Text>
          {/* <Datepicker title="Date"/> */}
          <CustomInputStandard
            label="Issue Dealt in counceling"
            name="TREATMENT_AND_GOALS_FOLLOW_UP_MEASURES_FOLLOW_UP_DETAILS_ISSUE_DEALT_IN_COUNSELING"
            onChange={textBoxHandler}
            state={
              formData.tratmentAndGoals.followUpMeasures.followUpDetails
                .issueDealtInCounseling
            }
          />
          <CustomInputStandard
            label="recovery status"
            name="TREATMENT_AND_GOALS_FOLLOW_UP_MEASURES_FOLLOW_UP_DETAILS_RECOVERY_STATUS"
            onChange={textBoxHandler}
            state={
              formData.tratmentAndGoals.followUpMeasures.followUpDetails
                .recoverySatus
            }
          />
          <Dropdown options={options} />
        </View>
      </View>
    </View>
  );
};

export default FormStep4;
