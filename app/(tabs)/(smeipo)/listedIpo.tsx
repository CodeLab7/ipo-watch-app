import * as React from "react";
import {useEffect, useState} from "react";
import {ThemedView} from "@/components/ThemedView";
import {ScrollView} from "react-native-gesture-handler";
import {Button, Card, Divider} from "react-native-paper";
import {ThemedText} from "@/components/ThemedText";
import {Image, StyleSheet} from "react-native";
import {Colors} from "@/constants/Colors";
import {SmeIpoData} from "@/types/smeipo.interface";
import {SME_IPO_LISTED_API} from "@/api/sme";

export const ListedIpo: React.FC = () => {
    const [listedData, setListedData] = useState<SmeIpoData[]>([]);
    const fetchListedData = async () => {
        try {
            const response = await SME_IPO_LISTED_API();
            setListedData(response.data);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    useEffect(() => {
        fetchListedData();
    }, []);
    return (
        <ThemedView style={styles.mainContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {listedData?.map((item, index) => (
                    <Card key={index} style={styles.card}>
                        <ThemedView style={styles.mainBoardContainer}>
                            <ThemedText style={styles.mainBoard}>{item.label}</ThemedText>
                        </ThemedView>
                        <ThemedView style={styles.header}>
                            <ThemedView style={styles.imgContainer}>
                                <Image source={{uri: 'https://admin.ipowatch.in/storage/app/public/mainlineipo_images/0MFzk4X9gdr2VSkKtLARn0I2iPM73LGFRj30o7y8.jpg'}} style={styles.img} />
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
                                <ThemedText type={'subtitle'}>{item.gmp}</ThemedText>
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
                                <Button icon="share-variant" mode="contained" style={styles.shareButton} textColor={Colors.btnTextColor}>Share</Button>
                            </ThemedView>
                        </ThemedView>
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
        width: 110,
        height: 65,
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
    shareButton: {
        backgroundColor: 'none',
    },
});
