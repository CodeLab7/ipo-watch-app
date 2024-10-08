import {ListedIpo} from "@/app/(tabs)/(smeipo)/listedIpo";
import {useState} from "react";
import {UpcomingIpo} from "@/app/(tabs)/(smeipo)/upcomingIpo";
import {SceneMap, TabBar, TabView} from "react-native-tab-view";
import {StyleSheet} from 'react-native';
import {ThemedText} from "@/components/ThemedText";

const SmoIpoScreen = () => {
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
                        <ThemedText style={styles.labelStyle}> {route.title} </ThemedText>
                    )}
                />
            )}
        />
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
        color: 'black',
        fontWeight: '900',
        fontSize: 16,
        paddingBottom: 3,
    },
});

export default SmoIpoScreen
