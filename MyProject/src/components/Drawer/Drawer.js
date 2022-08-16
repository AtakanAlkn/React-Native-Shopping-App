import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from '../../screens/Profile/Profile';
import FavoriteScreen from '../../screens/Favorite/Favorite';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
