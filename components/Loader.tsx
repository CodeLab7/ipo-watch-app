import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const Loader = () => {
    // Create animated values for three dots
    const dot1 = React.useRef(new Animated.Value(0)).current;
    const dot2 = React.useRef(new Animated.Value(0)).current;
    const dot3 = React.useRef(new Animated.Value(0)).current;

    // Create a function to start the animation
    const startAnimation = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(dot1, {
                    toValue: 1,
                    duration: 400,
                    useNativeDriver: false,
                }),
                Animated.timing(dot1, {
                    toValue: 0,
                    duration: 400,
                    useNativeDriver: false,
                }),
                Animated.timing(dot2, {
                    toValue: 1,
                    duration: 400,
                    useNativeDriver: false,
                }),
                Animated.timing(dot2, {
                    toValue: 0,
                    duration: 400,
                    useNativeDriver: false,
                }),
                Animated.timing(dot3, {
                    toValue: 1,
                    duration: 400,
                    useNativeDriver: false,
                }),
                Animated.timing(dot3, {
                    toValue: 0,
                    duration: 400,
                    useNativeDriver: false,
                }),
            ]),
            { iterations: -1 } // Loop indefinitely
        ).start();
    };

    React.useEffect(() => {
        startAnimation();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.dot, { opacity: dot1 }]} />
            <Animated.View style={[styles.dot, { opacity: dot2 }]} />
            <Animated.View style={[styles.dot, { opacity: dot3 }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        width: 25,
        height: 25,
        borderRadius: 55,
        backgroundColor: '#00b63f',
        marginHorizontal: 5,
    },
});

export default Loader;
