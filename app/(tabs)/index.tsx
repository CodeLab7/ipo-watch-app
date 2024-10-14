import * as React from 'react';
import {useEffect, useState} from 'react';
import {Image, Share} from 'react-native';
import {ScrollView} from "react-native-gesture-handler";
import {Card, Divider} from 'react-native-paper';
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {GMP_API} from "@/api/gmp";
import {BANNER_API} from "@/api/banner";
import BannerImage from "@/components/BannerImage";
import ThemedButton from "@/components/ThemedButton";
import {styles} from "@/assets/css/commonCss";
import Loader from "@/components/Loader";

const HomeScreen: React.FC = () => {
    const [gmpData, setGmpData] = useState<IPOData[]>([]);
    const [bannerData, setBannerData] = useState<IPOData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchGmpData = async () => {
        try {
            const response = await GMP_API();
            setGmpData(response.data);
        } catch (error) {
            console.error("Error fetching data", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchBannerData = async () => {
        try {
            const response = await BANNER_API();
            setBannerData(response.data);
        } catch (error) {
            console.error("Error fetching data", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGmpData();
        fetchBannerData();
    }, []);

    const handleShare = async (item: IPOData) => {
        try {
            const options = {
                message: `IPO Detail\n\nCompany Name: ${item.title}\nIPO Offer Date: ${item.offer_date}\nOffer Price:${item.price}\nIPO GMP:${item.gmp}\n\nHey I'm using IPO Watch App to get details of IPOs.\n\nDownload Now for FREE.\n\nAndroid:\nhttps://play.google.com/store/apps/details?id=com.watch.ipo_watch`
            };
            await Share.share(options);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <ThemedView style={styles.mainContainer}>
            {loading ? (
                <ThemedView style={styles.loaderContainer}>
                    <Loader />
                </ThemedView>
            ) : (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ThemedView style={styles.bannerContainer}>
                        <BannerImage bannerData={bannerData} />
                    </ThemedView>
                    {gmpData?.map((item, index) => (
                        <Card key={index} style={styles.card}>
                            <ThemedView style={styles.mainBoardContainer}>
                                <ThemedText style={styles.mainBoard}>{item.label}</ThemedText>
                            </ThemedView>
                            <ThemedView style={styles.header}>
                                <ThemedView style={styles.imgContainer}>
                                    <Image source={{uri: item.image}} style={styles.img} />
                                </ThemedView>
                                <ThemedView style={styles.headerText}>
                                    <ThemedText type={'title'}>{item.title}</ThemedText>
                                    <ThemedText type={'subtitle'}>Offer Date : {item.offer_date}</ThemedText>
                                </ThemedView>
                            </ThemedView>
                            <ThemedView style={styles.itemContainer}>
                                <ThemedView style={styles.item}>
                                    <ThemedText>IPO PRICE</ThemedText>
                                    <ThemedText type={'subtitle'}>{item.price}</ThemedText>
                                </ThemedView>
                                <Divider style={styles.verticalDivider} />
                                <ThemedView style={styles.item}>
                                    <ThemedText>IOP GMP</ThemedText>
                                    <ThemedText type={'subtitle'}>{item.gmp}</ThemedText>
                                </ThemedView>
                                <Divider style={styles.verticalDivider} />
                                <ThemedView style={styles.item}>
                                    <ThemedText>Listing Gain</ThemedText>
                                    <ThemedText type={'subtitle'}>{item.gain}</ThemedText>
                                </ThemedView>
                            </ThemedView>
                            <ThemedView style={styles.shareButtonContainer}>
                                <ThemedButton onPress={() => handleShare(item)} title="Share" iconName="share-alt-square" textColor={'#f64c00'} buttonColor={'#fff'} />
                            </ThemedView>
                        </Card>
                    ))}
                </ScrollView>
            )}
        </ThemedView>
    );
}
export default HomeScreen
