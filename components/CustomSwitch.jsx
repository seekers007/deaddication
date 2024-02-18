import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Switch} from 'react-native-switch';

const CustomSwitch = ({label, state, onChange, name}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <Switch
        value={state ? true : false}
        onValueChange={() => onChange(name, !state)}
        disabled={false}
        activeText={'On'}
        inActiveText={'Off'}
        circleSize={30}
        barHeight={30}
        activeTextStyle={{paddingHorizontal: 5}}
        inactiveTextStyle={{paddingHorizontal: 5}}
        backgroundActive={'black'}
        backgroundInactive={'grey'}
        circleActiveColor={'#fff'}
        circleInActiveColor={'#fff'}
        changeValueImmediately={true}
        outerCircleStyle={{
          borderRadius: 300,
          justifyContent: 'space-between',
        }}
        renderActiveText={true}
        renderInActiveText={true}
        switchLeftPx={10}
        switchRightPx={10}
        switchWidthMultiplier={2}
        switchBorderRadius={30}
      />
    </View>
  );
};

export default CustomSwitch;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
    width: '100%',
  },
  label: {
    fontSize: 16,
    color: 'black',
    width: '70%',
  },
});
