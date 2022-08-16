/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import Or from '../../components/Or/Or';
import Continue from '../../components/Continue/Continue';
import styles from './SignIn.style';
import InputMail from '../../components/Inputs/InputMail';
import InputPassword from '../../components/Inputs/InputPassword';

const Register = ({navigation}) => {
  const [numbers, setNumbers] = useState();
  const [passwords, setPasswords] = useState();

  const saveSignIn = () => {
    auth()
      .signInWithEmailAndPassword(numbers, passwords)
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{name: 'BottomTab'}],
        });
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          Alert.alert('Kullanıcı bulunamadı');
        }
        if (error.code === 'auth/wrong-password') {
          Alert.alert('Hatalı şifre');
        }
      });
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View>
              <View style={styles.textCard}>
                <View style={styles.mainTextCard}>
                  <Text style={styles.mainText}>Hello Again!</Text>
                </View>
                <View style={styles.contentTextCard}>
                  <Text style={styles.contentText}>Welcome back you've</Text>
                  <Text style={styles.contentText}>been missed!</Text>
                </View>
              </View>
            </View>
            <View style={styles.registerCard}>
              <View style={styles.inputCard}>
                <InputMail style={styles.input} onChangeText={setNumbers} />
                <InputPassword
                  style={styles.input}
                  onChangeText={setPasswords}
                />
                <View style={styles.forgotCard}>
                  <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity style={styles.button} onPress={saveSignIn}>
                    <Text style={styles.buttonText}>Sign In</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.continue}>
                  <Continue />
                </View>
              </View>
            </View>
            <View>
              <Or />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Register;
