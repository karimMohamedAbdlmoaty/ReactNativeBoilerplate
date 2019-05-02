import React from 'react';
import { View , Text } from 'react-native';
import {Button} from '../../../components/button/button.component';
import { styles } from './forget-password.style';


export const ForgetPassword= ({navigation}) => {
  const newAccountButtonStyles = {align:'center' };
  return(
    <View style={styles.container}>

      <Button buttonStyles={newAccountButtonStyles} buttonText="Continue" nextScreen="ConfirmPassword" navigation={navigation}/>

      <Text>Forget-password screen</Text>

    </View>
  );
};


