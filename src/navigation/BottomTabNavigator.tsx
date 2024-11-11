import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PaymentGateway from '../components/PaymentGateway';
import AddedCredits from '../components/AddedCredits';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#725690',
    }}>
    <Tab.Screen name="Home" component={HomeScreen} options={{
      tabBarIcon: ({ focused }) => (
        <Image
          source={require('../assets/home.png')}
          style={{
            width: 24,
            height: 24,
            tintColor: focused ? '#725690' : '#333',
          }}
        />
      ),
      tabBarLabel: 'Home',
    }} />
    <Tab.Screen name="Profile" component={ProfileScreen} options={{
      tabBarIcon: ({ focused }) => (
        <Image
          source={require('../assets/profile.png')}
          style={{
            width: 24,
            height: 24,
            tintColor: focused ? '#725690' : '#333',
          }}
        />
      ),
      tabBarLabel: 'Profile',
    }} />
  </Tab.Navigator>
);

export default BottomTabNavigator;
