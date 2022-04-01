import {Image, TouchableWithoutFeedback, Text, View} from 'react-native';
import React from 'react';
import {NavigationScreens, NewItemTileModel} from '../../Types';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

interface Props {
  item: NewItemTileModel;
}

const Item = ({item}: Props) => {
  let navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      key={item.index}
      onPress={() => {
        navigation.navigate(NavigationScreens.detailsPage, item.item);
      }}>
      <View style={styles.itemContainer}>
        <Image
          source={{uri: item.item.urlToImage}}
          style={styles.imageContainer}
        />
        <Text style={styles.textstyle}>{item.item.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Item;
