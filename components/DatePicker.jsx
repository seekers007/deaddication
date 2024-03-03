import React, {useContext, useState} from 'react';
import {View, Button, Platform, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomInput from './CustomInput';
import {FormDataDetailContext} from '../Context/FormDataContext';

const Datepicker = ({name, title = 'DOB'}) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const {formData, dispatchFormData} = useContext(FormDataDetailContext);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
    dispatchFormData({
      type: name,
      payload: currentDate,
    });
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{position: 'reletive', width: '100%'}}>
        <Text
          style={{
            position: 'absolute',
            marginTop: -8,
            marginLeft: 10,
            fontSize: 12,
            backgroundColor: '#ecf0f1',
            zIndex: 10,
            color: 'black',
          }}>
          {title}
        </Text>
        <Text
          onPress={showDatePicker}
          style={{
            width: '100%',
            paddingHorizontal: 12,
            fontSize: 16,
            borderWidth: 1,
            borderRadius: 4,
            borderColor: 'gray',
            paddingVertical: 16,
            color: 'black',
          }}>
          {date.toLocaleDateString()}
        </Text>
      </View>

      {showPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          maximumDate={new Date()}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default Datepicker;
