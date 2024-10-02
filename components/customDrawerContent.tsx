import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Avatar, Drawer, TouchableRipple} from 'react-native-paper';
import {useRouter} from 'expo-router';
import {ThemedView} from "@/components/ThemedView";
import * as Linking from 'expo-linking';
import * as Sharing from 'expo-sharing';
import {Asset} from "expo-asset";
import {ThemedText} from "@/components/ThemedText";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function CustomDrawerContent() {
    const router = useRouter();

    const shareWithFriends = async () => {
        const imageAsset = Asset.fromModule(require('../assets/images/logo.png'));
        await imageAsset.downloadAsync();
        const messageText = 'Check out this amazing app! IPO Watch is an all-in-one IPO app to help investors to get updates on Mainline IPO, SME IPO, Buyback, Right issues, NCD, IPO allotment, Reviews, and subscription. Download now: https://play.google.com/store/apps/details?id=com.watch.ipo_watch&hl=en_IN';

        const options = {
            mimeType: 'image/jpeg',
            dialogTitle: messageText,
        };
        try {
            // Share the local file URI
            await Sharing.shareAsync(imageAsset.localUri || imageAsset.uri, options);
        } catch (error) {
            console.error('Error sharing:', error);
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
                         onPress={() => Linking.openURL('https://ipowatch.in/ipo-grey-market-premium-latest-ipo-gmp/')} />
            <Drawer.Item label="Terms & Condition"
                         icon={() => <CustomIcon name="book-sharp" />}
                         onPress={() => Linking.openURL('https://ipowatch.in/ipo-grey-market-premium-latest-ipo-gmp/')} />
            <Drawer.Item label="Contact Us"
                         icon={() => <CustomIcon name="document-text" />}
                         onPress={() => Linking.openURL('https://ipowatch.in/ipo-grey-market-premium-latest-ipo-gmp/')} />
            <Drawer.Item label="Rate the App"
                         icon={() => <CustomIcon name="star" />}
                         onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.watch.ipo_watch&hl=en_IN')} />
            <ThemedView style={styles.socialIconContainer}>
                <TouchableRipple onPress={() => Linking.openURL('https://www.facebook.com/ipowatchinfo')}>
                    <Avatar.Image size={40} style={styles.iconImg} source={require('../assets/icons/facebook.png')} />
                </TouchableRipple>
                <TouchableRipple onPress={() => Linking.openURL('https://www.instagram.com/ipowatch.in/')}>
                    <Avatar.Image size={40} style={styles.iconImg} source={require('../assets/icons/instagram.png')} />
                </TouchableRipple>
                <TouchableRipple onPress={() => Linking.openURL('https://www.youtube.com/@IPOWatch')}>
                    <Avatar.Image size={40} style={styles.iconImg} source={require('../assets/icons/youtube.png')} />
                </TouchableRipple>
                <TouchableRipple onPress={() => Linking.openURL('https://x.com/ipowatch_info')}>
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
