import React, {useState} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import NewsList from '../../Component/NewsList';
import SearchBar from '../../Component/Search';
import ServiceFailedComponent from '../../Component/ServiceFailedComponent';
import {useAppSelector} from '../../Redux/store';

interface Props {
  fetchDataStatus: string | (() => void) | null;
  style: any;
  refreshNews: any;
  refreshStatus: any;
  setRefreshStatus: any;
  darkMode: boolean;
}

const Home: React.FC<Props> = ({
  fetchDataStatus,
  style,
  refreshNews,
  refreshStatus,
  setRefreshStatus,
  darkMode,
}) => {
  // get data from store
  let savedDataState = useAppSelector(state => state.newsFeedReducer.data);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  return (
    <View style={style}>
      {fetchDataStatus === 'loading' ? (
        <ActivityIndicator style={styles.indicator} />
      ) : fetchDataStatus === 'success' ? (
        <View>
          <SearchBar
            clicked={clicked}
            setClicked={setClicked}
            searchWord={searchPhrase}
            setSearchWord={setSearchPhrase}
            darkMode={darkMode}
          />
          <NewsList
            data={savedDataState.filter(item =>
              item.title.toLowerCase().includes(searchPhrase.toLowerCase()),
            )}
            darkMode={darkMode}
            refreshGetNews={refreshNews}
            refreshStatus={refreshStatus}
            setRefreshStatus={setRefreshStatus}
            style={{height: '90%'}}
          />
        </View>
      ) : (
        <ServiceFailedComponent />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    justifyContent: 'center',
  },
});
