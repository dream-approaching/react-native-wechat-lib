import ScrollableTabView from '@react-native-oh-tpl/react-native-scrollable-tab-view';
import { View, Text, Button } from 'react-native';
import { useState } from 'react';

const React = require('react');

const SceneComponent = Props => {
  console.log('%c WechatLibTurboModuleLogger Props:', 'color: #0e93e0;background: #aaefe5;', Props);
  const { shouldUpdated, ...props } = Props;
  return (
    <View {...props}>
      <StaticContainer shouldUpdate={shouldUpdated}>
        {props.children}
      </StaticContainer>
    </View>
  );
};

class StaticContainer extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !!nextProps.shouldUpdate;
  }

  render() {
    var child = this.props.children;
    if (child === null || child === false) {
      return null;
    }
    return React.Children.only(child);
  }
}

const MainComponent = ({ children, index }) => {
  console.log('%c WechatLibTurboModuleLogger index:', 'color: #0e93e0;background: #aaefe5;', index);
  const _children = (cd = children) => {
    return React.Children.map(cd, child => child);
  };
  // console.log(
  //   '%c WechatLibTurboModuleLogger _children():',
  //   'color: #0e93e0;background: #aaefe5;',
  //   _children(),
  // );
  return (
    <View style={{ paddingTop: 30 }}>
      {_children().map((child, idx) => {
        return (
          <SceneComponent
            key={idx}
            shouldUpdated={idx === index}
            style={{ width: '100%' }}>
            {child}
          </SceneComponent>
        );
      })}
    </View>
  );
};

const Main = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabs = [
    { title: 'text1 ', bg: 'yellow' },
    { title: 'text2 ', bg: 'pink' },
    { title: 'text3 ', bg: 'yellow' },
  ];

  return (
    <MainComponent index={activeTabIndex}>
      {tabs.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              backgroundColor: activeTabIndex === index? 'pink' : 'yellow',
              //   backgroundColor: item.bg,
            }}>
            <Text>{item.title.repeat(40)}</Text>
          </View>
        );
      })}
      <Button
        title="toggleContent"
        onPress={() => {
          setActiveTabIndex(
            activeTabIndex === 2 ? 0 : activeTabIndex + 1,
          );
        }}></Button>
    </MainComponent>
  );
};
// return this._children().map((child, idx) => {
//   let key = this._makeSceneKey(child, idx);
//   return <SceneComponent
//     key={child.key}
//     shouldUpdated={this._shouldRenderSceneKey(idx, this.state.currentPage)}
//     style={{width: this.state.containerWidth, }}
//   >
//     {this._keyExists(this.state.sceneKeys, key) ? child : <View tabLabel={child.props.tabLabel}/>}
//   </SceneComponent>;
// });
export default Main;
