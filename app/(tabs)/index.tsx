import * as React from 'react';
import {useEffect, useState} from 'react';
import {Image, Share, StyleSheet} from 'react-native';
import {ScrollView} from "react-native-gesture-handler";
import {Card, Divider} from 'react-native-paper';
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {GMP_API} from "@/api/gmp";
import {Colors} from "@/constants/Colors";
import {BANNER_API} from "@/api/banner";
import BannerImage from "@/components/BannerImage";
import ThemedButton from "@/components/ThemedButton";

const HomeScreen: React.FC = () => {
    const [gmpData, setGmpData] = useState<IPOData[]>([]);
    const [bannerData, setBannerData] = useState<IPOData[]>([]);
    const baseImageURL = process.env.EXPO_PUBLIC_IMAGE_URL;

    const fetchGmpData = async () => {
        try {
            const response = await GMP_API();
            setGmpData(response.data);
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
        fetchGmpData();
        fetchBannerData();
    }, []);

    const handleShare = async (item: IPOData) => {
        try {
            const options = {
                message: `IPO Detail\n\nCompany Name: ${item.title}\nIPO Offer Date: ${item.offer_date}\nOffer Price:${item.price}\nIPO GMP:${item.gmp}\n\nHey I'm using IPO Watch App to get details of IPOs.\n\nDownload Now for FREE.\n\nAndroid:\nttps://play.google.com/store/apps/details?id=com.watch.ipo_watch`
            };
            await Share.share(options);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <ThemedView style={styles.mainContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <BannerImage bannerData={bannerData} />
                {gmpData?.map((item, index) => (
                    <Card key={index} style={styles.card}>
                        <ThemedView style={styles.mainBoardContainer}>
                            <ThemedText style={styles.mainBoard}>{item.label}</ThemedText>
                        </ThemedView>
                        <ThemedView style={styles.header}>
                            <ThemedView style={styles.imgContainer}>
                                <Image source={{uri: `${baseImageURL}/greymarket_premium_images/${item.image}`}} style={styles.img} />
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
                            <ThemedButton onPress={() => handleShare(item)} title="Share" icon="share-variant" />
                        </ThemedView>
                    </Card>
                ))}
            </ScrollView>
        </ThemedView>
    );
}
export default HomeScreen
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
        width: 110,
        height: 65,
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
        paddingTop: 3,
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
