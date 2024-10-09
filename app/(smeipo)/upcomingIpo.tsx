import * as React from "react";
import {useEffect, useState} from "react";
import {ThemedView} from "@/components/ThemedView";
import {ScrollView} from "react-native-gesture-handler";
import {Card, Divider, TouchableRipple} from "react-native-paper";
import {ThemedText} from "@/components/ThemedText";
import {Image, Share, StyleSheet} from "react-native";
import {Colors} from "@/constants/Colors";
import {SME_IPO_UPCOMING_API} from "@/api/sme";
import {SmeIpoData} from "@/types/smeipo.interface";
import {BANNER_API} from "@/api/banner";
import BannerImage from "@/components/BannerImage";
import ThemedButton from "@/components/ThemedButton";
import {useRouter} from "expo-router";

export const UpcomingIpo: React.FC = () => {
    const [upcomingData, setUpcomingData] = useState<SmeIpoData[]>([]);
    const [bannerData, setBannerData] = useState<SmeIpoData[]>([]);
    const router = useRouter();
    const fetchUpcomingData = async () => {
        try {
            const response = await SME_IPO_UPCOMING_API();
            setUpcomingData(response.data);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    const fetchBannerData = async () => {
        try {
            const response = await BANNER_API();
            setBannerData(response.data);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    useEffect(() => {
        fetchUpcomingData();
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
        router.push(`/singleOffer?item=${JSON.stringify(item)}`);
    };

    return (
        <ThemedView style={styles.mainContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <BannerImage bannerData={bannerData} />
                {upcomingData?.map((item, index) => (
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
                                        <ThemedButton onPress={() => handleShare(item)} title="Share" icon="share-variant" />
                                    </ThemedView>
                                </ThemedView>
                            </>
                        </TouchableRipple>
                    </Card>
                ))}
            </ScrollView>
        </ThemedView>
    )

}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.bodyBackgroundColor
    },
    card: {
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 8,
        elevation: 1,
        padding: 1.5,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    headerText: {
        flex: 1,
        marginLeft: 15
    },
    imgContainer: {
        borderColor: 'green',
        borderWidth: 1
    },
    img: {
        width: 90,
        height: 60,
        resizeMode: 'cover'
    },
    mainBoardContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    mainBoard: {
        backgroundColor: Colors.mainBoardColor,
        color: Colors.mainBoardTextColor,
        fontSize: 12,
        paddingHorizontal: 5,
        borderRadius: 4,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 5,
    },
    item: {
        flex: 1,
        alignItems: 'center',
    },
    verticalDivider: {
        height: '60%',
        width: 1,
        backgroundColor: Colors.dividerBgColor,
    },
    shareButtonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});
