const React = require('react');
const ReactNative = require('react-native');
const createReactClass = require('create-react-class');
const { View, StyleSheet } = ReactNative;
import { Button } from 'react-native';

const SceneComponent = Props => {
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
    // return true;
    return !!nextProps.shouldUpdate;
  }

  render() {
    var child = this.props.children;
    if (child === null || child === false) {
      return null;
    }
    return <>{child}</>;
  }
}

const ScrollableTabView = createReactClass({
  mixins: [],
  scrollOnMountCalled: false,
  tabWillChangeWithoutGesture: false,

  getDefaultProps() {
    return {
      page: -1,
      onChangeTab: () => {},
      contentProps: {},
      prerenderingSiblingsNumber: 0,
    };
  },

  getInitialState() {
    return {
      currentPage: this.props.initialPage,
      sceneKeys: [],
    };
  },

  goToPage(pageNumber) {
    const currentPage = this.state.currentPage;
    this.updateSceneKeys({
      page: pageNumber,
      callback: this._onChangeTab.bind(this, currentPage, pageNumber),
    });
  },

  updateSceneKeys({ page, callback = () => {} }) {
    this.setState({ currentPage: page, sceneKeys: [] }, callback);
  },

  _shouldRenderSceneKey(idx, currentPageKey) {
    let numOfSibling = this.props.prerenderingSiblingsNumber;
    return (
      idx < currentPageKey + numOfSibling + 1 &&
      idx > currentPageKey - numOfSibling - 1
    );
  },

  _composeScenes() {
    return this._children().map((child, idx) => {
      return (
        <SceneComponent
          key={child.key}
          shouldUpdated={this._shouldRenderSceneKey(
            idx,
            this.state.currentPage,
          )}
          style={{ width: this.state.containerWidth }}>
          {child}
        </SceneComponent>
      );
    });
  },

  _onChangeTab(prevPage, currentPage) {
    this.props.onChangeTab({
      i: currentPage,
      ref: this._children()[currentPage],
      from: prevPage,
    });
  },

  _children(children = this.props.children) {
    return React.Children.map(children, child => child);
  },

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={[styles.tabs]}>
          <Button onPress={() => this.goToPage(0)} title={`tab1`}></Button>
          <Button onPress={() => this.goToPage(1)} title={`tab2`}></Button>
          <Button onPress={() => this.goToPage(2)} title={`tab3`}></Button>
        </View>
        <View style={styles.container}>{this._composeScenes()}</View>
      </View>
    );
  },
});

module.exports = ScrollableTabView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  tabs: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
