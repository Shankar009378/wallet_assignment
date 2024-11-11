import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions, SafeAreaView, Alert, Clipboard, Share, Linking } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

const ProfileScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const referralCode = "thirdplace.com/ref/NKJ5823-HD";

  const copyToClipboard = () => {
    Clipboard.setString(referralCode);
    Alert.alert("Copied to Clipboard", "Referral code copied successfully!");
  };

  const handleShare = async (platform: string) => {
    const message = `Check out Third Place! Use my referral code to get started: ${referralCode}`;

    try {
      switch (platform) {
        case 'whatsapp':
          Linking.openURL(`whatsapp://send?text=${encodeURIComponent(message)}`);
          break;
        case 'telegram':
          Linking.openURL(`tg://msg?text=${encodeURIComponent(message)}`);
          break;
        case 'facebook':
          const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralCode)}`;
          Linking.openURL(shareUrl);
          break;
        default:
          await Share.share({ message });
      }
    } catch (error) {
      console.error('Error sharing:', error);
      Alert.alert('Error', 'Unable to share. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <View style={styles.circle}>
            <Image
              source={require('../assets/arrow_left.png')}
              style={styles.arrowIcon}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Refer a Friend</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.topContainer}>
          <View>
            <Text style={styles.topContainerText}>Invite a friend and get credit for your next booking!</Text>
          </View>

          <View style={styles.creditsContainer}>
            <View style={styles.iconBackground}>
              <Image source={require('../assets/money_bag.png')} style={styles.coinIcon} />
            </View>

            <View style={styles.creditsRow}>
              <View style={styles.logoBackground}>
                <Image source={require('../assets/LogoMark.png')} style={styles.smallCoinIcon} />
              </View>
              <Text style={styles.creditsText}>2322</Text>
            </View>

            <Text style={styles.creditsSubText}>credits earned</Text>
          </View>

          <View style={styles.referralTextContainer}>
            <Text style={styles.referralText}>Each time a friend joins, you earn <Text style={styles.boldText}>300 Credits!</Text></Text>

            <View style={styles.dashedBox}>
              <Text style={styles.codeLabel}>Your referral code</Text>
              <View style={styles.codeRow}>
                <Text style={styles.referralCode}>{referralCode}</Text>
                <View onTouchEnd={copyToClipboard} style={styles.copyIconContainer}>
                  <Image source={require('../assets/copy.png')} style={styles.copyIconImage} />
                </View>
              </View>
            </View>

            <View style={styles.shareContainer}>
              <Text style={styles.shareContainerText}>Share your referral code via</Text>
              <View style={styles.socialIconsContainer}>
                <TouchableOpacity onPress={() => handleShare('whatsapp')}>
                  <Image source={require('../assets/whatsapp.png')} style={styles.socialIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleShare('telegram')}>
                  <Image source={require('../assets/telegram.png')} style={styles.socialIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleShare('facebook')}>
                  <Image source={require('../assets/facebook.png')} style={styles.socialIcon} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.middleContainer}>
          <Text style={styles.middleContainerText}>How to get a referral bonus</Text>
          <View style={styles.card}>
            {[{ number: '1.', title: 'Invite Friends', subtext: 'using your invite link' },
            { number: '2.', title: 'They Sign Up and', subtext: 'lorem ipsum dolor sit amet consectetur' },
            { number: '3.', title: 'Get bonus credits', subtext: 'Earn your referral bonus' }]
              .map((item, index) => (
                <View key={index} style={styles.cardItem}>
                  <Text style={styles.number}>{item.number}</Text>
                  <View style={styles.textContainer}>
                    <Text style={styles.titleText}>{item.title}</Text>
                    <Text style={styles.subText}>{item.subtext}</Text>
                  </View>
                </View>
              ))}
          </View>
        </View>

        <View style={styles.invitationContainer}>
          <View style={styles.referImageContainer}>
            <Image source={require('../assets/referImage2.png')} style={styles.userIconLeft} />
            <Image source={require('../assets/referImage1.png')} style={styles.userIconRight} />
          </View>
          <Text style={styles.invitationText}>Lei invited you to Third Place</Text>
          <Text style={styles.memberSinceText}>You became a member on September 26th, 2024</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  card: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 47, 0.149)',
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#F9F9F9',
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  number: {
    fontFamily: 'Avenir',
    fontSize: 28,
    lineHeight: 30,
    letterSpacing: -0.12,
    textAlign: 'center',
    fontWeight: '700',
    color: '#1C2024',
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  titleText: {
    fontFamily: 'Avenir',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '700',
    color: '#333333',
  },
  subText: {
    fontFamily: 'Avenir',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 0.04,
    fontWeight: '300',
    color: '#1C2024',
    marginTop: 8,
  },
  userIconLeft: {
    width: 72,
    height: 72,
    borderRadius: 100,
    marginRight: -15,
  },
  userIconRight: {
    width: 72,
    height: 72,
    borderRadius: 100,
  },
  invitationText: {
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontSize: 16,
    lineHeight: 20,
    color: '#1C2024',
    fontWeight: '700',
    marginBottom: 10,
  },
  memberSinceText: {
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 0.04,
    color: '#1C2024',
    fontWeight: '300',
    marginBottom: 10,
  },
  referImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  invitationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  middleContainerText: {
    fontFamily: 'Avenir',
    fontSize: 16,
    lineHeight: 20,
    color: '#1C2024',
    fontWeight: '700',
    marginBottom: 10,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  middleContainer: {
    marginTop: 30,
    paddingHorizontal: 30,
  },
  shareContainerText: {
    textAlign: 'center',
    fontFamily: 'Avenir',
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '300',
    marginBottom: 10,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialIcon: {
    width: 33.32,
    height: 33.32,
    marginHorizontal: 10,
  },
  referralCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F0F2',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  referralCodeText: {
    fontSize: 14,
    color: '#1C2024',
    marginRight: 10,
  },
  copyIcon: {
    width: 16,
    height: 16,
    tintColor: '#725690',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 70,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 47 ,0.1)',
    backgroundColor: '#725690',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 5,
    zIndex: 1,
  },
  backButton: {
    marginRight: 10,
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    width: 16,
    height: 16,
    tintColor: '#725690',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: -0.04,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: 'Avenir',
  },
  topContainer: {
    backgroundColor: '#725690',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 20,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    marginBottom: 20,
  },
  topContainerText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 28,
    lineHeight: 30,
    letterSpacing: -0.12,
    fontWeight: '700',
    fontFamily: 'Avenir',
    marginTop: 50,
  },
  creditsContainer: {
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 50,
  },
  coinIcon: {
    width: 48,
    height: 48,
    marginBottom: 10,
  },
  creditsText: {
    fontFamily: 'Avenir',
    fontSize: 28,
    letterSpacing: -0.12,
    textAlign: 'center',
    fontWeight: '700',
    color: '#FFFFFF',
  },
  creditsSubText: {
    fontFamily: 'Avenir',
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  iconBackground: {
    width: 72,
    height: 72,
    borderRadius: 29997,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  creditsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  smallCoinIcon: {
    width: 15.69,
    height: 14.63,
  },
  logoBackground: {
    width: 25,
    height: 25,
    borderRadius: 2577.06,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  referralTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 30,
  },
  referralText: {
    fontFamily: 'Avenir',
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
    width: 200,
  },
  boldText: {
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: 0.04,
    textAlign: 'center',
    fontWeight: '700',
  },
  dashedBox: {
    backgroundColor: 'rgba(0, 6, 46, 0.1961)',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderStyle: 'dashed',
  },
  codeLabel: {
    fontFamily: 'Avenir',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.04,
    color: '#FFFFFF',
    marginBottom: 8,
    fontWeight: '300',
  },
  codeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  referralCode: {
    fontFamily: 'Avenir',
    fontSize: 16,
    lineHeight: 20,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  copyIconContainer: {
    width: 40,
    height: 40,
    padding: 6,
    borderRadius: 9999,
    backgroundColor: '#725690',
  },
  copyIconImage: {
    width: 18,
    height: 18,
    tintColor: '#FFFFFF',
  },
  shareContainer: {
    marginTop: 20,

  }
});

export default ProfileScreen;
