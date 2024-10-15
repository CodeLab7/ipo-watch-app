import * as React from 'react';
import {useState} from 'react';
import {SceneMap, TabBar, TabView} from "react-native-tab-view";
import {StyleSheet} from 'react-native';
import {UpcomingIpo} from "@/app/(mainline)/upcomingIpo";
import {ListedIpo} from "@/app/(mainline)/listedIpo";
import {ThemedText} from "@/components/ThemedText";
import MyBannerAd from "@/components/AdvBanner";

const MainlineScreen: React.FC = () => {
    const [index, setIndex] = useState(0);

    const [routes] = useState([
        {key: 'upcoming', title: 'Upcoming IPO'},
        {key: 'listed', title: 'Listed IPO'},
    ]);

    const renderScene = SceneMap({
        upcoming: UpcomingIpo,
        listed: ListedIpo,
    });

    return (
        <>
            <TabView
                navigationState={{index, routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={(props) => (
                    <TabBar
                        {...props}
                        indicatorStyle={styles.indicatorStyle}
                        style={styles.tabBarStyle}
                        renderLabel={({route}) => (
                            <ThemedText style={styles.labelStyle} type={'subtitle'}> {route.title} </ThemedText>
                        )}
                    />
                )}
            />
            <MyBannerAd />
        </>
    );
}

const styles = StyleSheet.create({
    indicatorStyle: {
        backgroundColor: '#00b63f',
        height: 3,
        width: '25%',
        marginHorizontal: 50,
    },
    tabBarStyle: {
        backgroundColor: 'white',
    },
    labelStyle: {
        color: '#00273F',
        fontSize: 16,
        paddingBottom: 3,
    },
});

export default MainlineScreen;
