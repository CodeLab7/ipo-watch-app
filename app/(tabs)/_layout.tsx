import {Tabs} from 'expo-router';
import React from 'react';
import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';
import {MaterialIcons} from '@expo/vector-icons';
import {IconButton} from 'react-native-paper';
import {DrawerActions, useNavigation} from '@react-navigation/native';

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const navigation = useNavigation();

    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            headerShown: true,
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
                             tabBarIcon: ({color, focused}) => (<MaterialIcons name="timeline" color={color} size={30} />),
                         }} />
            <Tabs.Screen name="explore"
                         options={{
                             title: 'News',
                             headerTitle: 'News/Offers',
                             headerLeft: () => (<IconButton icon="menu" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />),
                             tabBarIcon: ({color, focused}) => (<MaterialIcons name="newspaper" color={color} size={30} />),
                         }} />
        </Tabs>
    );
}
