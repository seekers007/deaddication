import React, {createContext, useReducer} from 'react';
import {
  initialStateFormData,
  FormDataReducer,
} from '../Reducer/FormDataReducer';

const FormDataDetailContext = createContext();

const FormDataDetailContextProvider = ({children}) => {
  const [formData, dispatchFormData] = useReducer(
    FormDataReducer,
    initialStateFormData,
  );
  return (
    <FormDataDetailContext.Provider value={{formData, dispatchFormData}}>
      {children}
    </FormDataDetailContext.Provider>
  );
};

export {FormDataDetailContext, FormDataDetailContextProvider};
