import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {Paragraph} from '../atom';
import {ApiData} from '../organisms';
import {Arrow} from '../../Assets/Icon';
import {colours} from '../../constants';

import {useNavigation} from '@react-navigation/native';

const home = () => {
  const navigation = useNavigation();

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.arrowContainer} onPress={onBack}>
          <Arrow />
        </TouchableOpacity>
        <View style={styles.headingContainer}>
          <Paragraph style={styles.heading}>English Monarchs</Paragraph>
        </View>
      </View>

      <ApiData />
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colours.White,
  },
  topContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  arrowContainer: {
    width: '20%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingContainer: {
    width: '70%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
