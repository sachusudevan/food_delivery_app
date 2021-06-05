import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LANDING_HOME } from '../constants/routeName';
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Icon from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/theme/colors';
import Home from '../screens/Home/Home';
import Location from '../screens/Location/Location';
import Profile from '../screens/Profile/Profile';
import Wishlist from '../screens/Wishlist/Wishlist';
import Cart from '../screens/Cart/Cart';


const HomeNavigator = () => {

    const HomeStack = createBottomTabNavigator();

    const Tabs = AnimatedTabBarNavigator();
  
    return (
        <>
        
            <StatusBar barStyle="dark-content" backgroundColor={colors.home_statusbar} />
            <Tabs.Navigator 
                initialRouteName="Home"
                tabBarOptions={{
                    activeTintColor: colors.TabactiveTintColor,
                    inactiveTintColor: colors.TabinactiveTintColor,
                    activeBackgroundColor: colors.TabactiveBackgroundColor,
                    
                    tabStyle:{
                        borderRadius:50,
                        marginVertical:-20,
                        marginBottom:0,
                        // marginLeft:10,
                        // marginRight:10,
                        
                    },
                    labelStyle:{
                        display: 'none'
                    }
                }}
            
            >

            <Tabs.Screen
                name="Home"
                component={Home}
                options={{
                    // tabBarVisible:false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name="home"
                            size={size ? size : 24}
                            color={focused ? color : colors.tabBarIcon}
                            focused={focused}
                            color={color}
                        />
                    )
                }}
            />

            <Tabs.Screen
                name="Test1"
                component={Cart}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name="profile"
                            size={size ? size : 24}
                            color={color}
                            focused={focused}
                            color={color}
                        />
                    )
                }}
            />

            <Tabs.Screen
                name="Test2"
                component={Wishlist}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name="hearto"
                            size={size ? size : 24}
                            color={focused ? color : colors.tabBarIcon}
                            focused={focused}
                            color={color}
                        />
                    )
                }}
            />
            
            <Tabs.Screen
                name="Test3"
                component={Location}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <SimpleLineIcons
                            name="location-pin"
                            size={size ? size : 24}
                            color={focused ? color : colors.tabBarIcon}
                            focused={focused}
                            color={color}
                        />
                    )
                }}
            />

            <Tabs.Screen
                name="Test4"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialCommunityIcons
                            name="account-circle-outline"
                            size={size ? size : 24}
                            color={focused ? color : colors.tabBarIcon}
                            focused={focused}
                            color={color}
                        />
                    )
                }}
            />

            </Tabs.Navigator>

        </>
    );
};

export default HomeNavigator;
