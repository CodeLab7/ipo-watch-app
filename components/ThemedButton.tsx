import {Button} from 'react-native-paper';
import {Colors} from "@/constants/Colors";
import * as React from "react";
import {StyleSheet} from "react-native";

type ThemedButtonProps = {
    onPress: () => void;
    title: string;
    icon: string;
};

const ThemedButton: React.FC<ThemedButtonProps> = ({onPress, title, icon}) => {
    return (
        <Button onPress={onPress} icon={icon} mode="contained" style={styles.shareButton} textColor={Colors.btnTextColor} labelStyle={styles.label}> {title} </Button>
    );
};

export default ThemedButton;

const styles = StyleSheet.create({
    shareButton: {
        backgroundColor: 'none',
    },
    label: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16
    }
});
