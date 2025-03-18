import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, PanResponder, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // 获取屏幕宽度

const TabDemo = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [offset, setOffset] = useState(0); // 用来记录滑动的偏移量
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        setOffset(gestureState.dx); // 记录水平滑动的偏移量
      },
      onPanResponderRelease: (e, gestureState) => {
        const threshold = 100; // 设置切换的阈值

        // 根据滑动的距离判断是否切换 Tab
        let newSelectedTab = selectedTab;
        if (gestureState.dx > threshold) {
          newSelectedTab = selectedTab - 1; // 向右滑动
        } else if (gestureState.dx < -threshold) {
          newSelectedTab = selectedTab + 1; // 向左滑动
        }

        // 保证 Tab 在合法范围内
        newSelectedTab = Math.max(0, Math.min(tabs.length - 1, newSelectedTab));

        setSelectedTab(newSelectedTab);
        setOffset(0); // 释放后清除偏移
      },
    })
  ).current;

  const tabs = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab4'];

  // 用来展示不同 Tab 的内容
  const renderContent = () => {
    switch (selectedTab) {
      case 0:
        return <Text style={styles.contentText}>这是 Tab 1 的内容</Text>;
      case 1:
        return <Text style={styles.contentText}>这是 Tab 2 的内容</Text>;
      case 2:
        return <Text style={styles.contentText}>这是 Tab 3 的内容</Text>;
      default:
        return <Text style={styles.contentText}>选择一个 Tab</Text>;
    }
  };

  return (
    <View style={styles.container}>
      {/* Tab 切换区域 */}
      <View style={styles.tabBar}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tab,
              selectedTab === index && styles.activeTab, // 当前选中的 Tab 样式
            ]}
            onPress={() => setSelectedTab(index)}>
            <Text style={[styles.tabText, selectedTab === index && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 滑动内容区域 */}
      <View
        style={styles.contentArea}
        {...panResponder.panHandlers} // 绑定 PanResponder
      >
        <View
          style={[
            styles.contentWrapper,
            {
              transform: [{ translateX: -selectedTab * width + offset }], // 滑动效果
            },
          ]}
        >
          {tabs.map((tab, index) => (
            <View key={index} style={styles.tabContent}>
              {renderContent(index)}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
  },
  tab: {
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: 'blue',
  },
  contentArea: {
    flex: 1,
    overflow: 'hidden',
  },
  contentWrapper: {
    flexDirection: 'row',
    width: width * 2, // 每个 Tab 的总宽度
  },
  tabContent: {
    width: width, // 每个 Tab 的宽度
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  contentText: {
    fontSize: 18,
  },
});

export default TabDemo;
