import { useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';

const { width } = Dimensions.get('window');

// 二级 Tab 组件
const SecondLevelTab = ({ category }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'all', title: '全部' },
    { key: 'hot', title: '热门' },
    { key: 'new', title: '最新' },
  ]);

  const renderScene = ({ route }) => {
    return (
      <View style={styles.secondSceneContainer}>
        <Text style={styles.secondSceneText}>
          {category} - {route.title}
        </Text>
        <Text style={styles.secondSceneDesc}>
          这是 {category} 分类下的 {route.title} 内容
        </Text>
        <View style={styles.contentList}>
          {[1, 2, 3, 4, 5].map(item => (
            <TouchableOpacity
              key={item}
              style={styles.listItem}
              onPress={() => {
                console.log('点击了内容项，index:', item);
              }}>
              <Text style={styles.listItemText}>
                {category} {route.title} 内容项 {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={styles.secondIndicator}
      style={styles.secondTabBar}
      labelStyle={styles.secondLabel}
      activeColor="#52c41a"
      inactiveColor="#999"
      scrollEnabled={true}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{ width }}
      scrollEnabled={false}
      animationEnabled={false}
      overScrollMode="auto"
    />
  );
};

// 主组件
const NestedTabDemo = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'music', title: '音乐' },
    { key: 'video', title: '视频' },
    { key: 'live', title: '直播' },
    { key: 'radio', title: '电台' },
  ]);

  const renderScene = ({ route }) => {
    return (
      <View style={styles.firstSceneContainer}>
        <SecondLevelTab category={route.title} />
      </View>
    );
  };

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={styles.firstIndicator}
      style={styles.firstTabBar}
      labelStyle={styles.firstLabel}
      activeColor="#ff4d4f"
      inactiveColor="#666"
      scrollEnabled={true}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.demoTitle}>嵌套 Tab 示例（二级 Tab）</Text>
      <View style={styles.tabViewContainer}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={setIndex}
          initialLayout={{ width }}
          scrollEnabled={false}
          overScrollMode="auto"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  demoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 15,
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  tabViewContainer: {
    height: 450,
  },
  // 一级 Tab 样式
  firstTabBar: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  firstIndicator: {
    backgroundColor: '#ff4d4f',
    height: 3,
  },
  firstLabel: {
    fontSize: 15,
    fontWeight: '600',
  },
  firstSceneContainer: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  // 二级 Tab 样式
  secondTabBar: {
    backgroundColor: '#f5f5f5',
    elevation: 0,
    shadowOpacity: 0,
  },
  secondIndicator: {
    backgroundColor: '#52c41a',
    height: 2,
  },
  secondLabel: {
    fontSize: 13,
    fontWeight: '500',
  },
  secondSceneContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  secondSceneText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  secondSceneDesc: {
    fontSize: 13,
    color: '#999',
    marginBottom: 15,
  },
  contentList: {
    flex: 1,
  },
  listItem: {
    padding: 15,
    backgroundColor: '#fafafa',
    borderRadius: 6,
    marginBottom: 10,
  },
  listItemText: {
    fontSize: 14,
    color: '#666',
  },
});

export default NestedTabDemo;
