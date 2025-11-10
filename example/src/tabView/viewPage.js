import { ScrollView, View, Text, StyleSheet } from 'react-native';
import BasePage from './basePage';
import NestedTabDemo from './TabDemo';

const TabViewPage = () => {
  return (
    <BasePage style={styles.TabViewPage}>
      {/* <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> */}
      <Text style={styles.title}>React Native Tab View 示例</Text>

      {/* 简单 Tab 示例 */}
      {/* <SimpleTabDemo /> */}

      {/* 嵌套 Tab 示例 */}
      <NestedTabDemo />

      {/* 自定义 TabBar 示例 */}
      {/* <CustomTabBarDemo /> */}

      <View style={styles.bottomSpacer} />
      {/* </ScrollView> */}
    </BasePage>
  );
};

const styles = StyleSheet.create({
  TabViewPage: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  bottomSpacer: {
    height: 30,
  },
});

export default TabViewPage;
