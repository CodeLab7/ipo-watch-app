import {ScrollView} from "react-native-gesture-handler";
import {Dimensions, Image} from "react-native";
import * as React from "react";
import {useState} from "react";
import {baseImageURL} from "@/helper/other/url-helper";

const BannerImage = ({bannerData}) => {
    const [active, setActive] = useState(0);
    const {width} = Dimensions.get('window');
    const height = width * 0.3;

    const onScrollChange = ({nativeEvent}) => {
        const slide = Math.ceil(
            nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
        );
        if (slide !== active) {
            setActive(slide);
        }
    };
    return (
        <ScrollView
            pagingEnabled
            horizontal
            onScroll={onScrollChange}
            showsHorizontalScrollIndicator={false}
            style={{width, height}}>
            {bannerData.map((item, index) => (
                <Image key={index} source={{uri: `${baseImageURL}/banner_image/${item.image}`}} style={{width, height, resizeMode: 'cover', marginVertical: 10}} />
            ))}
        </ScrollView>
    )
}
export default BannerImage