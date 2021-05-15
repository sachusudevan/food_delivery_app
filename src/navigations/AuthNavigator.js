import React from 'react';
import { Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { LOGIN, REGISTER } from '../constants/routeName';
import LoginScreen from '../screens/Login';
import Register from '../screens/Register';

const AuthNavigator = () => {

    const AuthStack = createStackNavigator();
  
    return (
        <>
        <AuthStack.Navigator screenOptions={{headerShown:false}}>
            <AuthStack.Screen name={LOGIN} component={LoginScreen} />
            <AuthStack.Screen name={REGISTER} component={Register} />
        </AuthStack.Navigator>
        </>
    );
};

export default AuthNavigator;
