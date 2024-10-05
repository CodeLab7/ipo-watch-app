import {ListedIpo} from "@/app/(tabs)/(smeipo)/listedIpo";
import {useState} from "react";
import {UpcomingIpo} from "@/app/(tabs)/(smeipo)/upcomingIpo";
import {SceneMap, TabBar, TabView} from "react-native-tab-view";

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
                    indicatorStyle={{backgroundColor: 'green'}}
                    style={{backgroundColor: 'white'}}
                    labelStyle={{color: 'black'}}
                />
            )}
        />
    )
}
export default SmoIpoScreen
