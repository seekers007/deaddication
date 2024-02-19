import React, {useContext, useReducer, useState} from 'react';
import {TextInput, View} from 'react-native';
import {Text, Stack} from '@react-native-material/core';
import CustomInput, {CustomInputStandard} from '../CustomInputBox';
import CustomCheckbox from '../CustomCheckbox';
import CustomSwitch from '../CustomSwitch';
import {FormDataDetailContext} from '../../Context/FormDataContext';
import Accordion from '../Accordion';

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
      <View style={{marginHorizontal: 20}}>
        <Accordion
          title="Cannabis"
          child={
            <View>
              <CustomInput
                label="AGE OF FIRST USE"
                name={'CANNABIS_AGE_OF_FIRST_USE'}
                onChange={textBoxHandler}
                state={formData.history.cannabis.ageOfFirstUse}
              />
              <CustomInput
                label="YEAR OF USE"
                name={'CANNABIS_YEAR_OF_USE'}
                onChange={textBoxHandler}
                state={formData.history.cannabis.yearOfUse}
              />
              <CustomInput
                label="YEARS OF EXECCSIVE USE"
                name={'CANNABIS_YEARS_OF_EXECCSIVE_USE'}
                onChange={textBoxHandler}
                state={formData.history.cannabis.yearsOfExessiveUse}
              />
              <CustomInput
                label="SPECIFIC TYPE OF DRUG"
                name={'CANNABIS_SPECIFIC_TYPE_OF_DRUG'}
                onChange={textBoxHandler}
                state={formData.history.cannabis.specificTypeOfDrug}
              />
              <CustomInput
                label="ROUTE OF ADMINISTRATION"
                name={'CANNABIS_ROUTE_OF_ADMINISTRATION'}
                onChange={textBoxHandler}
                state={formData.history.cannabis.routeOfAdministration}
              />
              <CustomInput
                label="FREQUENCY"
                name={'CANNABIS_FREQUENCY'}
                onChange={textBoxHandler}
                state={formData.history.cannabis.frequency}
              />
              <CustomInput
                label="QUANTITY"
                name={'CANNABIS_QUANTITY'}
                onChange={textBoxHandler}
                state={formData.history.cannabis.quantity}
              />
            </View>
          }
        />
        <Accordion
          title="Stimulants"
          child={
            <View>
              <CustomInput
                label="AGE OF FIRST USE"
                name={'STIMULANTS_AGE_OF_FIRST_USE'}
                onChange={textBoxHandler}
                state={formData.history.stimulants.ageOfFirstUse}
              />
              <CustomInput
                label="YEAR OF USE"
                name={'STIMULANTS_YEAR_OF_USE'}
                onChange={textBoxHandler}
                state={formData.history.stimulants.yearOfUse}
              />
              <CustomInput
                label="YEARS OF EXECCSIVE USE"
                name={'STIMULANTS_YEARS_OF_EXECCSIVE_USE'}
                onChange={textBoxHandler}
                state={formData.history.stimulants.yearsOfExessiveUse}
              />
              <CustomInput
                label="SPECIFIC TYPE OF DRUG"
                name={'STIMULANTS_SPECIFIC_TYPE_OF_DRUG'}
                onChange={textBoxHandler}
                state={formData.history.stimulants.specificTypeOfDrug}
              />
              <CustomInput
                label="ROUTE OF ADMINISTRATION"
                name={'STIMULANTS_ROUTE_OF_ADMINISTRATION'}
                onChange={textBoxHandler}
                state={formData.history.stimulants.routeOfAdministration}
              />
              <CustomInput
                label="FREQUENCY"
                name={'STIMULANTS_FREQUENCY'}
                onChange={textBoxHandler}
                state={formData.history.stimulants.frequency}
              />
              <CustomInput
                label="QUANTITY"
                name={'STIMULANTS_QUANTITY'}
                onChange={textBoxHandler}
                state={formData.history.stimulants.quantity}
              />
            </View>
          }
        />
        <Accordion
          title="Hallucinogens"
          child={
            <View>
              <CustomInput
                label="AGE OF FIRST USE"
                name={'HILLUCINOGENS_AGE_OF_FIRST_USE'}
                onChange={textBoxHandler}
                state={formData.history.hillucinogens.ageOfFirstUse}
              />
              <CustomInput
                label="YEAR OF USE"
                name={'HILLUCINOGENS_YEAR_OF_USE'}
                onChange={textBoxHandler}
                state={formData.history.hillucinogens.yearOfUse}
              />
              <CustomInput
                label="YEARS OF EXECCSIVE USE"
                name={'HILLUCINOGENS_YEARS_OF_EXECCSIVE_USE'}
                onChange={textBoxHandler}
                state={formData.history.hillucinogens.yearsOfExessiveUse}
              />
              <CustomInput
                label="SPECIFIC TYPE OF DRUG"
                name={'HILLUCINOGENS_SPECIFIC_TYPE_OF_DRUG'}
                onChange={textBoxHandler}
                state={formData.history.hillucinogens.specificTypeOfDrug}
              />
              <CustomInput
                label="ROUTE OF ADMINISTRATION"
                name={'HILLUCINOGENS_ROUTE_OF_ADMINISTRATION'}
                onChange={textBoxHandler}
                state={formData.history.hillucinogens.routeOfAdministration}
              />
              <CustomInput
                label="FREQUENCY"
                name={'HILLUCINOGENS_FREQUENCY'}
                onChange={textBoxHandler}
                state={formData.history.hillucinogens.frequency}
              />
              <CustomInput
                label="QUANTITY"
                name={'HILLUCINOGENS_QUANTITY'}
                onChange={textBoxHandler}
                state={formData.history.hillucinogens.quantity}
              />
            </View>
          }
        />
        <Accordion
          title="Inhalants"
          child={
            <View>
              <CustomInput
                label="AGE OF FIRST USE"
                name={'INHALANTS_AGE_OF_FIRST_USE'}
                onChange={textBoxHandler}
                state={formData.history.inhalants.ageOfFirstUse}
              />
              <CustomInput
                label="YEAR OF USE"
                name={'INHALANTS_YEAR_OF_USE'}
                onChange={textBoxHandler}
                state={formData.history.inhalants.yearOfUse}
              />
              <CustomInput
                label="YEARS OF EXECCSIVE USE"
                name={'INHALANTS_YEARS_OF_EXECCSIVE_USE'}
                onChange={textBoxHandler}
                state={formData.history.inhalants.yearsOfExessiveUse}
              />
              <CustomInput
                label="SPECIFIC TYPE OF DRUG"
                name={'INHALANTS_SPECIFIC_TYPE_OF_DRUG'}
                onChange={textBoxHandler}
                state={formData.history.inhalants.specificTypeOfDrug}
              />
              <CustomInput
                label="ROUTE OF ADMINISTRATION"
                name={'INHALANTS_ROUTE_OF_ADMINISTRATION'}
                onChange={textBoxHandler}
                state={formData.history.inhalants.routeOfAdministration}
              />
              <CustomInput
                label="FREQUENCY"
                name={'INHALANTS_FREQUENCY'}
                onChange={textBoxHandler}
                state={formData.history.inhalants.frequency}
              />
              <CustomInput
                label="QUANTITY"
                name={'INHALANTS_QUANTITY'}
                onChange={textBoxHandler}
                state={formData.history.inhalants.quantity}
              />
            </View>
          }
        />
        <Accordion
          title="Substance not classified"
          child={
            <View>
              <CustomInput
                label="AGE OF FIRST USE"
                name={'SUBSTANCE_NOT_CLASSIFIED_AGE_OF_FIRST_USE'}
                onChange={textBoxHandler}
                state={formData.history.substanceNotClassified?.ageOfFirstUse}
              />
              <CustomInput
                label="YEAR OF USE"
                name={'SUBSTANCE_NOT_CLASSIFIED_YEAR_OF_USE'}
                onChange={textBoxHandler}
                state={formData.history.substanceNotClassified?.yearOfUse}
              />
              <CustomInput
                label="YEARS OF EXECCSIVE USE"
                name={'SUBSTANCE_NOT_CLASSIFIED_YEARS_OF_EXECCSIVE_USE'}
                onChange={textBoxHandler}
                state={
                  formData.history.substanceNotClassified.yearsOfExessiveUse
                }
              />
              <CustomInput
                label="SPECIFIC TYPE OF DRUG"
                name={'SUBSTANCE_NOT_CLASSIFIED_SPECIFIC_TYPE_OF_DRUG'}
                onChange={textBoxHandler}
                state={
                  formData.history.substanceNotClassified.specificTypeOfDrug
                }
              />
              <CustomInput
                label="ROUTE OF ADMINISTRATION"
                name={'SUBSTANCE_NOT_CLASSIFIED_ROUTE_OF_ADMINISTRATION'}
                onChange={textBoxHandler}
                state={
                  formData.history.substanceNotClassified.routeOfAdministration
                }
              />
              <CustomInput
                label="FREQUENCY"
                name={'SUBSTANCE_NOT_CLASSIFIED_FREQUENCY'}
                onChange={textBoxHandler}
                state={formData.history.substanceNotClassified.frequency}
              />
              <CustomInput
                label="QUANTITY"
                name={'SUBSTANCE_NOT_CLASSIFIED_QUANTITY'}
                onChange={textBoxHandler}
                state={formData.history.substanceNotClassified.quantity}
              />
            </View>
          }
        />
      </View>
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
