import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import ContainerWrapper from '../components/ContainerWrapper';
import FormStep1 from '../components/Molecules/Form1';
import {ScrollView} from 'react-native-gesture-handler';
import FormStep2 from '../components/Molecules/Form2';
import FormStep3 from '../components/Molecules/Form3';
import FormStep4 from '../components/Molecules/Form4';
import {FormDataDetailContextProvider} from '../Context/FormDataContext';

function FormPage() {
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
  const previousBtnStyle = {};

  return (
    <ContainerWrapper>
      <ScrollView>
        <FormDataDetailContextProvider>
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
            <ProgressStep
              label="Legal & Finances"
              nextBtnTextStyle={buttonTextStyle}>
              <View style={{}}>
                <FormStep3 />
              </View>
            </ProgressStep>
            <ProgressStep
              label="Treatment & Goals"
              nextBtnTextStyle={buttonTextStyle}>
              <View style={{}}>
                <FormStep4 />
              </View>
            </ProgressStep>
          </ProgressSteps>
        </FormDataDetailContextProvider>
      </ScrollView>
    </ContainerWrapper>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default FormPage;
