import React from 'react';
import { View , Text } from 'react-native';
import {Button} from '../../../components/button/button.component';
import { styles } from './confirm-password.style';


export const ConfirmPassword= ({navigation}) => {
  const newAccountButtonStyles = {align:'center' };
  return(
    <View style={styles.container}>

      <Button buttonStyles={newAccountButtonStyles} buttonText="Verify password" nextScreen="ResetPassword" navigation={navigation}/>

      <Text>Confirm-password screen</Text>

    </View>
  );
};


