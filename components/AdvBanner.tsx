import React from 'react';
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import { AdMobBanner } from 'expo-ads-admob';

export default function MyBannerAd() {
    return (
        <ThemedView style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
            <ThemedText type={'title'}>My Banner Ad</ThemedText>
            <AdMobBanner
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-0303999446867229/1549402340"
                servePersonalizedAds // true or false
                onDidFailToReceiveAdWithError={(error) => console.error(error)}
            />
        </ThemedView>
    );
}
