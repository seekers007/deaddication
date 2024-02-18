import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import ContainerWrapper from '../components/ContainerWrapper';
import FormStep1 from '../components/Molecules/Form1';
import {ScrollView} from 'react-native-gesture-handler';
import FormStep2 from '../components/Molecules/Form2';
import FormStep3 from '../components/Molecules/Form3';
import FormStep4 from '../components/Molecules/Form4';
import {FormDataDetailContext} from '../Context/FormDataContext';

const PregressStepsComp = () => {
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
  const {formData} = useContext(FormDataDetailContext);
  return (
    <ProgressSteps {...progressStepsStyle}>
      <ProgressStep label="info" nextBtnTextStyle={buttonTextStyle}>
        <View style={{}}>
          <FormStep1 />
        </View>
      </ProgressStep>
      <ProgressStep
        label="Social"
        nextBtnTextStyle={buttonTextStyle}
        previousBtnStyle={buttonTextStyle}>
        <View style={{}}>
          <FormStep2 />
        </View>
      </ProgressStep>
      <ProgressStep label="Legal & Finances" nextBtnTextStyle={buttonTextStyle}>
        <View style={{}}>
          <FormStep3 />
        </View>
      </ProgressStep>
      <ProgressStep
        label="Treatment & Goals"
        nextBtnTextStyle={buttonTextStyle}
        onSubmit={() => {
          console.log('the submit btn', formData);
        }}>
        <View style={{}}>
          <FormStep4 />
        </View>
      </ProgressStep>
    </ProgressSteps>
  );
};

export default PregressStepsComp;
