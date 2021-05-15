import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';
import { HOME_NAVIGATOR } from '../constants/routeName';


const DrawerNavigator = () => {

    const Drawer = createDrawerNavigator();
  
    return (
        <Drawer.Navigator>
            <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
