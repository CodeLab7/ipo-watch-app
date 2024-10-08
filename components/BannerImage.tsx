import * as React from "react";
import {Dimensions, Image} from "react-native";
import Swiper from 'react-native-swiper';
import {ThemedView} from "@/components/ThemedView";

const BannerImage = ({bannerData}) =>{
    const baseImageURL = process.env.EXPO_PUBLIC_IMAGE_URL;
    const { width } = Dimensions.get('window');
    const height = width * 0.3;

    return(
        <Swiper
            showsPagination={false}
            loop={true}
            autoplay={true}
            autoplayTimeout={1}
        >
            {bannerData.map((item, index) => (
                <ThemedView key={index}>
                    <Image
                        source={{ uri: `${baseImageURL}/banner_image/${item.image}` }}
                        style={{ width: width, resizeMode: 'contain', height:height }}
                    />
                </ThemedView>
            ))}
        </Swiper>
    )
}
export default BannerImage;