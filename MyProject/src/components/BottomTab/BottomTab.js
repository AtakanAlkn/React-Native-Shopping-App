import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Home/Home';
import FavoriteScreen from '../../screens/Favorite/Favorite';
import ShopScreen from '../../screens/Shop/Shop';
import ProfileScreen from '../../screens/Profile/Profile';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Anasayfa"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Icon name="home" size={25} color="black" />,
        }}
      />
      <Tab.Screen
        name="Favorilerim"
        component={FavoriteScreen}
        options={{
          tabBarIcon: () => <Icon name="heart" size={25} color="black" />,
        }}
      />
      <Tab.Screen
        name="Sepetim"
        component={ShopScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="shopping-cart" size={25} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Hesabım"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <Icon name="user" size={25} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
