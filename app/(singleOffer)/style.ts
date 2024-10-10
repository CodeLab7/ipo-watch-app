import {Colors} from "@/constants/Colors";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
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
        fontSize: 22,
        marginBottom: 8,
    },
    offerDate: {
        fontSize: 15
    },
    imgContainer: {
        borderColor: 'green',
        borderWidth: 1,
        marginVertical: 10
    },
    img: {
        width: 210,
        height: 100,
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
        fontSize: 20,
        marginVertical: 10,
        textAlign: 'center',
    },
    divider: {
        marginHorizontal: 16,
        backgroundColor: '#737373',
    },
    labelItemContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
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
        paddingVertical: 10
    },
    shareButtonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10
    },
    renderHtmlFont: {
        fontFamily: 'Poppins-Medium',
        fontSize: 13,
        color: '#444',
        lineHeight: 22
    },
    btnLabel: {
        fontFamily: 'Poppins-Bold',
    },
    cellContainer: {
        marginVertical: -5,
    },
    headerTitleText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 13,
        color: '#000'
    },
    cellText: {
        fontFamily: 'Poppins-Light',
        color: '#000',fontSize: 13,
    },
    btnDetailsLabel: {
        fontSize: 14,
        fontFamily: 'Poppins-Bold',
    }
});