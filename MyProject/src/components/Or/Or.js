import * as React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './Or.style';

const Or = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.or}>
        <View style={styles.icon}>
          <TouchableOpacity>
            <View style={styles.box}>
              <Image
                source={require('../../assets/Icons/google.png')}
                style={styles.iconImage}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.box}>
              <Image
                source={require('../../assets/Icons/apple.png')}
                style={styles.iconImage}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.box}>
              <Image
                source={require('../../assets/Icons/facebook.png')}
                style={styles.iconImage}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.signUp}>
        <Text>I'm a new user. </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.copyright}>
        <Text>{'\u00A9'}Atakan Alkan</Text>
      </View>
    </View>
  );
};

export default Or;
