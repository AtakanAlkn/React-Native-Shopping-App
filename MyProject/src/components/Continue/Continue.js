import React from 'react';
import {View, Text} from 'react-native';

const Continue = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      <View>
        <Text style={{width: 130, textAlign: 'center'}}>Or continue with</Text>
      </View>
      <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
    </View>
  );
};

export default Continue;
