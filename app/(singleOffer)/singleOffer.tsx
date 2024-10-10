import React, {useEffect, useState} from 'react';
import {Card, Divider, Button, DataTable,} from 'react-native-paper';
import {useLocalSearchParams, useRouter} from 'expo-router';
import {SmeIpoData} from '@/types/smeipo.interface';
import {ScrollView} from "react-native-gesture-handler";
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {Image, Linking, useWindowDimensions} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import RenderHTML from "react-native-render-html";
import Header from "@/components/Header";
import {useNavigation} from "@react-navigation/native";
import {styles} from "@/app/(singleOffer)/style";
import ThemedButton from "@/components/ThemedButton";

const SingleOffer = () => {
    const params = useLocalSearchParams();
    const [ipoData, setIpoData] = useState<SmeIpoData>(null);
    const {width} = useWindowDimensions();
    const navigation = useNavigation();
    const router = useRouter();
    useEffect(() => {
        if (params.item) {
            const parsedItem = JSON.parse(params.item as string);
            setIpoData(parsedItem);
        }
    }, [params.item]);

    if (!ipoData) return null;

    const openInAppBrowser = (url) => {
        Linking.openURL(url);
    };

    return (
        <>
            <Header title={ipoData.title} onBackPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
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
                                <ThemedText type={'subtitle'} style={styles.offerDate}>Offer Date : {ipoData.open_date} to {ipoData.close_date}</ThemedText>
                            </ThemedView>
                        </ThemedView>
                        <ThemedView style={styles.itemContainer}>
                            <ThemedView style={styles.item}>
                                <ThemedText>IPO PRICE</ThemedText>
                                <ThemedText type={'defaultLight'}>{ipoData.offer_price}</ThemedText>
                            </ThemedView>
                            <Divider style={styles.verticalDivider} />
                            <ThemedView style={styles.item}>
                                <ThemedText>LOT SIZE</ThemedText>
                                <ThemedText type={'defaultLight'}>{ipoData.lot_size}</ThemedText>
                            </ThemedView>
                            <Divider style={styles.verticalDivider} />
                            <ThemedView style={styles.item}>
                                <ThemedText>SUBSCRIBE</ThemedText>
                                <ThemedText type={'defaultLight'}>{ipoData.subscription}</ThemedText>
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
                            {label: "IPO prize", value: `${ipoData.offer_price}`},
                            {label: "Face Value", value: `${ipoData.face_value}`},
                            {label: "Retail Quota", value: `${ipoData.retail_quota}`},
                            {label: "Lot Size", value: `${ipoData.lot_size}`},
                            {label: "Amount", value: `${ipoData.amount}`},
                            {label: "Allotment Date", value: `${ipoData.allotment_date}`},
                            {label: "Listing Date", value: `${ipoData.listing_date}`},
                            {label: "Listing Group", value: `${ipoData.listing_group}`},
                            {label: "Lead Manager", value: `${ipoData.lead_manager}`},
                            {label: "Registrar", value: `${ipoData.register}`},
                        ].map((item, index) => (
                            <ThemedView key={index} style={[styles.labelItemContainer, {backgroundColor: index % 2 === 1 ? '#e6f9f0' : 'white'}]}>
                                <ThemedText type={'defaultLight'} style={styles.label}>{item.label} :</ThemedText>
                                <ThemedText type={'defaultLight'} style={styles.value}>{item.value}</ThemedText>
                            </ThemedView>
                        ))}
                        <ThemedView style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Button mode="contained" onPress={() => openInAppBrowser(ipoData.drhp)} buttonColor={'#fff'} textColor={'#0ba213'} labelStyle={styles.btnDetailsLabel}><FontAwesome name="file" size={18}
                                                                                                                                                                                                color="#0ba213" /> DHRP</Button>
                            <Button mode="contained" onPress={() => openInAppBrowser(ipoData.rhp)} buttonColor={'#fff'} textColor={'#0ba213'} labelStyle={styles.btnDetailsLabel}><FontAwesome name="file" size={18}
                                                                                                                                                                                                      color="#0ba213" /> RHP</Button>
                        </ThemedView>
                    </Card>
                </ThemedView>
                <ThemedView style={styles.mainContainer}>
                    <Card style={styles.card}>
                        <ThemedView>
                            <ThemedText style={styles.sectionTitle} type={'title'}>Valuations</ThemedText>
                            <Divider style={styles.divider} />
                        </ThemedView>
                        {[
                            {label: "EPS Per IPO", value: `${ipoData.eps_per_ipo}`},
                            {label: "P/E Post IPO", value: `${ipoData.eps_per_ipo}`},
                            {label: "RoNW", value: `${ipoData.eps_per_ipo}`},
                        ].map((item, index) => (
                            <ThemedView key={index} style={[styles.labelItemContainer, {backgroundColor: index % 2 === 1 ? '#e6f9f0' : 'white'}]}>
                                <ThemedText type={'defaultLight'} style={styles.label}>{item.label} :</ThemedText>
                                <ThemedText type={'defaultLight'} style={styles.value}>{item.value}</ThemedText>
                            </ThemedView>
                        ))}
                    </Card>
                </ThemedView>
                <ThemedView style={styles.mainContainer}>
                    <Card style={styles.card}>
                        <ThemedView>
                            <ThemedText style={styles.sectionTitle} type={'title'}>Company Financials(in Crs)</ThemedText>
                            <Divider style={styles.divider} />
                        </ThemedView>
                        <DataTable>
                            <ThemedView>
                                <DataTable.Header>
                                    <DataTable.Title> </DataTable.Title>
                                    <DataTable.Title textStyle={styles.headerTitleText} numeric>Revenues</DataTable.Title>
                                    <DataTable.Title textStyle={styles.headerTitleText} numeric>Expense</DataTable.Title>
                                    <DataTable.Title textStyle={styles.headerTitleText} numeric>PAT</DataTable.Title>
                                </DataTable.Header>
                            </ThemedView>
                            {ipoData.company_financial.map((financial, index) => (
                                <DataTable.Row key={index} style={[styles.cellContainer, {backgroundColor: index % 2 === 1 ? '#e6f9f0' : 'white'}]}>
                                    <DataTable.Cell textStyle={styles.cellText}>{financial.date}</DataTable.Cell>
                                    <DataTable.Cell textStyle={styles.cellText} numeric>{financial.revenues}</DataTable.Cell>
                                    <DataTable.Cell textStyle={styles.cellText} numeric>{financial.expense}</DataTable.Cell>
                                    <DataTable.Cell textStyle={styles.cellText} numeric>{financial.pat}</DataTable.Cell>
                                </DataTable.Row>
                            ))}
                        </DataTable>
                    </Card>
                </ThemedView>
                <ThemedView style={styles.mainContainer}>
                    <Card style={styles.card}>
                        <ThemedView>
                            <ThemedText style={styles.sectionTitle} type={'title'}>About Company</ThemedText>
                            <Divider style={styles.divider} />
                        </ThemedView>
                        <ThemedView style={styles.subContainer}>
                            <RenderHTML baseStyle={styles.renderHtmlFont} contentWidth={width} source={{html: ipoData.company_about}} />
                        </ThemedView>
                    </Card>
                </ThemedView>
                <ThemedView style={styles.mainContainer}>
                    <Card style={styles.card}>
                        <ThemedView>
                            <ThemedText style={styles.sectionTitle} type={'title'}>Promoter(s)</ThemedText>
                            <Divider style={styles.divider} />
                        </ThemedView>
                        <ThemedView style={styles.subContainer}>
                            <ThemedText type={'defaultSemiBold'} style={{fontFamily: 'Poppins-SemiBold', fontSize: 14}}>Company Promoter(s)</ThemedText>
                            <RenderHTML baseStyle={styles.renderHtmlFont} contentWidth={width} source={{html: ipoData.company_promoter}} />
                        </ThemedView>
                    </Card>
                </ThemedView>
                <ThemedView style={styles.mainContainer}>
                    <Card style={styles.card}>
                        <ThemedView>
                            <ThemedText style={styles.sectionTitle} type={'title'}>Issue Objective(s)</ThemedText>
                            <Divider style={styles.divider} />
                        </ThemedView>
                        <ThemedView>
                            <RenderHTML baseStyle={styles.renderHtmlFont} contentWidth={width} source={{html: ipoData.issue_objective}} />
                        </ThemedView>
                    </Card>
                </ThemedView>
                <ThemedView style={styles.mainContainer}>
                    <Card style={styles.card}>
                        <ThemedView>
                            <ThemedText style={styles.sectionTitle} type={'title'}>Disclaimer</ThemedText>
                            <Divider style={styles.divider} />
                        </ThemedView>
                        <ThemedView style={styles.subContainer}>
                            <RenderHTML baseStyle={styles.renderHtmlFont} contentWidth={width} source={{html: ipoData.disclaimer}} />
                        </ThemedView>
                    </Card>
                </ThemedView>
                <ThemedView style={styles.shareButtonContainer}>
                    <ThemedButton onPress={() => openInAppBrowser(ipoData.apply_now)}
                                  title="Apply Now"
                                  buttonColor="#f64c00"
                                  textColor="#fff"
                                  icon={<FontAwesome name="hand-o-right" size={22} color="#fff" />}
                                  labelStyle={styles.btnLabel}
                                  contentStyle={{flexDirection: 'row-reverse'}} />
                </ThemedView>
                <ThemedView style={styles.shareButtonContainer}>
                    <ThemedButton onPress={() => openInAppBrowser(ipoData.apply_now)}
                                  title="Allotment Check"
                                  buttonColor="#000000"
                                  textColor="#fff"
                                  icon={<FontAwesome name="hand-o-right" size={22} color="#fff" />}
                                  labelStyle={styles.btnLabel}
                                  contentStyle={{flexDirection: 'row-reverse'}} />
                </ThemedView>
            </ScrollView>
        </>
    );
};

export default SingleOffer;
