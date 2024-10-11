import * as React from "react";
import {useEffect, useState} from "react";
import {ThemedView} from "@/components/ThemedView";
import {ScrollView} from "react-native-gesture-handler";
import {Card, Divider, TouchableRipple} from "react-native-paper";
import {ThemedText} from "@/components/ThemedText";
import {Image, Share} from "react-native";
import {SmeIpoData} from "@/types/smeipo.interface";
import {SME_IPO_LISTED_API} from "@/api/sme";
import {BANNER_API} from "@/api/banner";
import BannerImage from "@/components/BannerImage";
import {useRouter} from 'expo-router';
import ThemedButton from "@/components/ThemedButton";
import {styles} from "@/assets/css/commonCss";
import Loader from "@/components/Loader";

export const ListedIpo: React.FC = () => {
    const [listedData, setListedData] = useState<SmeIpoData[]>([]);
    const [bannerData, setBannerData] = useState<SmeIpoData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();
    const fetchListedData = async () => {
        try {
            const response = await SME_IPO_LISTED_API();
            setListedData(response.data);
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
        fetchListedData();
        fetchBannerData();
    }, []);

    const handleShare = async (item: SmeIpoData) => {
        try {
            const options = {
                message: `IPO Detail\n\nCompany Name: ${item.title}\nIPO Offer Date: ${item.open_date} to ${item.close_date}\nOffer Price: ${item.offer_price}\nLotsize: ${item.lot_size} \nIPO GMP: ${item.gmp}\n\nHey I'm using IPO Watch App to get details of IPOs.\n\nDownload Now for FREE.\n\nAndroid:\nhttps://play.google.com/store/apps/details?id=com.watch.ipo_watch`
            };
            await Share.share(options);
        } catch (e) {
            console.log(e);
        }
    };

    const handleSingleOffer = (item) => {
        const serializedItem = encodeURIComponent(JSON.stringify(item));
        router.push(`/singleOffer?item=${serializedItem}`);
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
                    {listedData?.map((item, index) => (
                        <Card key={index} style={styles.card}>
                            <TouchableRipple onPress={() => handleSingleOffer(item)}>
                                <>
                                    <ThemedView style={styles.mainBoardContainer}>
                                        <ThemedText style={styles.mainBoard}>{item.label}</ThemedText>
                                    </ThemedView>
                                    <ThemedView style={styles.header}>
                                        <ThemedView style={styles.imgContainer}>
                                            <Image source={{uri: item.image}} style={styles.img} />
                                        </ThemedView>
                                        <ThemedView style={styles.headerText}>
                                            <ThemedText type={'title'}>{item.title}</ThemedText>
                                            <ThemedText type={'subtitle'}>Offer Date : {item.open_date} to {item.close_date}</ThemedText>
                                        </ThemedView>
                                    </ThemedView>
                                    <ThemedView style={styles.itemContainer}>
                                        <ThemedView style={styles.item}>
                                            <ThemedText>IPO PRICE</ThemedText>
                                            <ThemedText type={'subtitle'}>{item.offer_price}</ThemedText>
                                        </ThemedView>
                                        <Divider style={styles.verticalDivider} />
                                        <ThemedView style={styles.item}>
                                            <ThemedText>LOT SIZE</ThemedText>
                                            <ThemedText type={'subtitle'}>{item.lot_size}</ThemedText>
                                        </ThemedView>
                                        <Divider style={styles.verticalDivider} />
                                        <ThemedView style={styles.item}>
                                            <ThemedText>SUBSCRIBE</ThemedText>
                                            <ThemedText type={'subtitle'}>{item.subscription}</ThemedText>
                                        </ThemedView>
                                    </ThemedView>
                                    <ThemedView style={styles.itemContainer}>
                                        <ThemedView style={styles.headerText}>
                                            <ThemedText type={'subtitle'}>Exp. Premium / GMP : {item.gmp}</ThemedText>
                                        </ThemedView>
                                        <ThemedView style={styles.shareButtonContainer}>
                                            <ThemedButton onPress={() => handleShare(item)} title="Share" iconName="share-alt-square" textColor={'#f64c00'} buttonColor={'#fff'} />
                                        </ThemedView>
                                    </ThemedView>
                                </>
                            </TouchableRipple>
                        </Card>
                    ))}
                </ScrollView>
            )}
        </ThemedView>
    )
}
