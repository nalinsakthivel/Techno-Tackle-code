import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';

import {Paragraph} from '../../atom';

import axios from 'axios';

const ApiData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://mysafeinfo.com/api/data?list=englishmonarchs&format=json')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  console.log(`data`, data);
  return (
    <FlatList
      style={styles.flatList}
      data={data}
      keyExtractor={(item, index) => `country${index}`}
      renderItem={({item, index}) => (
        <View style={styles.dataContainer}>
          <Paragraph style={styles.data}>Country:{item.Country}</Paragraph>
          <Paragraph style={styles.data}>House:{item.House}</Paragraph>
          <Paragraph style={styles.data}>Name:{item.Name}</Paragraph>
          <Paragraph style={styles.data}>Reign:{item.Reign}</Paragraph>
        </View>
      )}
    />
  );
};

export default ApiData;

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    paddingBottom: 20,
  },
  dataContainer: {
    width: '95%',
    height: 100,
    justifyContent: 'center',
    paddingLeft: 10,
    margin: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
