import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PaymentGateway = ({ navigation }: { navigation: NavigationProp<any> }) => {
  
  const navigator = useNavigation();

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
      <Text style={styles.headerTitle}>Payment Gateway</Text>
    </View>

    <View style={styles.content}>
      <TouchableOpacity style={styles.payButton} onPress={() => (navigator as any).navigate('Credits')}>
        <Text style={styles.payButtonText}>Pay</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  payButton: {
    alignItems: 'center',
    backgroundColor: '#725690',
    paddingVertical: 16,
    position: 'absolute',
    bottom: 0,
    marginBottom: 50,
    paddingHorizontal: 32,
    borderRadius: 9999,
    width: '80%',
  },
  payButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
    fontFamily: 'Avenir',
  },
});

export default PaymentGateway;
