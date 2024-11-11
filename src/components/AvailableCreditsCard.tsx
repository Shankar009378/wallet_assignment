import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';

const AvailableCreditsCard = () => (
    <View style={styles.container}>
        <View>
            <Text style={styles.topText}>Available Credits</Text>
        </View>
        <View style={styles.inlineContainer}>
            <Image
                source={require('../assets/Logo.png')}
                style={styles.icon}
            />
            <Text style={styles.inlineText}>0</Text>
        </View>
        <View>
            <Text style={styles.bottomText}>Credits can be used for all bookings, food orders, events.</Text>
        </View>

        <View style={styles.dashedBorder}></View>

        <View style={styles.creditsInfoContainer}>
            <Text style={styles.creditsInfoText}>What are Credits?</Text>
        </View>

    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F1F0F2',
        marginHorizontal: 20,
        padding: 12,
        borderWidth: 1,
        borderRadius: 16,
        borderColor: 'rgba(0, 0, 47, 0.149)',
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
    inlineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 6,
    },
    inlineText: {
        fontSize: 28,
        fontWeight: '700',
        letterSpacing: -0.12,
        color: 'rgba(17, 0, 36, 0.8745)',
        fontFamily: 'Avenir',
    },
    dashedBorder: {
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(17, 0, 36, 0.2)',
        marginVertical: 12,
    },
    bottomText: {
        fontFamily: 'Avenir',
        fontWeight: '300',
        fontSize: 12,
        lineHeight: 14,
        letterSpacing: 0.04,
        color: 'rgba(17, 0, 36, 0.8745)',
    },
    creditsInfoContainer: {
        backgroundColor: '#725690',
        borderRadius: 9999,
        width: 115,
        paddingVertical: 8,
        paddingHorizontal: 8,
    },
    creditsInfoText: {
        fontSize: 12,
        lineHeight: 14,
        letterSpacing: 0.04,
        color: '#FFFFFF',
        fontWeight: '500',
        fontFamily: 'Avenir',
    },
});
export default AvailableCreditsCard;
