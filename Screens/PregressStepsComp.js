import React, {useCallback, useContext, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import ContainerWrapper from '../components/ContainerWrapper';
import FormStep1 from '../components/Molecules/Form1';
import {ScrollView} from 'react-native-gesture-handler';
import FormStep2 from '../components/Molecules/Form2';
import FormStep3 from '../components/Molecules/Form3';
import FormStep4 from '../components/Molecules/Form4';
import {FormDataDetailContext} from '../Context/FormDataContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {generatePatientId} from '../utility/generateId';

const PregressStepsComp = () => {
  const navigation = useNavigation();
  const progressStepsStyle = {
    activeStepIconBorderColor: '#686868',
    activeLabelColor: 'black',
    activeStepNumColor: 'white',
    activeStepIconColor: '#686868',
    completedStepIconColor: 'black',
    completedProgressBarColor: 'black',
    completedCheckColor: '',
  };
  const buttonTextStyle = {
    color: 'black',
    // backgroundColor: 'black',
    // paddingVertical: 5,
    // paddingHorizontal: 10,
    // borderRadius: 8,
  };
  const {formData, dispatchFormData} = useContext(FormDataDetailContext);
  console.log(
    '🚀 ~ file: PregressStepsComp.js:34 ~ PregressStepsComp ~ formData:',
    formData,
  );

  const [saveTheData, setSaveTheData] = useState(false);

  const saveTheDataLocal = useCallback(async () => {
    let list = await getExistingData();
    list.push(formData);
    await AsyncStorage.setItem('@De_addict_data', JSON.stringify(list));
    setSaveTheData(false);
    navigation.navigate('Home');
  }, [formData, navigation]);

  useEffect(() => {
    if (saveTheData) {
      saveTheDataLocal();
    }
  }, [formData, saveTheData, saveTheDataLocal]);

  const getExistingData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('@De_addict_data');
      return storedData ? JSON.parse(storedData) : [];
    } catch (e) {
      console.error('Failed to retrieve data:', e);
      return [];
    }
  };

  const submitHandler = async () => {
    const uniqueId = generatePatientId();
    await dispatchFormData({type: 'PATIENT_ID', payload: uniqueId});
    console.log('::::::::::::::::::::::::::::::::::::::::::', formData);
    setSaveTheData(true);
  };

  return (
    <ProgressSteps {...progressStepsStyle}>
      <ProgressStep label="Social" nextBtnTextStyle={buttonTextStyle}>
        <View style={{}}>
          <FormStep2 />
        </View>
      </ProgressStep>
      <ProgressStep
        label="info"
        nextBtnTextStyle={buttonTextStyle}
        previousBtnStyle={buttonTextStyle}>
        <View style={{}}>
          <FormStep1 />
        </View>
      </ProgressStep>
      <ProgressStep
        label="Legal & Finances"
        nextBtnTextStyle={buttonTextStyle}
        previousBtnStyle={buttonTextStyle}>
        <View style={{}}>
          <FormStep3 />
        </View>
      </ProgressStep>
      <ProgressStep
        label="Treatment & Goals"
        nextBtnTextStyle={buttonTextStyle}
        onSubmit={() => {
          submitHandler();
        }}>
        <View style={{}}>
          <FormStep4 />
        </View>
      </ProgressStep>
    </ProgressSteps>
  );
};

export default PregressStepsComp;
