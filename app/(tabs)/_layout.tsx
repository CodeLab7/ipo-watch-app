import {Tabs} from 'expo-router';
import React from 'react';
import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';
import {MaterialIcons} from "@expo/vector-icons";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
            }}>
      <Tabs.Screen
        name="index"
        options={{
            title: 'GMP',
            tabBarIcon: ({color, focused}) => (
                <MaterialIcons name={'handshake'} color={color} size={30} />
            ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
              <MaterialIcons name={'newspaper'} color={color} size={30} />
          ),
        }}
      />
    </Tabs>
  );
}
