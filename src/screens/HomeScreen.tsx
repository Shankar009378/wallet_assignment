import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import UserCard from '../components/UserCard';
import AvailableCreditsCard from '../components/AvailableCreditsCard';
import CreditWallet from '../components/CreditWallet';
import Transaction from '../components/Transaction';
import { useAuth } from '../context/AuthContext';

const HomeScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const { logout } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: 'emilys',
            password: 'emilyspass',
          }),
          credentials: 'include',
        });
        const data = await response.json();
        setUserData(data); 
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <View style={styles.circle}>
            <Image
              source={require('../assets/arrow_left.png')}
              style={styles.arrowIcon}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Wallet</Text>
        <TouchableOpacity onPress={logout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>LogOut</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <UserCard />

        <AvailableCreditsCard />

        <CreditWallet />

        <Transaction />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  logoutButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#8B5FBF',
    borderRadius: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  backButton: {
    marginRight: 10,
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 20,
    backgroundColor: '#725690',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    width: 16,
    height: 16,
    tintColor: '#fff',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: -0.04,
    fontWeight: '700',
    color: '#1C2024',
    fontFamily: 'Avenir',
  },
  logoutText: {
    fontSize: 14,
    color: '#ffff',
    fontWeight: '500',
  },
});

export default HomeScreen;
