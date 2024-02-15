import React, {useContext, useReducer, useState} from 'react';
import {TextInput, View} from 'react-native';
import {Text, Stack} from '@react-native-material/core';
import CustomInput, {CustomInputStandard} from '../CustomInputBox';
import CustomCheckbox from '../CustomCheckbox';
import CustomSwitch from '../CustomSwitch';
import {FormDataDetailContext} from '../../Context/FormDataContext';

const FormStep1 = ({placeholder}) => {
  const {formData, dispatchFormData} = useContext(FormDataDetailContext);
  const checkBoxhandler = (name, value) => {
    dispatchFormData({type: name, payload: value});
  };

  const textBoxHandler = (type, value) => {
    dispatchFormData({type: type, payload: value});
  };
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
          <CustomCheckbox
            label="DEPRESSION"
            name={'DEPRESSION'}
            onChange={checkBoxhandler}
            state={formData?.history?.mentalHealthAssisment?.depression}
          />
          <CustomCheckbox
            label="SUICIDAL IDEATIN/ATTEMPTS"
            name={'SUICIDAL_IDEATION_AND_ATTEMPT'}
            onChange={checkBoxhandler}
            state={
              formData?.history?.mentalHealthAssisment
                ?.suicidalIdeationAndAttempt
            }
          />
          <CustomCheckbox
            label="CONFUSION"
            name={'CONFUSION'}
            onChange={checkBoxhandler}
            state={formData?.history?.mentalHealthAssisment?.confusion}
          />
          <CustomCheckbox
            label="HALLUCINATION"
            name={'HALLUCINATION'}
            onChange={checkBoxhandler}
            state={formData?.history?.mentalHealthAssisment?.hallucination}
          />
          <CustomCheckbox
            label="PARANOIA"
            name={'PARANOIA'}
            onChange={checkBoxhandler}
            state={formData?.history?.mentalHealthAssisment?.paranoia}
          />
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
          <CustomSwitch
            label="DIABETES"
            name={'DIABETES'}
            onChange={checkBoxhandler}
            state={formData?.history?.chronicHealthProblem?.diabetes}
          />
          <CustomSwitch
            label="LEVER_DISORDER"
            name={'LEVER_DISORDER'}
            onChange={checkBoxhandler}
            state={formData?.history?.chronicHealthProblem?.leverDisorder}
          />
          <CustomSwitch
            label="EPILEPSY"
            name={'EPILEPSY'}
            onChange={checkBoxhandler}
            state={formData?.history?.chronicHealthProblem?.epilepsy}
          />
          <CustomSwitch
            label="RESPIRATORY_PROBLEMS"
            name={'RESPIRATORY_PROBLEMS'}
            onChange={checkBoxhandler}
            state={formData?.history?.chronicHealthProblem?.respiratoryProblems}
          />
          <CustomSwitch
            label="CARDIAC_PROBLEMS"
            name={'CARDIAC_PROBLEMS'}
            onChange={checkBoxhandler}
            state={formData?.history?.chronicHealthProblem?.cardiacProblems}
          />
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
          <CustomSwitch
            label="USE OF TOBACCO PRODUCTS"
            name={'USE_OF_TOBACCO_PRODUCT'}
            onChange={checkBoxhandler}
            state={formData?.history?.otherInfo?.useOfTobacoProduct}
          />
          <CustomInputStandard
            label="IF YES,SPECIFY"
            name={'USE_OF_TOBACCO_PRODUCT_DESCRIPTION'}
            onChange={textBoxHandler}
            state={formData?.history?.otherInfo?.description}
          />
          <CustomInput
            label="KNOWN ALLERGIES TO SPECIFIC DRUGS"
            name={'ALLERGIES_TO_SPECIFIC_DRUGS_IN_OTHER_INFO'}
            onChange={textBoxHandler}
            state={formData?.history?.otherInfo?.allergiesToSpecificDrugs}
          />
        </View>
      </View>
    </View>
  );
};

export default FormStep1;
