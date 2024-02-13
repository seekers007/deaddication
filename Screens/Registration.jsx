import React, {useCallback, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  Image,
  Dimensions,
  Alert,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ContainerWrapper from '../components/ContainerWrapper';

import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import {getTheItem, storeTheItem} from '../utility/AsyncStorage';

function Registration({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';
  const isRegistered = useCallback(async () => {
    try {
      const boolVal = await getTheItem('@De_Addict_Is_Registered');

      if (!JSON.parse(boolVal)) {
        return false; // in a condition when the person logs out
      }
      return true;
    } catch {
      return false; //in a condition when the key doesn't exist
    }
  }, []);

  useEffect(() => {
    const checkRegistration = async () => {
      const boolValToCheck = await isRegistered();
      if (boolValToCheck) {
        navigation.replace('Home');
      }
    };

    checkRegistration();
  }, [isRegistered, navigation]);

  const registerTheUser = async () => {
    try {
      await storeTheItem('@De_Addict_Is_Registered', 'true');

      // some function of store data--> starts

      //end
      navigation.replace('Home');
    } catch (err) {
      Alert.alert(`Failed to register `);
    }
  };

  return (
    <ContainerWrapper>
      <View style={{height: '100%'}}>
        <View style={[styles.container]}>
          <Text
            style={[
              styles.appText,
              {color: isDarkMode ? Colors.lighter : Colors.darker},
            ]}>
            Deaddicton
          </Text>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../assets/images/snack-icon.png')}
            />
          </View>
          <CustomTextInput placeholder={'Enter your full name'} />
          <CustomTextInput placeholder={'Enter your registration number'} />
          <CustomTextInput placeholder={'Center Details'} />
          <CustomButton title="REGISTER" onPress={registerTheUser} />
        </View>
      </View>
    </ContainerWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  appText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 26,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: Dimensions.get('window').width * 0.6,
    aspectRatio: 3 / 2,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});

export default Registration;
