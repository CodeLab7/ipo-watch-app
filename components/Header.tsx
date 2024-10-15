import React from 'react';
import {StyleSheet} from 'react-native';
import {ThemedView} from '@/components/ThemedView';
import {ThemedText} from '@/components/ThemedText';
import Ionicons from "@expo/vector-icons/Ionicons";
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {TouchableRipple} from "react-native-paper";

interface HeaderProps {
    title: string;
    onBackPress: () => void;
}

const Header: React.FC<HeaderProps> = ({title, onBackPress}) => {
    return (
        <SafeAreaView>
            <StatusBar backgroundColor={'#fff'} />
            <ThemedView style={styles.headerContainer}>
                <TouchableRipple onPress={onBackPress} style={styles.iconContainer}>
                    <Ionicons name="arrow-back-sharp" size={30} color="black"/>
                </TouchableRipple>
                <ThemedText numberOfLines={1} style={styles.title}>{title}</ThemedText>
            </ThemedView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: '#fff',
        elevation: 4,
    },
    iconContainer: {
        padding: 5,
        marginRight: 10,
    },
    title: {
        fontSize: 18,
        color: '#00273F',
        fontFamily: 'Poppins-Medium',
        paddingTop: 10,
        paddingLeft: 10,
        width: '80%'
    },
});

export default Header;