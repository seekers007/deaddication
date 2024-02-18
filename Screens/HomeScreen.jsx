import React, {useState} from 'react';
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
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
      name: 'ABC', //social.name
      fatherName: 'DEF', //social.familyDetails.fatherName
      motherName: 'GHI', //social.familyDetails.motherName
      DOB: 'J/K/L', //social.DOB
      address: 'M/N/O', //social.address.homeAddress
      contactNo: '1234567890', //social.phoneNo
      gender: 'M/A', //social.sec
    },

    {
      name: 'ABC', //social.name
      fatherName: 'DEF', //social.familyDetails.fatherName
      motherName: 'GHI', //social.familyDetails.motherName
      DOB: 'J/K/L', //social.DOB
      address: 'M/N/O', //social.address.homeAddress
      contactNo: '1234567890', //social.phoneNo
      gender: 'M/A', //social.sec
    },
    {
      name: 'ABC', //social.name
      fatherName: 'DEF', //social.familyDetails.fatherName
      motherName: 'GHI', //social.familyDetails.motherName
      DOB: 'J/K/L', //social.DOB
      address: 'M/N/O', //social.address.homeAddress
      contactNo: '1234567890', //social.phoneNo
      gender: 'M/A', //social.sec
    },
    {
      name: 'ABC', //social.name
      fatherName: 'DEF', //social.familyDetails.fatherName
      motherName: 'GHI', //social.familyDetails.motherName
      DOB: 'J/K/L', //social.DOB
      address: 'M/N/O', //social.address.homeAddress
      contactNo: '1234567890', //social.phoneNo
      gender: 'M/A', //social.sec
    },
    {
      name: 'ABC', //social.name
      fatherName: 'DEF', //social.familyDetails.fatherName
      motherName: 'GHI', //social.familyDetails.motherName
      DOB: 'J/K/L', //social.DOB
      address: 'M/N/O', //social.address.homeAddress
      contactNo: '1234567890', //social.phoneNo
      gender: 'M/A', //social.sec
    },
  ];

  const handleNav = () => {
    navigation.navigate('FormPage');
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

const RenderItem = ({item, idx}) => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  return (
    <Pressable style={styles.masterWrapperOfSubComp}>
      <View style={styles.flexRowContainer}>
        <View>
          <Text style={styles.boldName}>{item?.name}</Text>

          <Text style={{color: '#000', lineHeight: 25}}>S/o</Text>

          <Text style={{color: '#000'}}>
            dhshdadhkadahjk{' '}
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
              Motther name{' '}
              <Text style={{fontStyle: 'italic', fontSize: 10}}>
                (Mother name)
              </Text>{' '}
            </Text>
            <View style={styles.padJustifyFlexRow}>
              <Text style={{color: 'black'}}>Mobile: 78887774367</Text>
              <Text style={{color: 'black'}}>DOB: 12/12/2002</Text>
              <Text style={{color: 'black'}}> MALE</Text>
            </View>
            <Text style={{color: 'black'}}>
              Address :
              {
                'dhjksdhsdjkafjkfhd dsajdhjk dsadsahdjk dsahdjahdjkdj dhjksahdasdj d ajkdhadhk  hdkj h ksdjsdjkdjlad djsddjal fhdjkfjkdfj fjdsfjkhfs fkjdjsfjkhdfjh'
              }
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
