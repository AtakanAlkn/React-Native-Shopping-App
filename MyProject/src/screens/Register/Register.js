/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {useState, useEffect, useCallback} from 'react';
import auth from '@react-native-firebase/auth';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ToastAndroid,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from 'react-native';
import styles from './Register.style';

const Register = ({navigation}) => {
  const showToast = () => {
    ToastAndroid.show(
      'Kaydınız başarıyla yapıldı!',
      ToastAndroid.LONG,
      ToastAndroid.TOP,
    );
  };
  const [buttoncolor, setButtonColor] = useState();
  const [pasif, setPasif] = useState(true);
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const saveRegister = () => {
    auth()
      .createUserWithEmailAndPassword(mail, password)
      .then(() => {
        showToast();
        navigation.navigate('BottomTab');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Mail Kullanımda');
        }
        if (error.code === 'auth/invalid-email') {
          Alert.alert('Geçersiz Mail');
        }
      });
  };

  const activeButton = useCallback(() => {
    if (mail === '' || password === '') {
      setPasif(true);
    } else {
      setPasif(false);
    }
  }, [mail, password]);

  useEffect(() => {
    activeButton();
  }, [activeButton, mail, password]);

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
                  <Text style={styles.mainText}>Hello Guest!</Text>
                </View>
                <View style={styles.contentTextCard}>
                  <Text style={styles.contentText}>It's easy to register</Text>
                  <Text style={styles.contentText}>Start Now!</Text>
                </View>
              </View>
            </View>
            <View style={styles.registerCard}>
              <View style={styles.inputCard}>
                <TextInput
                  style={styles.input}
                  placeholder="E-mail"
                  placeholderTextColor={'#9795A4'}
                  onChangeText={setMail}
                />
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  placeholder="Password"
                  placeholderTextColor={'#9795A4'}
                  onChangeText={setPassword}
                />
                <View>
                  <TouchableOpacity
                    disabled={pasif}
                    style={styles.button}
                    onPress={saveRegister}>
                    <Text style={styles.buttonText}>Register</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.continue}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{flex: 1, height: 1, backgroundColor: 'black'}}
                    />
                    <View>
                      <Text style={{width: 130, textAlign: 'center'}}>
                        Or continue with
                      </Text>
                    </View>
                    <View
                      style={{flex: 1, height: 1, backgroundColor: 'black'}}
                    />
                  </View>
                </View>
              </View>
            </View>
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
            <View style={styles.copyright}>
              <Text>{'\u00A9'}Atakan Alkan</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Register;
