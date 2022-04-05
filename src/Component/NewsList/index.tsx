import {FlatList, RefreshControl, View} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import Item from '../../Component/Item';
import {NewItemTileModel} from '../../Types';

interface Props {
  data: NewItemTileModel[];
  style: any;
  refreshStatus: any;
  setRefreshStatus: Dispatch<SetStateAction<boolean>>;
  refreshGetNews: any;
  darkMode: boolean;
}

const NewsList = ({
  data,
  style,
  refreshStatus,
  setRefreshStatus,
  refreshGetNews,
  darkMode,
}: Props) => {
  const refreshAction = () => {
    setRefreshStatus(true);
    refreshGetNews();
  };

  return (
    <View style={style}>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={refreshStatus}
            onRefresh={refreshAction}
          />
        }
        data={data}
        renderItem={(item: NewItemTileModel) => (
          <Item item={item} darkMode={darkMode} />
        )}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

export default NewsList;
