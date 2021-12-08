import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colours} from '../../../constants';
const Paragraph = props => {
  return (
    <View>
      <Text style={[styles.text, props.style]}>{props.children}</Text>
    </View>
  );
};

export default Paragraph;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: colours.Black,
  },
});
