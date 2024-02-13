import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const CustomCheckbox = ({initialState = false, label}) => {
  const [checked, setChecked] = useState(initialState);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toggleCheckbox}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <Text style={styles.checkmark}>&#x2713;</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
    width: '100%',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checked: {
    backgroundColor: 'black', // Change the background color when checked
  },
  checkmark: {
    color: '#fff', // Change the color of the checkmark
    fontSize: 16,
  },
  label: {
    fontSize: 16,
  },
});

export default CustomCheckbox;
