import {Tabs} from 'expo-router';
import React from 'react';
import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';
import {MaterialIcons} from '@expo/vector-icons';
import {IconButton} from 'react-native-paper';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Image, StyleSheet} from "react-native";

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const navigation = useNavigation();

    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            tabBarInactiveTintColor: '#000000',
            headerShown: true,
            tabBarLabelStyle: {fontSize: 13},
        }}>
            <Tabs.Screen name="index"
                         options={{
                             title: 'GMP',
                             headerTitle: 'LATEST IPO GMP',
                             headerLeft: () => (<IconButton icon="menu" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />),
                             tabBarIcon: ({color}) => (<MaterialIcons name="handshake" color={color} size={30} />),
                         }} />
            <Tabs.Screen name="mainline"
                         options={{
                             title: 'Mainline',
                             headerTitle: 'Mainline IPO',
                             headerLeft: () => (<IconButton icon="menu" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />),
                             tabBarIcon: ({color}) => (<Image source={require('../../assets/icons/growth-chart.png')} style={[styles.img, {tintColor: color}]} />),
                         }} />
            <Tabs.Screen name="smeIpo"
                         options={{
                             title: 'SME IPO',
                             headerTitle: 'SME IPO',
                             headerLeft: () => (<IconButton icon="menu" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />),
                             tabBarIcon: ({color}) => (<Image source={require('../../assets/icons/electricity.png')} style={[styles.img, {tintColor: color}]} />),
                         }} />
        </Tabs>
    );
}
const styles = StyleSheet.create({
    img: {height: 27, width: 27,}
})
