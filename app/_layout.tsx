import {PaperProvider} from "react-native-paper";
import {useFonts} from "expo-font";
import {Drawer} from 'expo-router/drawer';
import CustomDrawerContent from '../components/customDrawerContent';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import 'react-native-reanimated';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }
    return (
        <PaperProvider>
            <Drawer drawerContent={CustomDrawerContent}>
                <Drawer.Screen
                    name="(tabs)"
                    options={{title: 'LATEST IPO GMP'}} />
            </Drawer>
        </PaperProvider>
    )
}
