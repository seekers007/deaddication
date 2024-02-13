import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './Screens/HomeScreen';
import Registration from './Screens/Registration';
import SummaryListing from './Screens/SummaryListing';

const Stack = createStackNavigator();

function App() {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Summary" component={SummaryListing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
