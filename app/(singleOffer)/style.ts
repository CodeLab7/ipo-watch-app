import {Colors} from "@/constants/Colors";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.bodyBackgroundColor
    },
    bannerMainConatainer:{paddingTop:7},
    card: {
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 5,
        padding: 1.5,
        backgroundColor: Colors.bodyBackgroundColor,
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
        textAlign: 'center',
    },
    offerDate: {
        fontSize: 14
    },
    imgContainer: {
        borderColor: 'green',
        borderWidth: 1,
        marginVertical: 10
    },
    img: {
        width: 180,
        height: 85,
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
    sectionTitle: {
        fontSize: 17,
        marginVertical: 10,
        textAlign: 'center',
    },
    divider: {
        marginHorizontal: 10,
        backgroundColor: '#737373',
    },
    labelItemContainer: {
        flexDirection: 'row',
        paddingVertical: 7,
        paddingHorizontal: 10,
    },
    label: {
        width: '32%'
    },
    value: {
        width: '68%'
    },
    subContainer: {
        paddingHorizontal: 10,
        // paddingVertical: 10
    },
    shareButtonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10
    },
    renderHtmlFont: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: '#444',
        lineHeight: 22
    },
    btnLabel: {
        fontFamily: 'Poppins-Bold',
    },
    cellContainer: {
        marginVertical: -5,
        alignItems:'flex-start'
    },
    headerTitleText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 13,
        color: '#000',
        textAlign:'left',
    },
    cellText: {
        fontFamily: 'Poppins-Regular',
        color: '#000',
        fontSize: 11,
    },
    btnDetailsLabel: {
        fontSize: 14,
        fontFamily: 'Poppins-Bold',
    }
});