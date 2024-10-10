import {Button} from 'react-native-paper';
import {Colors} from '@/constants/Colors';
import * as React from 'react';
import {StyleSheet, View, Text, StyleProp, TextStyle, ViewStyle} from 'react-native';
import {FontAwesome5} from "@expo/vector-icons";

type ThemedButtonProps = {
    onPress: () => void;
    title: string;
    iconName: string;
    buttonColor: string;
    textColor: string;
    icon?: JSX.Element;
    labelStyle?: StyleProp<TextStyle>;
    contentStyle?: StyleProp<ViewStyle>;
};

const ThemedButton: React.FC<ThemedButtonProps> = ({
                                                       onPress,
                                                       title,
                                                       iconName,
                                                       buttonColor,
                                                       textColor,
                                                       icon,
                                                       labelStyle,
                                                       contentStyle,
                                                   }) => {
    return (
        <Button onPress={onPress}
                icon={icon ? () => icon : () => <FontAwesome5 name={iconName} size={20} color="#f45001" />}
                mode="contained"
                buttonColor={buttonColor}
                textColor={textColor}
                labelStyle={[styles.label, labelStyle]}
                contentStyle={contentStyle}>
            {title}
        </Button>
    );
};

export default ThemedButton;

const styles = StyleSheet.create({
    label: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
    },
});
