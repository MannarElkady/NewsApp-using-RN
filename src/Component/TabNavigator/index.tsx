import {View} from 'react-native';
import React, {useState} from 'react';
import TabBar from '../TabBar';
import {Home, Setting} from '../../Screens';
import styles from './style';
import Images from '../../Images';
import useGetNews from '../../Screens/Home/useGetNews';
import {setNews} from '../../Redux/Slicers/NewsListReducer';
import {useAppDispatch, useAppSelector} from '../../Redux/store';
import {useTranslation} from 'react-i18next';

const TabNavigator = () => {
  const {t} = useTranslation();
  const [selectedTab, setSelectedTab] = useState(0);
  const isDarkMode = useAppSelector(state => state.themingReducer.isDarkTheme);

  const didSelectTabIndex = (index: React.SetStateAction<number>) => {
    setSelectedTab(index);
  };
  const [shouldRefresh, setShouldRefresh] = useState(false);
  let dispatch = useAppDispatch();

  //save news state to redux
  const successCallback = (data: any) => {
    let newsData = data.articles;
    dispatch(setNews(newsData));
    setShouldRefresh(false);
  };

  const [status, refetch] = useGetNews(successCallback);
  const tabsViews = [
    <Home
      darkMode={isDarkMode}
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
            darkMode={isDarkMode}
            key={'tabBar'}
            tabBarItems={[
              {
                name: t('newsfeedTabItem'),
                icon: isDarkMode
                  ? Images.newsFeedDarkIcon
                  : Images.newsFeedIcon,
              },
              {
                name: t('settingTabItem'),
                icon: isDarkMode ? Images.settingDarkIcon : Images.settingIcon,
              },
            ]}
            didSelectTabIndex={didSelectTabIndex}
          />
        }
      </View>
    </>
  );
};

export default TabNavigator;
