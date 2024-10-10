import * as React from "react";
import {Dimensions, Image} from "react-native";
import Swiper from 'react-native-swiper';
import {TouchableRipple} from 'react-native-paper';
import * as WebBrowser from "expo-web-browser";

const BannerImage = ({bannerData}) => {
    const baseImageURL = process.env.EXPO_PUBLIC_IMAGE_URL;
    const {width} = Dimensions.get('window');
    const height = width * 0.3;

    const openInAppBrowser = async (url: string) => {
        try {
            await WebBrowser.openBrowserAsync(url);
        } catch (error) {
            console.error('Error opening browser:', error);
        }
    };

    return (
        <Swiper showsPagination={false} loop={true} autoplay={true} autoplayTimeout={3} height={height}>
            {bannerData.map((item, index) => (
                <TouchableRipple key={index} onPress={() => openInAppBrowser('https://upstox.com/open-demat-account/?f=KR8824')}>
                    <Image source={{uri: item.image}} style={{width: width, resizeMode: 'contain', height: height}} />
                </TouchableRipple>
            ))}
        </Swiper>
    )
}
export default BannerImage;