import LocalTab from './LocalTab';
import { View, Text } from 'react-native';
import { useState } from 'react';

const MainComponent = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabs = [
    { title: 'text1 ', bg: 'yellow' },
    { title: 'text2 ', bg: 'pink' },
    { title: 'text3 ', bg: 'green' },
  ];
  
  return (
    <LocalTab onChangeTab={(index) => setActiveTabIndex(index)}>
      {tabs.map((item, index) => {  
      console.log('activeTabIndex', activeTabIndex);
        return (
          <View
            key={index}
            style={{
              backgroundColor:tabs[activeTabIndex].bg,
            }}>
            <Text>{item.title.repeat(40)}</Text>
          </View>
        );
      })}
    </LocalTab>
  );
};
export default MainComponent;
