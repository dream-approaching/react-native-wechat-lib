

import { useDispatch, useSelector } from "react-redux"
import ScrollableTabView from '@react-native-oh-tpl/react-native-scrollable-tab-view';
import { Text } from "react-native";
import { changeActiveIndex } from "./store/module/changeTab";

const MainComponent = () => {
    const activeTabIndex = useSelector((state) => state.change);
    console.log("activeTabIndex", activeTabIndex);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (typeof activeTabIndex !== 'number') {
    //         dispatch(switchTab(1))
    //     }
    // }, [dispatch, activeTabIndex])
    const tabs = [
        { title: "text1 text1", bg: 'pink' },
        { title: "text2 text2", bg: 'lightblue' },
        { title: "text3 text3", bg: 'yellow' },
    ]



    // console.log('%c WechatLibTurboModuleLogger tabs[activeTabIndex]:', 'color: #0e93e0;background: #aaefe5;', tabs[activeTabIndex.activeIndex]);
    // console.log('%c WechatLibTurboModuleLogger activeTabIndex:', 'color: #0e93e0;background: #aaefe5;', activeTabIndex);
    return (
        <ScrollableTabView
            rendertabBar={() => <DefaultTabBar></DefaultTabBar>}
            onChangeTab={({ i }) => {
                dispatch(changeActiveIndex(i))
            }}
            scrollWithoutAnimation={false}
            style={{paddingTop: 50}}
        >
            {tabs.map((item, index) => {
                return (
                    // <Text key={index} style={{ backgroundColor: tabs[activeTabIndex.changeActiveIndex || 0].bg }}>{item.title}</Text>
                    <Text key={index} style={{ backgroundColor: activeTabIndex.changeActiveIndex === 1 ? "pink" : "yellow" }}>{item.title.repeat(100)}</Text>

                )
            })}
            {/* <Text key={0} style={{ backgroundColor: "pink" }}>tex1</Text>
            <Text key={1} style={{ backgroundColor: "yellow" }}>tex2</Text>
            <Text key={2} style={{ backgroundColor: "blue" }}>tex3</Text> */}

        </ScrollableTabView>
    )

}
export default MainComponent
