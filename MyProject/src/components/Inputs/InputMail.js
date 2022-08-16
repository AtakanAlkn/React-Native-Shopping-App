import React from 'react';
import {View, TextInput} from 'react-native';

const InputMail = props => {
  return (
    <View>
      <TextInput
        placeholder="E-mail"
        placeholderTextColor={'#9795A4'}
        onChangeText={props.onChangeText}
        style={props.style}
      />
    </View>
  );
};

export default InputMail;
