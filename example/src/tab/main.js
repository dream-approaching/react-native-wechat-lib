import LocalTab from './LocalTab';
import { View, Text } from 'react-native';
import { useState } from 'react';

const MainComponent = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  console.log('activeTabIndex', activeTabIndex);
  const tabs = [
    { title: 'text1 ', bg: 'yellow' },
    { title: 'text2 ', bg: 'pink' },
    { title: 'text3 ', bg: 'yellow' },
  ];

  return (
    <LocalTab onChangeTab={({ i }) => setActiveTabIndex(i)}>
      {tabs.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              backgroundColor: activeTabIndex === 1 ? 'pink' : 'yellow',
                // backgroundColor: item.bg,
            }}>
            <Text>{item.title.repeat(40)}</Text>
          </View>
        );
      })}
    </LocalTab>
  );
};
export default MainComponent;
