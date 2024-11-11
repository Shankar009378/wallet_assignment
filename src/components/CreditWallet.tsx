import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, TextInput } from 'react-native';

const cardData = [
    { id: 1, credits: 15000, discount: '30% off', oldPrice: 15000, newPrice: 14500 },
    { id: 2, credits: 10000, discount: '20% off', oldPrice: 12000, newPrice: 10000 },
    { id: 3, credits: 5000, discount: '10% off', oldPrice: 5500, newPrice: 5000 },
];

const CreditWallet = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [amount, setAmount] = useState('');
    const navigator = useNavigation();

    const handleCardSelect = (id: number) => {
        setSelectedId(id);
        setAmount('');
    };

    const handleAmountChange = (text: string) => {
        setAmount(text);
        setSelectedId(null);
    };

    const canProceed = selectedId !== null || amount.length > 0;

    const renderCard = ({ item }: { item: { id: number; credits: number; discount: string; oldPrice: number; newPrice: number } }) => (
        <TouchableOpacity
            style={[
                styles.card,
                selectedId === item.id && styles.selectedCard,
            ]}
            onPress={() => handleCardSelect(item.id)}
            disabled={amount.length > 0}
        >
            <View style={styles.cardContent}>
                <View style={styles.radioButton}>
                    {selectedId === item.id && <View style={styles.radioButtonInner} />}
                </View>

                <View style={styles.creditsContainer}>
                    <Image source={require('../assets/Logo.png')} style={styles.icon} />
                    <Text style={styles.creditsText}>{item.credits} <Text style={{
                        fontSize: 12,
                        textAlign: 'right',
                        lineHeight: 12,
                        letterSpacing: 0.04,
                        fontWeight: '300',
                        color: '#333333',
                        fontFamily: 'Avenir',
                    }}>Credits</Text></Text>
                </View>

                <Text style={styles.discountText}>{item.discount}</Text>
            </View>

            <Text style={styles.withText}>with</Text>

            <View style={styles.priceContainer}>
                <Text style={styles.oldPriceText}>{item.oldPrice}</Text>
                <Text style={styles.newPriceText}>{item.newPrice} <Text style={{
                    fontSize: 12,
                    textAlign: 'right',
                    lineHeight: 12,
                    letterSpacing: 0.04,
                    fontWeight: '300',
                    color: '#333333',
                    fontFamily: 'Avenir',
                }}>Credits</Text></Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.inlineContainer}>
                <Text style={styles.topText}>All credits to your wallet</Text>
                <View style={styles.badgeContainer}>
                    <Text style={styles.badgeText}>1 Credit = 1</Text>
                </View>
            </View>
            <Text style={styles.normalText}>Choose from our most purchased options</Text>

            <FlatList
                data={cardData}
                renderItem={renderCard}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.scrollContainer}
            />

            <Text style={styles.orText}>or</Text>

            <View style={{ marginTop: 20 }}>
                <Text style={styles.amountText}>Enter amount Manually</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter here"
                    keyboardType="numeric"
                    value={amount}
                    onChangeText={handleAmountChange}
                    editable={selectedId === null}
                />
            </View>

            <TouchableOpacity
                style={[styles.proceedButton, !canProceed && styles.disabledButton]}
                onPress={() => (navigator as any).navigate('Payment')}
                disabled={!canProceed}
            >
                <Text style={styles.proceedButtonText}>Proceed to Pay</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F1F0F2',
        marginHorizontal: 20,
        marginTop: 50,
        padding: 12,
        borderWidth: 1,
        borderRadius: 16,
        borderColor: 'rgba(0, 0, 47, 0.149)',
    },
    disabledButton: {
        backgroundColor: 'rgba(114, 86, 144, 0.6)',
    },
    topText: {
        fontSize: 16,
        color: '#1C2024',
        lineHeight: 20,
        fontWeight: '700',
        fontFamily: 'Avenir',
    },
    inlineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    badgeContainer: {
        backgroundColor: '#CDBFDD',
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderRadius: 9999,
    },
    badgeText: {
        fontFamily: 'Avenir',
        fontWeight: '500',
        fontSize: 12,
        color: '#333',
    },
    normalText: {
        marginTop: 6,
        fontFamily: 'Avenir',
        fontWeight: '300',
        fontSize: 12,
        color: '#1C2024',
    },
    scrollContainer: {
        marginTop: 20,
    },
    card: {
        backgroundColor: '#F1F0F2',
        borderWidth: 1,
        borderColor: '#CDBFDD',
        borderRadius: 16,
        padding: 16,
        marginRight: 10,
        marginBottom: 20,
        width: 252,
    },
    selectedCard: {
        borderColor: '#7E57C2',
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    radioButton: {
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#7E57C2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioButtonInner: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#7E57C2',
    },
    creditsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    icon: {
        width: 12,
        height: 12,
        marginRight: 6,
    },
    creditsText: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '700',
        color: '#333333',
        fontFamily: 'Avenir',
    },
    discountText: {
        marginTop: 5,
        fontSize: 12,
        lineHeight: 14,
        fontFamily: 'Avenir',
        letterSpacing: 0.04,
        fontWeight: '500',
        color: '#1C2024',
    },
    withText: {
        fontFamily: 'Avenir',
        fontWeight: '300',
        fontSize: 12,
        lineHeight: 14,
        letterSpacing: 0.04,
        color: '#333333',
        marginTop: 2,
        marginLeft: 42,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
        marginLeft: 42,
    },
    oldPriceText: {
        fontFamily: 'Avenir',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20,
        color: 'rgba(0, 8, 48, 0.2745)',
        textDecorationLine: 'line-through',
        marginRight: 6,
    },
    newPriceText: {
        fontFamily: 'Avenir',
        fontWeight: '700',
        fontSize: 16,
        color: '#333333',
        lineHeight: 20,
    },
    orText: {
        fontFamily: 'Avenir',
        fontWeight: '300',
        fontSize: 12,
        lineHeight: 12,
        letterSpacing: 0.04,
        color: '#1C2024',
    },
    amountText: {
        fontFamily: 'Avenir',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20,
        color: '#1C2024',
    },
    input: {
        marginTop: 10,
        height: 40,
        borderColor: 'rgba(0, 0, 47, 0.149)',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 9999,
        paddingHorizontal: 10,
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 20,
        color: '#1C2024',
        fontFamily: 'Avenir',
    },
    proceedButton: {
        marginTop: 50,
        backgroundColor: '#725690',
        paddingVertical: 16,
        borderRadius: 9999,
        alignItems: 'center',
    },
    proceedButtonText: {
        fontSize: 16,
        lineHeight: 20,
        color: '#FFFFFF',
        fontWeight: '500',
        fontFamily: 'Avenir',
    },
});

export default CreditWallet;
