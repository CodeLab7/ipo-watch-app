import React, {useEffect, useState} from 'react';
import {Button, Card, Divider} from 'react-native-paper';
import {useLocalSearchParams} from 'expo-router';
import {SINGLE_SME_IPO_API} from '@/api/sme';
import {SmeIpoData} from '@/types/smeipo.interface';
import {ScrollView} from "react-native-gesture-handler";
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {Image, StyleSheet} from "react-native";
import {Colors} from "@/constants/Colors";
import {baseImageURL} from "@/helper/other/url-helper";

const SingleOffer = () => {
    const params = useLocalSearchParams();
    const {id} = params;
    const [ipoData, setIpoData] = useState<SmeIpoData>({id});
    console.log("ipoData", ipoData)

    const fetchIpoData = async () => {
        const response = await SINGLE_SME_IPO_API(id);
        console.log("response", response)
        setIpoData(response.data);
    };

    useEffect(() => {
        fetchIpoData();
    }, []);

    // Reusable Row Component for IPO Details
    const DetailRow = ({label, value}: { label: string, value: string | number }) => (
        <ThemedView style={styles.detailRow}>
            <ThemedText style={styles.detailLabel}>{label}</ThemedText>
            <ThemedText style={styles.detailValue}>{value}</ThemedText>
        </ThemedView>
    );

    return (
        <ScrollView>
            <ThemedView style={styles.mainContainer}>
                <Card style={styles.card}>
                    <ThemedView style={styles.mainBoardContainer}>
                        <ThemedText style={styles.mainBoard}>{ipoData.label}</ThemedText>
                    </ThemedView>
                    <ThemedView style={styles.header}>
                        <ThemedView style={styles.imgContainer}>
                            <Image source={{uri: `${baseImageURL}/smeipo_images/${ipoData.image}`}} style={styles.img} />
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
                    <ThemedView style={styles.detailsTable}>
                        <ThemedView>
                            <ThemedText style={styles.sectionTitle} type={'title'}>IPO Details</ThemedText>
                        </ThemedView>
                        <Divider style={styles.divider} />
                        <DetailRow label="Open Date" value={ipoData.open_date} />
                        <DetailRow label="Close Date" value={ipoData.close_date} />
                        <DetailRow label="IPO Size" value={ipoData.ipo_size} />
                        <DetailRow label="Face Value" value={ipoData.face_value} />
                        <DetailRow label="Retail Quota" value={ipoData.retail_quota} />
                        <DetailRow label="Lot Size" value={ipoData.lot_size} />
                        <DetailRow label="Amount" value={ipoData.amount} />
                        <DetailRow label="Allotment Date" value={ipoData.allotment_date} />
                        <DetailRow label="Listing Date" value={ipoData.listing_date} />
                        <DetailRow label="Listing Group" value={ipoData.listing_group} />
                        <DetailRow label="Lead Manager" value={ipoData.lead_manager} />
                        <DetailRow label="Registrar" value={ipoData.register} />
                    </ThemedView>
                </Card>
            </ThemedView>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    detailsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    detailLabel: {
        fontSize: 12,
        color: 'gray',
    },
    detailValue: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 16,
        marginVertical: 16,
        textAlign: 'center',
    },
    detailsTable: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        // padding: 8,
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
