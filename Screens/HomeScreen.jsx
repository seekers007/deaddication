import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ContainerWrapper from '../components/ContainerWrapper';
import {FlatList} from 'react-native-gesture-handler';

function HomeScreen({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: '100%',
  };

  const data = [
    {
      name: 'ss',
      age: 22,
    },
    {
      name: 'ps',
      age: 23,
    },
    {
      name: 'gy',
      age: 22,
    },
    {
      name: 'pa',
      age: 25,
    },
    {
      name: 'av',
      age: 27,
    },
  ];

  const handleNav = () => {
    navigation.navigate('FormPage');
  };
  return (
    <ContainerWrapper>
      <View style={styles.fullHeight}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Pressable
            onPress={() => {
              console.log('first');
              navigation.navigate('Registration');
            }}>
            <Text>Home Page</Text>
          </Pressable>
        </View>

        <FlatList
          data={data}
          style={{height: '100%'}}
          renderItem={({item, idx}) => {
            return <RenderItem item={item} idx={idx} />;
          }}
          keyExtractor={(item, idx) => idx}
          nestedScrollEnabled
        />
        <Pressable style={styles.floatingBtn} onPress={handleNav}>
          <Text style={{color: 'white'}}>Add</Text>
        </Pressable>
      </View>
    </ContainerWrapper>
  );
}

const RenderItem = ({item, idx}) => (
  <Pressable>
    <Text>
      {item?.name} == {item?.age}
    </Text>
  </Pressable>
);

const styles = StyleSheet.create({
  floatingBtn: {
    backgroundColor: 'black',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    position: 'absolute',
    bottom: 50,
    right: 40,
  },
  fullHeight: {
    height: '100%',
    backgroundColor: 'red',
    position: 'relative',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default HomeScreen;
