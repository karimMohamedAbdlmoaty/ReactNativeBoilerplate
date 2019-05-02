import React from 'react';
import {Text, View,TextInput} from 'react-native';
import {styles} from './input.style';

export const Input =({ titleText,label,placeHolderText,borderBottomValue ,testIdValue }) => {
  return(
    <View style={[styles.container,{borderBottomWidth:borderBottomValue}]}>
      <View style={styles.fullName}>
        <View style={styles.fullNameLabel}>
          <Text> {label}</Text>
        </View>
        <View style={styles.fullNameInput}>
          <TextInput testID={testIdValue} style={styles.fullNameInputBody} placeholder = {placeHolderText} />
        </View>
      </View>
    </View>
  );
};


