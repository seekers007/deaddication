import React, {useEffect, useState} from 'react';
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  RefreshControl,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ContainerWrapper from '../components/ContainerWrapper';
import {FlatList} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

function HomeScreen({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: '100%',
  };

  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const getExistingData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('@De_addict_data');
      return storedData ? JSON.parse(storedData) : [];
    } catch (e) {
      console.error('Failed to retrieve data:', e);
      return [];
    }
  };

  useEffect(() => {
    console.log('the list is fetched');
    const callback = async () => {
      const list = await getExistingData();
      setData(list);
    };

    callback();
  }, []);

  const handleNav = () => {
    navigation.navigate('FormPage');
  };

  const handleRefresh = async () => {
    const list = await getExistingData();
    setData(list);
  };
  return (
    <ContainerWrapper>
      <View style={styles.fullHeight}>
        <Text style={styles.headingText}>List of Registered Patient</Text>
        <FlatList
          data={data}
          contentContainerStyle={{
            height: '100%',
            padding: 20,
          }}
          style={{height: '100%'}}
          renderItem={({item, index}) => {
            return <RenderItem item={item} idx={index} />;
          }}
          keyExtractor={(item, idx) => idx}
          nestedScrollEnabled
          ListEmptyComponent={
            <View
              style={{
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'black'}}>No Records Found</Text>
            </View>
          }
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
        />
        <Pressable style={styles.floatingBtn} onPress={handleNav}>
          <Text style={{color: 'white'}}>Add</Text>
        </Pressable>
      </View>
    </ContainerWrapper>
  );
}

const RenderItem = ({item, idx}) => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  return (
    <Pressable style={styles.masterWrapperOfSubComp}>
      <View style={styles.flexRowContainer}>
        <View>
          <View style={{flexDirection: 'row', gap: 4}}>
            <Text
              style={[
                styles.boldName,
                {
                  color: 'black',
                  alignSelf: 'center',
                },
              ]}>
              {idx + 1}.
            </Text>

            <Text style={styles.boldName}>
              {item?.social?.name || ' Not Provided '}
            </Text>
          </View>
          <Text style={{color: '#000', lineHeight: 25}}>S/o</Text>

          <Text style={{color: '#000'}}>
            {item?.social.familyDetails.fatherName || ' Not Provided '}
            <Text style={{fontStyle: 'italic', fontSize: 10}}>
              (father name)
            </Text>
          </Text>
        </View>

        {!isDetailsVisible && (
          <TouchableOpacity
            onPress={() => {
              setIsDetailsVisible(true);
            }}
            style={{alignSelf: 'flex-end'}}>
            <Text style={{fontSize: 12, fontStyle: 'italic', color: 'grey'}}>
              ...More
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {isDetailsVisible && (
        <Animated.View>
          <View>
            <Text style={{color: 'black', paddingVertical: 5}}>
              {item?.social.familyDetails.motherName || ' Not Provided '}
              <Text style={{fontStyle: 'italic', fontSize: 10}}>
                (Mother name)
              </Text>{' '}
            </Text>
            <View style={styles.padJustifyFlexRow}>
              <Text style={{color: 'black'}}>
                Mobile: {item?.social?.phoneNo || ' Not Provided '}
              </Text>
              <Text style={{color: 'black'}}>
                DOB: {item.social.DOB || ' Not Provided '}
              </Text>
              <Text style={{color: 'black'}}> {item?.social?.sex}</Text>
            </View>
            <Text style={{color: 'black'}}>
              Address : {item?.social.address.homeAddress || ' Not Provided '}
            </Text>
          </View>

          <TouchableOpacity
            style={{alignSelf: 'flex-end'}}
            onPress={() => {
              setIsDetailsVisible(false);
            }}>
            <Text style={styles.showLess}>Show Less</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  headingText: {
    color: 'black',
    paddingHorizontal: 30,
    paddingTop: 20,
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
  },
  showLess: {
    fontSize: 12,
    fontStyle: 'italic',
    color: 'grey',
    paddingTop: 10,
  },
  padJustifyFlexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  boldName: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },
  flexRowContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  masterWrapperOfSubComp: {
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
    elevation: 5,
  },
  floatingBtn: {
    backgroundColor: 'black',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    position: 'absolute',
    bottom: 60,
    right: 40,
  },
  fullHeight: {
    height: '100%',
    position: 'relative',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default HomeScreen;
