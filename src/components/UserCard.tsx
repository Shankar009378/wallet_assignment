import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useAuth } from '../context/AuthContext';

const UserCard = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (

    <View style={styles.container}>
      <Image source={{ uri: user.image }} style={styles.image} />

      <View style={styles.textContainer}>
        <View style={styles.topTextContainer}>
          <Text style={styles.topText}>{`${user.firstName} ${user.lastName}`}</Text>

          {/* Verified Badge */}
          <View style={styles.verifiedContainer}>
            <Image
              source={require('../assets/verified.png')}
              style={styles.verifiedIcon}
            />
            <Text style={styles.verifiedText}>Verified</Text>
          </View>
        </View>
        <Text style={styles.bottomText}>+91 8930-188-923</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
    padding: 12,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: 'rgba(0, 0, 47, 0.149)',
  },
  verifiedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CDBFDD',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 9999,
  },
  verifiedIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  verifiedText: {
    fontFamily: 'Avenir',
    fontWeight: '500',
    fontSize: 12,
    letterSpacing: 0.04,
    lineHeight: 14,
    color: '#333',
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 25,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  topTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topText: {
    fontSize: 16,
    color: 'rgba(17, 0, 36, 0.8745)',
    marginBottom: 10,
    lineHeight: 20,
    fontWeight: '700',
    fontFamily: 'Avenir',
  },
  bottomText: {
    fontFamily: 'Avenir',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 0.04,
    color: 'rgba(17, 0, 36, 0.8745)',
  }
});

export default UserCard;
