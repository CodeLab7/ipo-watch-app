import {PaperProvider} from "react-native-paper";
import {useFonts} from "expo-font";
import {Drawer} from 'expo-router/drawer';
import CustomDrawerContent from '../components/customDrawerContent';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import 'react-native-reanimated';
import {Stack} from 'expo-router';
import {LogBox} from "react-native";


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded] = useFonts({
        'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Regular' :require('../assets/fonts/Poppins-Regular.ttf')
    });
    LogBox.ignoreAllLogs();
    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync()
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }
    return (
        <PaperProvider>
            <Drawer drawerContent={CustomDrawerContent}>
                <Drawer.Screen name="(tabs)" options={{headerShown: false}} />
                <Stack.Screen name="(singleOffer)/singleOffer" options={{headerShown: false}} />
                <Stack.Screen name="+not-found" />
            </Drawer>
        </PaperProvider>
    )
}
