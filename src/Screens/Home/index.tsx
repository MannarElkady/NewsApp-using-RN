import React, {useState} from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import NewsList from '../../Component/NewsList';
import SearchBar from '../../Component/Search';
import ServiceFailedComponent from '../../Component/ServiceFailedComponent';
import {useAppSelector} from '../../Redux/store';

interface Props {
  status: string;
}

const Home = ({status}: Props) => {
  // get data from store
  let savedDataState = useAppSelector(state => state.newsFeedReducer.data);
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
          <NewsList
            data={savedDataState.filter(item =>
              item.title.toLowerCase().includes(searchPhrase.toLowerCase()),
            )}
          />
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
