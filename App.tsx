/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import TabBar from './src/Component/TabBar';
import {Home, Setting} from './src/Screens';

const App = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const didSelectTabIndex = (index: React.SetStateAction<number>) => {
    setSelectedTab(index);
  };

  const tabsViews = [<Home />, <Setting />];

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.pageStyle}>{tabsViews[selectedTab]}</View>
      <View style={styles.barStyle}>
        {
          <TabBar
            tabBarItems={['HOME', 'Setting']}
            didSelectTabIndex={didSelectTabIndex}
          />
        }
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginBottom: 10,
  },
  barStyle: {height: '5%'},
  pageStyle: {height: '95%'},
});

export default App;
