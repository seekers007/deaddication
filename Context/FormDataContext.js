import React, {createContext} from 'react';
import {
  initialStateFormData,
  FormDataReducer,
} from '../Reducer/FormDataReducer';

const FormDataDetailContext = createContext();

const FormDataDetailContextProvider = ({children}) => {
  return (
    <FormDataDetailContext.Provider
      value={(initialStateFormData, FormDataReducer)}>
      {children}
    </FormDataDetailContext.Provider>
  );
};

export default {FormDataDetailContext, FormDataDetailContextProvider};
