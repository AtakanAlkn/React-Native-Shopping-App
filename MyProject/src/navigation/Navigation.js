import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RegisterScreen from '../screens/Register/Register';
import SignInScreen from '../screens/SignIn/SignIn';
import LoginScreen from '../screens/Login/Login';
import HomeScreen from '../screens/Home/Home';
import BottomTab from '../components/BottomTab/BottomTab';
import Details from '../screens/Details/Details';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default MyStack;
