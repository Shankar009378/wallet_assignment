import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';

const dummyData = [
    {
        id: '1',
        type: 'Added Credits',
        date: '28 Sep 2024',
        time: '12:32 PM',
        amount: '+100',
        icon: require('../assets/IconButton1.png'),
    },
    {
        id: '2',
        type: 'Funds Deducted',
        date: '28 Sep 2024',
        time: '12:32 PM',
        amount: '-20',
        icon: require('../assets/IconButton2.png'),
    },
    {
        id: '3',
        type: 'Money Refunded',
        date: '28 Sep 2024',
        time: '12:32 PM',
        amount: '+50',
        icon: require('../assets/IconButton2.png'),
    },
    {
        id: '4',
        type: 'Added Credits',
        date: '28 Sep 2024',
        time: '12:32 PM',
        amount: '+150',
        icon: require('../assets/IconButton2.png'),
    },
];

interface Transaction {
    id: string;
    type: string;
    date: string;
    time: string;
    amount: string;
    icon: any;
}

const TransactionCard = ({ transaction, isLast }: { transaction: Transaction; isLast: boolean }) => {
    return (
        <View style={[styles.cardContainer, isLast && { borderBottomWidth: 0 }]}>
            <Image source={transaction.icon} style={styles.cardIcon} />
            <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{transaction.type}</Text>
                <Text style={styles.cardDate}>{transaction.date}</Text>
            </View>
            <View style={styles.cardAmountContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/Logo.png')} style={styles.amountIcon} />
                    <Text style={styles.cardAmount}>{transaction.amount}</Text>
                    <Image source={require('../assets/arrow_down.png')} style={styles.downArrowIcon} />
                </View>
                <Text style={styles.cardTime}>{transaction.time}</Text>
            </View>
        </View>
    );
};

const Transaction = () => {
    const [selectedTab, setSelectedTab] = useState('All');
    const [hasTransactions] = useState(true);

    const filteredData = dummyData.filter((item) => {
        if (selectedTab === 'All') return true;
        return selectedTab === 'Addition' && item.amount.startsWith('+')
            || selectedTab === 'Deduction' && item.amount.startsWith('-')
            || selectedTab === 'Refund' && item.type.includes('Refunded');
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Transaction</Text>
                <TouchableOpacity style={styles.dropdown}>
                    <View style={styles.dropdownContent}>
                        <Text style={styles.dropdownText}>Select Month</Text>
                        <Image source={require('../assets/arrow_down.png')} style={styles.dropdownIcon} />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.tabs}>
                {['All', 'Addition', 'Deduction', 'Refund'].map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        style={styles.tab}
                        onPress={() => setSelectedTab(tab)}
                    >
                        <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>
                            {tab}
                        </Text>
                        {selectedTab === tab && <View style={styles.activeTabUnderline} />}
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.content}>
                {hasTransactions ? (
                    <View style={styles.transactionListContainer}>
                        <FlatList
                            data={filteredData}
                            renderItem={({ item, index }) => (
                                <TransactionCard
                                    transaction={item}
                                    isLast={index === filteredData.length - 1}
                                />
                            )}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                ) : (
                    <Text style={styles.noTransactionsText}>You don’t have any transactions yet.</Text>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 30,
        marginHorizontal: 20,
        padding: 10,
    },
    downArrowIcon: {
        width: 24,
        height: 24,
        marginLeft: 4,
        tintColor: '#1C2024',
    },
    amountIcon: {
        width: 14,
        height: 14,
        marginTop: 5,
        marginRight: 6,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1C2024',
        lineHeight: 20,
        fontFamily: 'Avenir',
    },
    dropdown: {
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 47, 0.149)',
        borderRadius: 9999,
        backgroundColor: '#F1F0F2',
    },
    dropdownContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dropdownIcon: {
        width: 16,
        height: 16,
        marginLeft: 6,
        tintColor: 'rgba(40, 0, 81, 0.7294)',
    },
    dropdownText: {
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 14,
        letterSpacing: 0.04,
        color: 'rgba(40, 0, 81, 0.7294)',
        fontFamily: 'Avenir',
    },
    tabs: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        marginBottom: 20,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
        borderBottomColor: 'transparent',
    },
    tabText: {
        fontSize: 14,
        lineHeight: 16,
        color: 'rgba(0, 7, 20, 0.6235)',
        fontFamily: 'Avenir',
        fontWeight: '400',
    },
    activeTabText: {
        fontFamily: 'Avenir',
        color: '#1C2024',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 16,
    },
    activeTabUnderline: {
        marginTop: 8,
        height: 2,
        width: 82,
        backgroundColor: '#231532',
    },
    content: {
        alignItems: 'center',
    },
    noTransactionsText: {
        fontWeight: '300',
        fontSize: 12,
        lineHeight: 14,
        letterSpacing: 0.04,
        color: '#333333',
        fontFamily: 'Avenir',
    },
    transactionListContainer: {
        width: '100%',
        borderColor: 'rgba(0, 0, 47, 0.149)',
        borderWidth: 1,
        backgroundColor: '#F1F0F2',
        borderRadius: 16,
        padding: 12,
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomColor: 'rgba(0, 0, 47, 0.149)',
        borderBottomWidth: 1,
    },
    cardIcon: {
        width: 24,
        height: 24,
        marginRight: 12,
        marginBottom: 25,
    },
    cardTitle: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '700',
        color: '#1C2024',
        fontFamily: 'Avenir',
        marginBottom: 10,
    },
    cardDate: {
        fontSize: 12,
        lineHeight: 14,
        letterSpacing: 0.04,
        fontWeight: '300',
        color: '#1C2024',
        fontFamily: 'Avenir',
    },
    cardAmountContainer: {
        alignItems: 'flex-end',
    },
    cardAmount: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '700',
        color: '#1C2024',
        marginTop: 4,
        fontFamily: 'Avenir',
    },
    cardTime: {
        fontSize: 12,
        lineHeight: 16,
        marginTop: 10,
        letterSpacing: 0.04,
        fontWeight: '300',
        color: '#1C2024',
        fontFamily: 'Avenir',
    },
});

export default Transaction;
