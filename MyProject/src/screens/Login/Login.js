/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './Login.style';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../assets/Image/shop.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.textCard}>
        <View style={styles.mainTextCard}>
          <Text style={styles.mainText}>Discover your</Text>
          <Text style={styles.mainText}>Dream product Here</Text>
        </View>
        <View style={styles.contentTextCard}>
          <Text style={styles.contentText}>
            Explore all the most exciting products on your interest
          </Text>
        </View>
        <View style={styles.buttonCard}>
          <TouchableOpacity
            style={styles.buttonKayıt}
            onPress={() => navigation.navigate('Register')}>
            <Text style={{fontWeight: 'bold', color: '#666274', fontSize: 20}}>
              Register
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonGiris}
            onPress={() => navigation.navigate('SignIn')}>
            <Text style={{fontWeight: 'bold', color: '#666274', fontSize: 20}}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
