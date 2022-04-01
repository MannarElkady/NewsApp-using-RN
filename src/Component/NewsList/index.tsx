import {FlatList} from 'react-native';
import React from 'react';
import Item from '../../Component/Item';
import {NewItemTileModel} from '../../Types';

interface Props {
  data: NewItemTileModel[];
}

const NewsList = ({data}: Props) => {
  return (
    <FlatList
      data={data}
      renderItem={(item: NewItemTileModel) => <Item item={item} />}
      keyExtractor={item => item.title}
    />
  );
};

export default NewsList;
