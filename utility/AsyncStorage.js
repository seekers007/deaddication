import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeTheItem = async (key, value) => {
  return await AsyncStorage.setItem(key, value);
};

export const getTheItem = async key => {
  return await AsyncStorage.getItem(key);
};
