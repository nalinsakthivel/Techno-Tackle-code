import React from 'react';
import {StyleSheet, TextInput, Dimensions, View} from 'react-native';

import {Paragraph} from '..';
import {colours} from '../../../constants';

const screenWidth = Dimensions.get('window').width;
const Textinput = ({
  title,
  placeholder,
  placeholderTextColor,
  keyboardType,
  value,
  onChangeText,
  style,
  secureTextEntry,
  sstyle,
}) => {
  return (
    <View>
      <View style={styles.textinputContainer}>
        <View style={styles.titleContainer}>
          <Paragraph style={styles.titleText}>{title}</Paragraph>
        </View>
        <TextInput
          style={[styles.textInput, style]}
          autoCapitalize="none"
          autoCorrect
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};

export default Textinput;

const styles = StyleSheet.create({
  textinputContainer: {
    width: screenWidth * 0.87,
    height: 50,
    borderWidth: 1,
    borderColor: colours.Gray,

    borderRadius: 8,
  },
  titleContainer: {
    backgroundColor: colours.White,
    paddingHorizontal: 5,
    position: 'absolute',
    top: -12,
    left: 30,
  },
  titleText: {
    color: colours.Gray,
  },
  textInput: {
    width: screenWidth * 0.87,
    height: 50,
    padding: 15,
  },
});
