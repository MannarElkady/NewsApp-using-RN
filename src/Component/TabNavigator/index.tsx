import {View} from 'react-native';
import React, {useState} from 'react';
import TabBar from '../TabBar';
import {Home, Setting} from '../../Screens';
import styles from './style';
import Images from '../../Images';
import useGetNews from '../../Screens/Home/useGetNews';
import {setNews} from '../../Redux/Slicers/NewsListReducer';
import {useAppDispatch, useAppSelector} from '../../Redux/store';

const TabNavigator = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const didSelectTabIndex = (index: React.SetStateAction<number>) => {
    setSelectedTab(index);
  };
  const [shouldRefresh, setShouldRefresh] = useState(false);
  let dispatch = useAppDispatch();

  let rehydratedVal = useAppSelector(state => state._persist.rehydrated);
  console.log('====================================');
  console.log(rehydratedVal);
  console.log('====================================');
  //save news state to redux
  const successCallback = (data: any) => {
    let newsData = data.articles;
    dispatch(setNews(newsData));
    setShouldRefresh(false);
  };

  const [status, refetch] = useGetNews(successCallback);
  const tabsViews = [
    <Home
      fetchDataStatus={status}
      style={styles.pageStyle}
      refreshNews={refetch}
      refreshStatus={shouldRefresh}
      setRefreshStatus={setShouldRefresh}
    />,
    <Setting />,
  ];
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
