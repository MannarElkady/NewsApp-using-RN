import {StyleSheet, FlatList} from 'react-native';
import React from 'react';
import Item from '../../Component/Item';
import {NewItemTileModel} from '../../Types';

interface Props {
  data: NewItemTileModel[];
}

const NewsList = ({data}: Props) => {
  return (
    <FlatList
      style={{marginHorizontal: 16}}
      data={data}
      renderItem={Item}
      keyExtractor={item => item.title}
      // extraData={selectedId}
    />
  );
};

export default NewsList;

const styles = StyleSheet.create({});
