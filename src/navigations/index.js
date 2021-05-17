import React, {useContext, useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar} from 'react-native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import {GlobalContext} from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Splash from '../screens/Splash';
import SplashScreen from 'rn-splash-screen';


const AppNavContainer = () => {

  const { authState: {isLoggedIn} } = useContext(GlobalContext);

  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn);
  const [authLoaded, setauthLoaded] = useState(false);
  

  const getUser = async () => {
        
    try {
        const user = await AsyncStorage.getItem('user');

        if(user)
        {
            setauthLoaded(true);
            setIsAuthenticated(true);
        }else{
            setauthLoaded(true);
            setIsAuthenticated(false);
        }
    } catch (error) {
        
    }
}

useEffect(() => {
    getUser();
}, [isLoggedIn]);


useEffect(() => {
  
  if(authLoaded)
  {
    SplashScreen.hide();
    // setstatusBar('#FFFFFF');
  }
  
}, [authLoaded]);




  console.log('isLoggedIn :>> ',isLoggedIn); 
  console.log('isAuthenticated :>> ',isAuthenticated); 

  return (
      // <Splash />
        <>
        
        
        {authLoaded ? 
          (<NavigationContainer>
            {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
          </NavigationContainer>)
          : <Splash />}
        </>
  );
};

export default AppNavContainer;
