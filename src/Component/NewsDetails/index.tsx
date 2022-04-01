import {Image, Text, View} from 'react-native';
import React from 'react';
import {NewItemTileModel} from '../../Types';
import styles from './style';

const NewsDetails = ({route}) => {
  let item: NewItemTileModel = route.params;
  return (
    <View>
      <Image style={styles.imageContainer} source={{uri: item.urlToImage}} />
      <View style={styles.textsContainer}>
        <Text>{item.title}</Text>
        <Text>{item.author}</Text>
        <Text>{item.publishedAt}</Text>
        <Text>{item.content}</Text>
        <Text>{item.description}</Text>
      </View>
    </View>
  );
};

export default NewsDetails;
