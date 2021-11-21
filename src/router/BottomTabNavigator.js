import React from 'react';
import {Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';

import logo from '../assets/images/logo.png';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({color, size}) => {
        if (route.name === 'Home') {
          return <Foundation name="home" size={size} color={color} />;
        }
        if (route.name === 'Discovery') {
          return <Feather name="search" size={size} color={color} />;
        }
        if (route.name === 'Post') {
          return <Feather name="plus-square" size={size} color={color} />;
        }
        if (route.name === 'Notifications') {
          return <AntDesign name="hearto" size={size} color={color} />;
        }
        if (route.name === 'Profile') {
          return <Ionicons name="person-outline" size={size} color={color} />;
        }
      },
      tabBarActiveTintColor: '#000',
      tabBarInactiveTintColor: 'gray',
      tabBarShowLabel: false,
      headerTitle: 'Instagram',
      headerLeft: () => (
        <Feather
          name="camera"
          size={25}
          color={'#000'}
          style={{marginLeft: 10}}
        />
      ),
      headerTitle: () => (
        <Image
          source={logo}
          resizeMode="contain"
          style={{width: 135, height: 50}}
        />
      ),
      headerRight: () => (
        <Ionicons
          name="paper-plane-outline"
          size={25}
          color={'#000'}
          style={{marginRight: 10}}
        />
      ),
    })}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Discovery" component={DiscoveryScreen} />
    <Tab.Screen name="Post" component={CreatePostScreen} />
    <Tab.Screen name="Notifications" component={NotificationsScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default BottomTabNavigator;
