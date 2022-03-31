import {Image, TouchableWithoutFeedback, Text, View} from 'react-native';
import React from 'react';
import {NewItemTileModel} from '../../Types';
import styles from './style';

interface Props {
  item: NewItemTileModel;
}

const Item = ({item}: Props) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.urlToImage}} style={styles.imageContainer} />
      <Text style={styles.textstyle}>{item.title}</Text>
    </View>
  );
};

export default Item;
