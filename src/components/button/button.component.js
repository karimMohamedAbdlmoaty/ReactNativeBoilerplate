import React from 'react';
import { Text, View,TouchableOpacity} from 'react-native';
import {styles} from './button.style';

export const Button =({ buttonText, buttonStyles,nextScreen,navigation,buttontestID}) => {
  const {buttonColor,align} = buttonStyles;
  return(
    <View style={styles.container}>
      <TouchableOpacity testID={buttontestID} style={[styles.newAccount,{alignItems:align}]} onPress={() => navigation.navigate(nextScreen)}>
        <Text style={[styles.newAccountText,{color:buttonColor}]}> {buttonText} </Text>
      </TouchableOpacity>
    </View>        
  );
};

