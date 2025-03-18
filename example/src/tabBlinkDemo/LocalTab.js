import React from 'react'
import { Button, View, StyleSheet } from 'react-native';

const SceneComponent = React.memo(({ children }) => {
  if (children === null || children === false) {
    return null;
  }
  return <>{children}</>;
}, (_, newProps) => !newProps.shouldUpdated);


export default class ScrollableTabView extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0,
    }
  }

  goToPage(pageNumber) {
    this.props.onChangeTab(pageNumber)
    this.setState({
        currentPage: pageNumber
      },
      // () => this.props.onChangeTab(pageNumber)
    );
  }

  _shouldRenderSceneKey(idx) {
    const { currentPage } = this.state;
    const res = idx < currentPage + 1 && idx > currentPage - 1
    return res;
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={[styles.tabs]}>
          <Button onPress={() => this.goToPage(0)} title={`tab1`}></Button>
          <Button onPress={() => this.goToPage(1)} title={`tab2`}></Button>
          <Button onPress={() => this.goToPage(2)} title={`tab3`}></Button>
        </View>
        <View style={styles.container}>
          {this.props.children.map((child, idx) => {
            return (
              <SceneComponent
                key={child.key}
                shouldUpdated={this._shouldRenderSceneKey(idx)}
              >
                {child}
              </SceneComponent>
            );
          })}
        </View>
      </View>
    )
  }

}

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



