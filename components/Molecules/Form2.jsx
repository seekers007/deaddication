import React, {useContext, useEffect, useState} from 'react';
import {TextInput, View} from 'react-native';
import {Text, Stack} from '@react-native-material/core';
import CustomInput from '../CustomInputBox';
import Datepicker from '../DatePicker';
import CustomSwitch from '../CustomSwitch';
import {FormDataDetailContext} from '../../Context/FormDataContext';

const FormStep2 = ({placeholder}) => {
  const [date, setDate] = useState(new Date());
  const {formData, dispatchFormData} = useContext(FormDataDetailContext);
  const checkBoxhandler = (name, value) => {
    dispatchFormData({type: name, payload: value});
  };
  const textBoxHandler = (type, value) => {
    dispatchFormData({type: type, payload: value});
  };

  return (
    <View style={{display: 'flex', flexDirection: 'column', rowGap: 40}}>
      <View
        style={{
          marginHorizontal: 30,
          paddingTop: 20,
          display: 'flex',
          flexDirection: 'column',
          rowGap: 8,
        }}>
        <CustomInput
          label="Name"
          name={'NAME'}
          onChange={textBoxHandler}
          state={formData?.social?.name}
        />
        <CustomInput
          label="REGISTRATION NO"
          name={'REGISTRATION_NO'}
          onChange={textBoxHandler}
          state={formData?.social?.registrationNo}
        />
        {/* date of registration == dateOfRegistration*/}
        {/* <Datepicker name={'DATE_OF_REGISTRATION'} /> */}
        <CustomInput
          label="SEX"
          name={'SEX'}
          onChange={textBoxHandler}
          state={formData?.social?.sex}
        />
        <CustomInput
          label="EDUCATION BACKGROUND"
          name={'EDUCATIONAL_BACKGROUND'}
          onChange={textBoxHandler}
          state={formData?.social?.educationalBackground}
        />
        <CustomInput
          label="RELIGION"
          name={'RELIGION'}
          onChange={textBoxHandler}
          state={formData?.social?.religion}
        />
        <CustomInput
          label="LIVING ARANGEMENT"
          name={'LIVING_ARRANGEMENTS'}
          onChange={textBoxHandler}
          state={formData?.social?.livingArrangements}
        />
        <CustomInput
          label="PHONE NO."
          name={'PHONE_NO'}
          onChange={textBoxHandler}
          state={formData?.social?.phoneNo}
        />

        <CustomInput
          label="HOME ADDRESS"
          name={'ADDRESS_HOME_ADDRESS'}
          onChange={textBoxHandler}
          state={formData?.social?.address?.homeAddress}
        />
        <CustomInput
          label="STREET"
          name={'ADDRESS_STREET'}
          onChange={textBoxHandler}
          state={formData?.social?.address?.street}
        />
        <CustomInput
          label="CITY"
          name={'ADDRESS_CITY'}
          onChange={textBoxHandler}
          state={formData?.social?.address?.city}
        />
        <CustomInput
          label="STATE"
          name={'ADDRESS_STATE'}
          onChange={textBoxHandler}
          state={formData?.social?.address?.state}
        />
        <CustomInput
          label="PIN CODE"
          name={'ADDRESS_PIN_CODE'}
          onChange={textBoxHandler}
          state={formData?.social?.address?.pinCode}
        />

        <CustomInput
          label="GUARDIAN PHONE NO."
          name={'GUARDIAN_PHONE_NO'}
          onChange={textBoxHandler}
          state={formData?.social?.guardianPhoneNo}
        />

        <CustomSwitch
          label="Prior Treatment for Addiction"
          name={'PRIOR_TREATMENT_BOOL'}
          onChange={checkBoxhandler}
          state={formData?.social?.priorTreatment?.bool}
        />
        <Text style={{fontSize: 12}}>
          Facility where the patient received previous treatment---
        </Text>
        <CustomInput
          label="PREVIOUS REHAB"
          name={'PRIOR_TREATMENT_DETAILS_PREVIOUS_REHAB'}
          onChange={textBoxHandler}
          state={formData?.social?.priorTreatment?.previousRehab}
        />
        <CustomInput
          label="Year of previous treatment"
          name={'PRIOR_TREATMENT_DETAILS_YEAR_OF_REHAB_ADMIT'}
          onChange={textBoxHandler}
          state={formData?.social?.priorTreatment?.details?.yearOfAdmit}
        />
        <Text style={{fontSize: 12}}>
          Duration of recovery period after previous treatment
        </Text>
        <CustomInput
          label=""
          name={'PRIOR_TREATMENT_DETAILS_DURATION_OF_RECOVERY'}
          onChange={textBoxHandler}
          state={formData?.social?.priorTreatment?.details?.durationOfRecovery}
        />
        <Text variant="h6">Family History</Text>
        <CustomInput
          label="FATHER'S NAME"
          name={'FAMILY_DETAILS_FATHER_NAME'}
          onChange={textBoxHandler}
          state={formData?.social?.familyDetails?.fatherName}
        />
        <CustomInput
          name={'FAMILY_DETAILS_FATHER_OCCUPATION'}
          onChange={textBoxHandler}
          state={formData?.social?.familyDetails?.fatherOccupation}
          label="OCCUPATION"
        />
        <CustomInput
          name={'FAMILY_DETAILS_FATHER_AGE'}
          onChange={textBoxHandler}
          state={formData?.social?.familyDetails?.fatherAge}
          label="AGE"
        />
        <CustomInput
          name={'FAMILY_DETAILS_INCOME'}
          onChange={textBoxHandler}
          state={formData?.social?.familyDetails?.fatherIncome}
          label="INCOME"
        />

        <CustomInput
          name={'FAMILY_DETAILS_MOTHER_NAME'}
          onChange={textBoxHandler}
          state={formData?.social?.familyDetails?.motherName}
          label="MOTHER'S NAME"
        />
        <CustomInput
          name={'FAMILY_DETAILS_MOTHER_OCCUPATION'}
          onChange={textBoxHandler}
          state={formData?.social?.familyDetails?.motherOccupation}
          label="OCCUPATION"
        />
        <CustomInput
          name={'FAMILY_DETAILS_MOTHER_AGE'}
          onChange={textBoxHandler}
          state={formData?.social?.familyDetails?.motherAge}
          label="AGE"
        />
        <CustomInput
          name={'FAMILY_DETAILS_MOTHER_INCOME'}
          onChange={textBoxHandler}
          state={formData?.social?.familyDetails?.motherIncome}
          label="INCOME"
        />
        <Text variant="h6">FAMILY SITUATION & SUPPORT SYSTEM</Text>
        <CustomSwitch
          name={'FAMILY_DETAILS_FAMILY_SUPPORT_LIVING_WITH_FAMILY'}
          onChange={checkBoxhandler}
          state={
            formData?.social?.familyDetails?.familySupport?.livingWithFamily
          }
          label="Living with Family"
        />

        <CustomSwitch
          name={'FAMILY_DETAILS_FAMILY_SUPPORT_LIVING_WITH_OTHER'}
          onChange={checkBoxhandler}
          state={
            formData?.social?.familyDetails?.familySupport?.livingWithOther
          }
          label="Living with Friends or Distant Relatives"
        />

        <CustomSwitch
          name={'FAMILY_DETAILS_FAMILY_SUPPORT_LIVING_ALONE'}
          onChange={checkBoxhandler}
          state={formData?.social?.familyDetails?.familySupport?.livingAlone}
          label="Living Alone"
        />

        <CustomSwitch
          name={'FAMILY_DETAILS_FAMILY_SUPPORT_LIVING_ON_STREET'}
          onChange={checkBoxhandler}
          state={formData?.social?.familyDetails?.familySupport?.livingOnStreet}
          label="Living On Street "
        />
        <CustomInput
          name={'FAMILY_DETAILS_FAMILY_SUPPORT_SUPPORT_PERSON'}
          onChange={textBoxHandler}
          state={formData?.social?.familyDetails?.familySupport?.supportPerson}
          label="Name of Family Member / Support Person"
        />
        <CustomInput
          name={'FAMILY_DETAILS_FAMILY_SUPPORT_RELATION_OF_PATIENT'}
          onChange={textBoxHandler}
          state={
            formData?.social?.familyDetails?.familySupport?.relationOfPatient
          }
          label="RELATIONSHIP TO PATIENT"
        />
        {/* <CustomInput
          name={'REGISTRATION_NO'}
          onChange={textBoxHandler}
          state={formData?.social?.registrationNo}
          label="Address & Telephone No."
        /> */}
      </View>
    </View>
  );
};

export default FormStep2;
