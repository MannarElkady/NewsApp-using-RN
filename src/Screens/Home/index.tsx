import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import NewsList from '../../Component/NewsList';
import ServiceFailedComponent from '../../Component/ServiceFailedComponent';
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
            <ServiceFailedComponent />
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
