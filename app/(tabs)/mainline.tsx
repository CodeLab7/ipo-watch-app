import * as React from 'react';
import {useState} from 'react';
import {SceneMap, TabBar, TabView} from "react-native-tab-view";
import {UpcomingIpo} from "@/app/(tabs)/(mainline)/upcomingIpo";
import {ListedIpo} from "@/app/(tabs)/(mainline)/listedIpo";

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
        <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={(props) => (
                <TabBar
                    {...props}
                    indicatorStyle={{backgroundColor: 'green'}}
                    style={{backgroundColor: 'white'}}
                    labelStyle={{color: 'black'}}
                />
            )}
        />
    );
}
export default MainlineScreen

