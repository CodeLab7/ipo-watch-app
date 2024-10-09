import React, {useEffect, useState} from 'react';
import {Card, Divider} from 'react-native-paper';
import {useLocalSearchParams} from 'expo-router';
import {SmeIpoData} from '@/types/smeipo.interface';
import {ScrollView} from "react-native-gesture-handler";
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {Image, StyleSheet} from "react-native";
import {Colors} from "@/constants/Colors";

const SingleOffer = () => {
    const params = useLocalSearchParams();
    const [ipoData, setIpoData] = useState<SmeIpoData>(null);

    useEffect(() => {
        if (params.item) {
            const parsedItem = JSON.parse(params.item as string);
            setIpoData(parsedItem);
        }
    }, [params.item]);

    if (!ipoData) return null;

    return (
        <ScrollView>
            <ThemedView style={styles.mainContainer}>
                <Card style={styles.card}>
                    <ThemedView style={styles.mainBoardContainer}>
                        <ThemedText style={styles.mainBoard}>{ipoData.label}</ThemedText>
                    </ThemedView>
                    <ThemedView style={styles.header}>
                        <ThemedView style={styles.imgContainer}>
                            <Image source={{uri: ipoData.image}} style={styles.img} />
                        </ThemedView>
                        <ThemedView style={styles.headerText}>
                            <ThemedText type={'title'} style={styles.companyName}>{ipoData.title}</ThemedText>
                            <ThemedText type={'subtitle'}>Offer Date : {ipoData.open_date} to {ipoData.close_date}</ThemedText>
                        </ThemedView>
                    </ThemedView>
                    <ThemedView style={styles.itemContainer}>
                        <ThemedView style={styles.item}>
                            <ThemedText>IPO PRICE</ThemedText>
                            <ThemedText type={'subtitle'}>{ipoData.offer_price}</ThemedText>
                        </ThemedView>
                        <Divider style={styles.verticalDivider} />
                        <ThemedView style={styles.item}>
                            <ThemedText>LOT SIZE</ThemedText>
                            <ThemedText type={'subtitle'}>{ipoData.lot_size}</ThemedText>
                        </ThemedView>
                        <Divider style={styles.verticalDivider} />
                        <ThemedView style={styles.item}>
                            <ThemedText>SUBSCRIBE</ThemedText>
                            <ThemedText type={'subtitle'}>{ipoData.subscription}</ThemedText>
                        </ThemedView>
                    </ThemedView>
                </Card>
            </ThemedView>
            <ThemedView style={styles.mainContainer}>
                <Card style={styles.card}>
                    <ThemedView>
                        <ThemedText style={styles.sectionTitle} type={'title'}>IPO Details</ThemedText>
                    </ThemedView>
                    <Divider style={styles.divider} />
                    {[
                        {label: "Open Date", value: `${ipoData.open_date}`},
                        {label: "Close Date", value: `${ipoData.close_date}`},
                        {label: "IPO Size", value: `${ipoData.ipo_size}`},
                        {label: "IPO Size", value: `${ipoData.ipo_size}`},
                        {label: "Face Value", value: `${ipoData.face_value}`},
                        {label: "Retail Quota", value: `${ipoData.retail_quota}`},
                        {label: "Lot Size", value: `${ipoData.lot_size}`},
                        {label: "Amount", value: `${ipoData.amount}`},
                        {label: "Allotment Date", value: `${ipoData.allotment_date}`},
                        {label: "Listing Date", value: `${ipoData.listing_date}`},
                        {label: "Listing Group", value: `${ipoData.listing_group}`},
                    ].map((item, index) => (
                        <ThemedView
                            key={index}
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingVertical: 10,
                                backgroundColor: index % 2 === 1 ? '#e6f9f0' : 'white',
                            }}>
                            <ThemedText type={'subtitle'} style={{paddingHorizontal: 10}}>{item.label} :</ThemedText>
                            <ThemedText type={'subtitle'} style={{paddingHorizontal: 10}}>{item.value}</ThemedText>
                        </ThemedView>
                    ))}
                </Card>
            </ThemedView>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 16,
        marginVertical: 16,
        textAlign: 'center',
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 4,
    },
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
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    headerText: {
        flex: 1,
        alignItems: 'center'
    },
    companyName: {
        fontSize: 20,
        marginBottom: 8,
    },
    imgContainer: {
        borderColor: 'green',
        borderWidth: 1,
        marginVertical: 10
    },
    img: {
        width: 170,
        height: 90,
        resizeMode: 'contain'
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
        // justifyContent: 'space-between',
        paddingVertical: 12,
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
    divider: {
        marginHorizontal: 16,
    },
});

export default SingleOffer;
