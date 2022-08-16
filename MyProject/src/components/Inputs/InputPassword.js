import React from 'react';
import {View, TextInput} from 'react-native';

const InputPassword = props => {
  return (
    <View>
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor={'#9795A4'}
        onChangeText={props.onChangeText}
        style={props.style}
      />
    </View>
  );
};

export default InputPassword;
