import React, {useState} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import NewsList from '../../Component/NewsList';
import SearchBar from '../../Component/Search';
import ServiceFailedComponent from '../../Component/ServiceFailedComponent';
import {useAppSelector} from '../../Redux/store';
import useGetNews from './useGetNews';

const Home = () => {
  // get data from store
  let savedDataState = useAppSelector(state => state.newsFeedReducer.data);
  const [status] = useGetNews();
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {status === 'loading' ? (
        <ActivityIndicator style={styles.indicator} />
      ) : status === 'success' ? (
        <>
          <SearchBar
            clicked={clicked}
            setClicked={setClicked}
            searchWord={searchPhrase}
            setSearchWord={setSearchPhrase}
          />
          <NewsList data={savedDataState} />
        </>
      ) : (
        <ServiceFailedComponent />
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
