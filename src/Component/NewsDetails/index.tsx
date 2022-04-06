import {Image, Linking, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './style';
import {getPresistedItem, useAppSelector} from '../../Redux/store';
import {ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native';

const NewsDetails = ({route}: {route: any}) => {
  let {itemID, darkMode} = route.params;
  const dataList = useAppSelector(state => state.newsFeedReducer.data);
  let item = getPresistedItem(dataList, itemID);
  const openExternalLink = () => {
    Linking.openURL(item.url);
  };

  return (
    <ScrollView>
      <View>
        <Image style={styles.imageContainer} source={{uri: item.urlToImage}} />
        <View style={styles.textsContainer}>
          <View>
            <Text style={darkMode ? styles.titleTextDark : styles.titleText}>
              {item.title}
            </Text>
          </View>
          <View style={styles.authorDateContainer}>
            <Text style={darkMode ? styles.authorTextDark : styles.authorText}>
              {item.author}
            </Text>
            <Text
              style={StyleSheet.flatten([
                darkMode ? styles.authorTextDark : styles.authorText,
                {textAlign: 'right'},
              ])}>
              {item.publishedAt}
            </Text>
          </View>
          <Text
            style={
              darkMode ? styles.descriptionDarkText : styles.descriptionText
            }>
            {item.content}
          </Text>
          <TouchableOpacity onPress={openExternalLink}>
            <Text style={styles.detailsLink}>For more info: click here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default NewsDetails;
