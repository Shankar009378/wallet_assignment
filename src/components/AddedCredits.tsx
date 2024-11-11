import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';

const AddedCredits = ({ navigation }: { navigation: NavigationProp<any> }) => (
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
        </View>

        <View style={styles.content}>
            <View style={{ backgroundColor: '#725690', width: 72, height: 72, borderRadius: 29997 }}>
                <Image
                    source={require('../assets/tick.png')}
                    style={styles.image}
                />
            </View>
            <Text style={styles.text}>Credits Added to Wallet</Text>
        </View>

        <Text style={styles.detailsText}>Details</Text>
        <View style={styles.details}>
            <View style={styles.card}>
                <View style={styles.row}>
                    <Text style={styles.leftText}>Order ID</Text>
                    <Text style={styles.rightText}>#HJDVUY2387JHWE</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.leftText}>Credits</Text>
                    <Text style={styles.rightText}>15,000</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.leftText}>Paid Via</Text>
                    <Text style={styles.rightText}>PhonePe UPI</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.leftText}>Amount</Text>
                    <Text style={styles.rightText}>₹14,500</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.leftText}>Convenience Fees</Text>
                    <Text style={styles.rightText}>₹0</Text>
                </View>
            </View>

            <View style={styles.rowWithBackground}>
                <Text style={styles.textWithBackground}>Paid Amount</Text>
                <Text style={styles.textWithBackground}>₹14,500</Text>
            </View>
        </View>


        <TouchableOpacity style={styles.button} onPress={() => {/* Add your navigation or functionality here */ }}>
            <Text style={styles.buttonText}>View Updated Balance</Text>
        </TouchableOpacity>
    </SafeAreaView>
);

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
    details: {
        alignItems: 'center',
    },
    detailsText: {
        marginHorizontal: 20,
        fontWeight: '700',
        marginTop: 40,
        fontSize: 16,
        lineHeight: 20,
        color: '#1C2024',
        fontFamily: 'Avenir',
        marginBottom: 10,
    },
    card: {
        borderWidth: 1,
        borderColor: 'rgba(67, 3, 140, 0.23)',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingHorizontal: 12,
        paddingTop: 12,
        backgroundColor: '#FFF',
        width: '90%',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    leftText: {
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.04,
        color: '#1C2024',
        fontWeight: '300',
        fontFamily: 'Avenir',
        textAlign: 'left',
    },
    rightText: {
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.04,
        color: '#1C2024',
        fontWeight: '300',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
    rowWithBackground: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        backgroundColor: '#CDBFDD',
    },
    textWithBackground: {
        paddingVertical: 12,
        paddingHorizontal: 12,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '700',
        color: '#1C2024',
        fontFamily: 'Avenir',
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
        alignItems: 'center',
        marginTop: 20,
    },
    image: {
        width: 40,
        height: 32,
        top: 18,
        left: 14,
    },
    text: {
        marginTop: 20,
        fontSize: 28,
        lineHeight: 30,
        fontWeight: '700',
        color: '#1C2024',
        textAlign: 'center',
        fontFamily: 'Avenir',
    },
    button: {
        backgroundColor: '#725690',
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 9999,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 70,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '500',
        fontFamily: 'Avenir',
    },
});

export default AddedCredits;
