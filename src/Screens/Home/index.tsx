import React, {useState} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import NewsList from '../../Component/NewsList';
import SearchBar from '../../Component/Search';
import ServiceFailedComponent from '../../Component/ServiceFailedComponent';
import {useAppSelector} from '../../Redux/store';

interface Props {
  status: string | null;
  style: any;
  refreshNews: any;
  refreshStatus: any;
  setRefreshStatus: any;
}

const Home: React.FC<Props> = ({
  status,
  style,
  refreshNews,
  refreshStatus,
  setRefreshStatus,
}) => {
  // get data from store
  let savedDataState = useAppSelector(state => state.newsFeedReducer.data);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  return (
    <View style={style}>
      {status === 'loading' ? (
        <ActivityIndicator style={styles.indicator} />
      ) : status === 'success' ? (
        <View>
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
            style={{}}
            refreshGetNews={refreshNews}
            refreshStatus={refreshStatus}
            setRefreshStatus={setRefreshStatus}
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
