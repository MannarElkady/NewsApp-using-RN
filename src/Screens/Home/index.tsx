import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import NewsList from '../../Component/NewsList';
import useGetNews from './useGetNews';

const Home = () => {
  const [data, isLoading] = useGetNews();
  return (
    <>
      {isLoading ? (
        <ActivityIndicator style={styles.indicator} />
      ) : (
        <View style={{flex: 1}}>
          {data?.status === 'failure' ? (
            <Text style={{fontSize: 21, flex: 1, justifyContent: 'center'}}>
              Service Failed
            </Text>
          ) : (
            <NewsList data={data.articles} />
          )}
        </View>
      )}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    justifyContent: 'center',
  },
});
