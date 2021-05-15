import React from 'react';
import { Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { LANDING_HOME } from '../constants/routeName';

const Home = () => {
    return (
        <View>
           <Text>Home</Text>
        </View>
    );
};


const Test1 = () => {
    return (
        <View>
           <Text>Test 1</Text>
        </View>
    );
};


const Test2 = () => {
    return (
        <View>
           <Text>Test 2</Text>
        </View>
    );
};



const HomeNavigator = () => {

    const HomeStack = createStackNavigator();
  
    return (
        <HomeStack.Navigator initialRouteName="LANDING_HOME"  >
            <HomeStack.Screen name={LANDING_HOME} component={Home} />
            <HomeStack.Screen name="Test1" component={Test1} />
            <HomeStack.Screen name="Test2" component={Test2} />
        </HomeStack.Navigator>
    );
};

export default HomeNavigator;
