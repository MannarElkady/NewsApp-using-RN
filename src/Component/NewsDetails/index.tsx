import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './style';
import {getPresistedItem, useAppSelector} from '../../Redux/store';

const NewsDetails = ({route}: {route: any}) => {
  let {itemID, darkMode} = route.params;
  const dataList = useAppSelector(state => state.newsFeedReducer.data);
  let item = getPresistedItem(dataList, itemID);
  return (
    <View>
      <Image style={styles.imageContainer} source={{uri: item.urlToImage}} />
      <View style={styles.textsContainer}>
        <Text style={{color: darkMode ? 'white' : 'black'}}>{item.title}</Text>
        <Text style={{color: darkMode ? 'white' : 'black'}}>{item.author}</Text>
        <Text style={{color: darkMode ? 'white' : 'black'}}>
          {item.publishedAt}
        </Text>
        <Text style={{color: darkMode ? 'white' : 'black'}}>
          {item.content}
        </Text>
        <Text style={{color: darkMode ? 'white' : 'black'}}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default NewsDetails;
