import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import NewsList from '../../Component/NewsList';
import {AxiosClient, useGetHandler} from '../../Service';
import {DomainConstants} from '../../Types';

var client = AxiosClient(DomainConstants.baseURL, {
  domains: 'wsj.com',
  apiKey: 'ed93edc78969454fab2bf54bf3f053ac',
});
const Home = () => {
  const [data, isLoading] = useGetHandler(DomainConstants.postsURL, client);
  return (
    <>
      {isLoading ? (
        <ActivityIndicator style={styles.indicator} />
      ) : (
        <View style={{flex: 1}}>
          {data?.[0]?.state === 'failed' ? (
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
