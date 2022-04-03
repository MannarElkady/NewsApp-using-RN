import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './style';
import {getPresistedItem, useAppSelector} from '../../Redux/store';

const NewsDetails = ({route}: {route: any}) => {
  let {itemID} = route.params;
  const dataList = useAppSelector(state => state.newsFeedReducer.data);
  let item = getPresistedItem(dataList, itemID);
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
