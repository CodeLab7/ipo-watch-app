import {StyleSheet} from 'react-native';

import {HelloWave} from '@/components/HelloWave';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';

export default function HomeScreen() {
    return (
        <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Welcome IPO Watch</ThemedText>
            <HelloWave />
        </ThemedView>

    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
