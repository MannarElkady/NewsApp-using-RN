import {View} from 'react-native';
import React, {useState} from 'react';
import TabBar from '../TabBar';
import {Home, Setting} from '../../Screens';
import styles from './style';
import Images from '../../Images';

const TabNavigator = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const didSelectTabIndex = (index: React.SetStateAction<number>) => {
    setSelectedTab(index);
  };
  const tabsViews = [<Home />, <Setting />];
  return (
    <>
      <View style={styles.pageStyle}>{tabsViews[selectedTab]}</View>
      <View style={styles.barStyle}>
        {
          <TabBar
            key={'tabBar'}
            tabBarItems={[
              {name: 'NewsFeed', icon: Images.newsFeedIcon},
              {name: 'Setting', icon: Images.settingIcon},
            ]}
            didSelectTabIndex={didSelectTabIndex}
          />
        }
      </View>
    </>
  );
};

export default TabNavigator;
