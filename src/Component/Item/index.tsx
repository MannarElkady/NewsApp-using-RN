import {Image, TouchableWithoutFeedback, Text, View} from 'react-native';
import React from 'react';
import {NavigationScreens} from '../../Constants';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {NewItemTileModel} from '../../Types';

interface Props {
  item: {newsData: NewItemTileModel};
  darkMode: boolean;
}

const Item = ({item, darkMode}: Props) => {
  let navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      key={item.index}
      onPress={() => {
        navigation.navigate(NavigationScreens.detailsPage, {
          itemID: item.index, darkMode: darkMode,
        });
      }}>
      <View style={styles.itemContainer}>
        <Image
          source={{uri: item.item.urlToImage}}
          style={styles.imageContainer}
        />
        <Text style={darkMode ? styles.darkModeTextstyle : styles.textstyle}>{item.item.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Item;
