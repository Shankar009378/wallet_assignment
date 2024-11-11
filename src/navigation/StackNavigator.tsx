import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PaymentGateway from '../components/PaymentGateway';
import AddedCredits from '../components/AddedCredits';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';

const Navigator = createNativeStackNavigator();

const StackNavigator = () => (
    <Navigator.Navigator
        initialRouteName="BottomTab"
        screenOptions={{
            headerShown: false,
        }}>
        <Navigator.Screen name="BottomTab" component={BottomTabNavigator} />
        <Navigator.Screen name="Payment" component={PaymentGateway} />
        <Navigator.Screen name="Credits" component={AddedCredits} />
    </Navigator.Navigator>
);

export default StackNavigator;
