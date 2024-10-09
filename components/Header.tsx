import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {ThemedView} from '@/components/ThemedView';
import {ThemedText} from '@/components/ThemedText';
import Ionicons from "@expo/vector-icons/Ionicons";
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";

interface HeaderProps {
    title: string;
    onBackPress: () => void;
}

const Header: React.FC<HeaderProps> = ({title, onBackPress}) => {
    return (
        <SafeAreaView>
            <StatusBar backgroundColor={'#fff'} />
            <ThemedView style={styles.headerContainer}>
                <TouchableOpacity onPress={onBackPress} style={styles.iconContainer}>
                    <Ionicons name="arrow-back-sharp" size={30} color="black" />
                </TouchableOpacity>
                <ThemedText style={styles.title}>{title}</ThemedText>
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
        fontSize: 20,
        color: '#000',
        fontFamily:'Poppins-Medium',
        paddingTop:10,
        paddingLeft:20
    },
});

export default Header;