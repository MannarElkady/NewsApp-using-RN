import {FlatList, RefreshControl, View} from 'react-native';
import React, {useState} from 'react';
import Item from '../../Component/Item';
import {NewItemTileModel} from '../../Types';
import useGetNews from '../../Screens/Home/useGetNews';

interface Props {
  data: NewItemTileModel[];
  style: any;
}

const NewsList = ({data, style}: Props) => {
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const refreshAction = () => {
    setShouldRefresh(true);
    setShouldRefresh(false);
  };

  return (
    <View style={style}>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={shouldRefresh}
            onRefresh={refreshAction}
          />
        }
        data={data}
        renderItem={(item: NewItemTileModel) => <Item item={item} />}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

export default NewsList;
