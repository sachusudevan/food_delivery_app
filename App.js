import 'react-native-gesture-handler';
import React from 'react';
import AppNavContainer from './src/navigations';
import GlobalProvider from './src/context/Provider';
import Animated from 'react-native-reanimated';


const App = () => {

  return (
    <GlobalProvider >
      <AppNavContainer />
    </GlobalProvider>
  );
};

export default App;
