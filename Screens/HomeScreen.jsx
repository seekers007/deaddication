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

  return (
    <ContainerWrapper>
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

      {/* <FlatList
        data={data}
        style={{height: '100%'}}
        renderItem={({item, idx}) => {
          return <RenderItem item={item} idx={idx} />;
        }}
        keyExtractor={(item, idx) => idx}
        nestedScrollEnabled
      /> */}

      <FlatList
        contentContainerStyle={{backgroundColor: 'red'}}
        key={item => item?.id}
        data={data}
        renderItem={({item, index}) => <RenderItem item={item} />}
      />
    </ContainerWrapper>
  );
}

const RenderItem = ({item, idx}) => (
  <Pressable>
    <Text style={{color: '#fff'}}>
      {item?.name} == {item?.age}
    </Text>
  </Pressable>
);

const styles = StyleSheet.create({
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
