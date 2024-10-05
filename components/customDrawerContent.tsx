import React from 'react';
import {Image, Linking, StyleSheet, View} from 'react-native';
import {Avatar, Drawer, TouchableRipple} from 'react-native-paper';
import {useRouter} from 'expo-router';
import {ThemedView} from "@/components/ThemedView";
import * as Sharing from 'expo-sharing';
import {Asset} from "expo-asset";
import {ThemedText} from "@/components/ThemedText";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as WebBrowser from 'expo-web-browser';

export default function CustomDrawerContent() {
    const router = useRouter();

    const shareWithFriends = async () => {
        const imageAsset = Asset.fromModule(require('../assets/images/logo.png'));
        await imageAsset.downloadAsync();
        try {
            await Sharing.shareAsync(imageAsset.localUri || imageAsset.uri, {
                dialogTitle: 'IPO Watch is an all-in-one IPO app to help investors to get updates on Mainline IPO, SME IPO, Buyback, Right issues, NCD, IPO allotment, Reviews, and subscription. \n https://play.google.com/store/apps/details?id=com.watch.ipo_watch&hl=en_IN',
                UTI: imageAsset.localUri || imageAsset.uri,
                mimeType: 'image/jpeg',
            });
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };

    const openInAppBrowser = async (url: string) => {
        try {
            await WebBrowser.openBrowserAsync(url);
        } catch (error) {
            console.error('Error opening browser:', error);
        }
    };

    const CustomIcon = ({name}: { name: React.ComponentProps<typeof Ionicons>['name'] }) => (
        <View style={styles.roundIconContainer}>
            <Ionicons name={name} size={24} color="#000" />
        </View>
    );
    return (
        <ThemedView style={{flex: 1}}>
            <ThemedView style={styles.imgContainer}>
                <Image style={styles.img} resizeMode={'contain'} source={require('../assets/images/logo.png')} />
            </ThemedView>
            <Drawer.Item label="Home"
                         icon={() => <CustomIcon name="home" />}
                         onPress={() => router.push('/(tabs)/')} />
            <Drawer.Item label="Share With Friends"
                         icon={() => <CustomIcon name="share-social" />}
                         onPress={() => shareWithFriends()} />
            <Drawer.Item label="Privacy Policy"
                         icon={() => <CustomIcon name="shield-checkmark" />}
                         onPress={() => openInAppBrowser('https://ipowatch.in/ipo-grey-market-premium-latest-ipo-gmp/')} />
            <Drawer.Item label="Terms & Condition"
                         icon={() => <CustomIcon name="book-sharp" />}
                         onPress={() => openInAppBrowser('https://ipowatch.in/ipo-grey-market-premium-latest-ipo-gmp/')} />
            <Drawer.Item label="Contact&nbsp;Us"
                         icon={() => <CustomIcon name="document-text" />}
                         onPress={() => {
                             const email = 'ipowatchinfo@gmail.com';
                             const body = 'IPOWatch Support \n\n Dear IPOWatch user, \n Explain your issue here';
                             const mailtoUrl = `mailto:${email}?&body=${encodeURIComponent(body)}`;

                             Linking.openURL(mailtoUrl).catch((err) => {
                                 console.error('Error opening email client:', err);
                             });
                         }}/>
            <Drawer.Item label="Rate the App"
                         icon={() => <CustomIcon name="star" />}
                         onPress={() => openInAppBrowser('https://play.google.com/store/apps/details?id=com.watch.ipo_watch&hl=en_IN')} />
            <ThemedView style={styles.socialIconContainer}>
                <TouchableRipple onPress={() => openInAppBrowser('https://www.facebook.com/ipowatchinfo')}>
                    <Avatar.Image size={40} style={styles.iconImg} source={require('../assets/icons/facebook.png')} />
                </TouchableRipple>
                <TouchableRipple onPress={() => openInAppBrowser('https://www.instagram.com/ipowatch.in/')}>
                    <Avatar.Image size={40} style={styles.iconImg} source={require('../assets/icons/instagram.png')} />
                </TouchableRipple>
                <TouchableRipple onPress={() => openInAppBrowser('https://www.youtube.com/@IPOWatch')}>
                    <Avatar.Image size={40} style={styles.iconImg} source={require('../assets/icons/youtube.png')} />
                </TouchableRipple>
                <TouchableRipple onPress={() => openInAppBrowser('https://x.com/ipowatch_info')}>
                    <Avatar.Image size={40} style={styles.iconImg} source={require('../assets/icons/x.png')} />
                </TouchableRipple>
            </ThemedView>
            <ThemedView style={styles.versionText}>
                <ThemedText>App version : 1.0.11</ThemedText>
            </ThemedView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    imgContainer: {
        alignItems: 'center',
    },
    img: {
        height: 90,
        marginTop: 70,
        marginBottom: 20,
    },
    roundIconContainer: {
        width: 40,
        height: 43,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 3,
        // Shadow for Android
        elevation: 15,
    },
    socialIconContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 30
    },
    iconImg: {
        backgroundColor: '#fff',
    },
    versionText: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 10
    }
});
