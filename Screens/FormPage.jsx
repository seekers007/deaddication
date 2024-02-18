import React from 'react';
import {StyleSheet} from 'react-native';
import ContainerWrapper from '../components/ContainerWrapper';
import {ScrollView} from 'react-native-gesture-handler';

import {FormDataDetailContextProvider} from '../Context/FormDataContext';
import PregressStepsComp from './PregressStepsComp';

function FormPage() {
  return (
    <ContainerWrapper>
      <ScrollView>
        <FormDataDetailContextProvider>
          <PregressStepsComp />
        </FormDataDetailContextProvider>
      </ScrollView>
    </ContainerWrapper>
  );
}

export default FormPage;
