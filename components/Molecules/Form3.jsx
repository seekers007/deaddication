import React, {useContext, useEffect} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Text, Stack} from '@react-native-material/core';
import CustomSwitch from '../CustomSwitch';
import CustomInput from '../CustomInputBox';
import {FormDataDetailContext} from '../../Context/FormDataContext';

const FormStep3 = ({placeholder}) => {
  const {formData, dispatchFormData} = useContext(FormDataDetailContext);

  const checkBoxHandler = (name, value) => {
    dispatchFormData({type: name, payload: value});
  };

  const textBoxHandler = (type, value) => {
    dispatchFormData({type: type, payload: value});
  };

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
          <CustomSwitch
            label="Are you currently employed?"
            name="LEGAL_AND_FINANCES_EMPLOYED"
            onChange={checkBoxHandler}
            state={formData?.legalAndFinances?.employed}
          />
          <CustomSwitch
            label="Have you ever been laid off from a job?"
            name="LEGAL_AND_FINANCES_LAID_OFF"
            onChange={checkBoxHandler}
            state={formData?.legalAndFinances?.laidOff}
          />
          <CustomSwitch
            label="Have you ever quit a job due to occupational stress or burnout?"
            name="LEGAL_AND_FINANCES_EVER_RESIGNED"
            onChange={checkBoxHandler}
            state={formData?.legalAndFinances?.everResigned}
          />
          <CustomSwitch
            label="Does your current job provide health insurance?"
            name="LEGAL_AND_FINANCES_IS_HEALTH_ENSURED"
            onChange={checkBoxHandler}
            state={formData?.legalAndFinances?.isHealthEnsured}
          />
          <CustomSwitch
            label="Are you satisfied with your current job?"
            name="LEGAL_AND_FINANCES_SATISFIED_WITH_JOB"
            onChange={checkBoxHandler}
            state={formData?.legalAndFinances?.satisfiedWithJob}
          />
          <Text style={styles.header}>Occupational History</Text>
          <CustomInput
            label="At what age did you start working?"
            name="LEGAL_AND_FINANCES_OCCUPATION_HISTORY_START_WORKING_AGE"
            // onChange={value =>
            //   textBoxHandler(
            //     'LEGAL_AND_FINANCES_OCCUPATION_HISTORY_START_WORKING_AGE',
            //     value,
            //   )
            // }

            onChange={textBoxHandler}
            state={
              formData?.legalAndFinances?.occupationHistory?.startWorkingAge
            }
          />
          <CustomSwitch
            label="Have you ever been laid off from a job?"
            name="LEGAL_AND_FINANCES_OCCUPATION_HISTORY_LAID_OFF"
            onChange={checkBoxHandler}
            state={formData?.legalAndFinances?.occupationHistory?.laidOff}
          />
          <CustomSwitch
            label="Have you ever quit a job due to occupational stress or burnout?"
            name="LEGAL_AND_FINANCES_OCCUPATION_HISTORY_EVER_RESIGNED"
            onChange={checkBoxHandler}
            state={formData?.legalAndFinances?.occupationHistory?.everResigned}
          />
          <CustomSwitch
            label="Does your current job provide health insurance?"
            name="LEGAL_AND_FINANCES_OCCUPATION_HISTORY_IS_HEALTH_ENSURED"
            onChange={checkBoxHandler}
            state={
              formData?.legalAndFinances?.occupationHistory?.isHealthEnsured
            }
          />
          <CustomSwitch
            label="Are you satisfied with your current job?"
            name="LEGAL_AND_FINANCES_OCCUPATION_HISTORY_SATISFIED_WITH_JOB"
            onChange={checkBoxHandler}
            state={
              formData?.legalAndFinances?.occupationHistory?.satisfiedWithJob
            }
          />
          <Text style={styles.header}>Occupational Damage</Text>
          <Text style={{fontSize: 12}}>
            specify nature of the current work:
          </Text>
          <CustomInput
            label="Nature of work"
            name="LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_TYPE_OF_WORK"
            onChange={textBoxHandler}
            state={formData?.legalAndFinances?.occupationalDamage?.typeOfWork}
          />
          <Text style={{fontSize: 12}}>
            If unemployed, for how long were you unemployed?
          </Text>
          <CustomInput
            label="Unemployed period"
            name="LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_UNEMPLOYED_PERIOD"
            onChange={checkBoxHandler}
            state={
              formData?.legalAndFinances?.occupationalDamage?.unEmployedPeriod
            }
          />
          <Text style={{fontSize: 12}}>
            For what reasons were you unemployed?
          </Text>
          <CustomInput
            label="Reason for unemployment"
            name="LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_REASON_OF_UNEMPLOYMENT"
            onChange={textBoxHandler}
            state={
              formData?.legalAndFinances?.occupationalDamage
                ?.reasonOfUnemployment
            }
          />
          <Text style={{fontSize: 12}}>
            Have you ever received any disciplinary actions at work?
          </Text>
          <CustomSwitch
            label="Disciplinary actions received"
            name="LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_DISCIPLINARY_ACTION_BOOL"
            onChange={checkBoxHandler}
            state={
              formData?.legalAndFinances?.occupationalDamage?.disciplinaryAction
                ?.bool
            }
          />
          <Text style={{fontSize: 12}}>
            Which of the following types of disciplinary actions have you
            received?
          </Text>
          <View style={{width: '100%'}}>
            <CustomSwitch
              label="Abstenteeism"
              name="LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_ABSTENEEISM"
              onChange={checkBoxHandler}
              state={
                formData?.legalAndFinances?.occupationalDamage
                  ?.disciplinaryAction?.details?.absteneeism
              }
            />
            <CustomSwitch
              label="Warning/Memos"
              name="LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_WARNING_OR_MEMOS"
              onChange={checkBoxHandler}
              state={
                formData?.legalAndFinances?.occupationalDamage
                  ?.disciplinaryAction?.details?.warningOrMemos
              }
            />
            <CustomSwitch
              label="Suspension Order"
              name="LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_SUSPENSION_ORDER"
              onChange={checkBoxHandler}
              state={
                formData?.legalAndFinances?.occupationalDamage
                  ?.disciplinaryAction?.details?.suspensionOrder
              }
            />
            <CustomSwitch
              label="Dismissal Order"
              name="LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_DISMISSAL_ORDER"
              onChange={checkBoxHandler}
              state={
                formData?.legalAndFinances?.occupationalDamage
                  ?.disciplinaryAction?.details?.dismissalOrder
              }
            />
            <CustomSwitch
              label="Transfer Order"
              name="LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_TRANSFER_ORDER"
              onChange={checkBoxHandler}
              state={
                formData?.legalAndFinances?.occupationalDamage
                  ?.disciplinaryAction?.details?.transferOrder
              }
            />
          </View>
          <Text style={styles.header}>Legal History</Text>
          <CustomSwitch
            label="Arrested for the sale of drugs"
            name="LEGAL_AND_FINANCES_LEGAL_HISTORY_FOR_ARREST_SALES_OF_DRUG"
            onChange={checkBoxHandler}
            state={
              formData?.legalAndFinances?.legalHistoryForArrest?.salesOfDrug
            }
          />
          <CustomSwitch
            label="Arrested for the possession of drugs"
            name="LEGAL_AND_FINANCES_LEGAL_HISTORY_FOR_ARREST_POSSISSION_OF_DRUG"
            onChange={checkBoxHandler}
            state={
              formData?.legalAndFinances?.legalHistoryForArrest?.possesionOfDrug
            }
          />
          <CustomSwitch
            label="Arrested for drunken/Drug influenced behavior"
            name="LEGAL_AND_FINANCES_LEGAL_HISTORY_FOR_ARREST_DRUNK_INFLUENCED"
            onChange={checkBoxHandler}
            state={
              formData?.legalAndFinances?.legalHistoryForArrest?.drunkInfluenced
            }
          />
          <CustomSwitch
            label="Fined for drunken driving"
            name="LEGAL_AND_FINANCES_LEGAL_HISTORY_FOR_ARREST_DRUNK_AND_DRIVE"
            onChange={checkBoxHandler}
            state={
              formData?.legalAndFinances?.legalHistoryForArrest?.drunkAndDrive
            }
          />
          <CustomSwitch
            label="Had an accident while driving under the influence of alcohol/drugs"
            name="LEGAL_AND_FINANCES_LEGAL_HISTORY_FOR_ARREST_ACCIDENT_DRUNK_AND_DRIVE"
            onChange={checkBoxHandler}
            state={
              formData?.legalAndFinances?.legalHistoryForArrest
                ?.accidentDrunkAndDrive
            }
          />
          <CustomSwitch
            label="Arrested for Assault"
            name="LEGAL_AND_FINANCES_LEGAL_HISTORY_FOR_ARREST_ASSAULT"
            onChange={checkBoxHandler}
            state={formData?.legalAndFinances?.legalHistoryForArrest?.assault}
          />
          <CustomSwitch
            label="Arrested for other reasons"
            name="LEGAL_AND_FINANCES_LEGAL_HISTORY_FOR_ARREST_OTHER_REASON"
            onChange={checkBoxHandler}
            state={
              formData?.legalAndFinances?.legalHistoryForArrest?.otherReason
            }
          />
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
