import {
  Image,
  TouchableWithoutFeedback,
  Text,
  View,
  Linking,
} from 'react-native';
import React from 'react';
import {NavigationScreens, NewItemTileModel} from '../../Types';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

interface Props {
  item: {newsData: NewItemTileModel};
}

const Item = ({item}: Props) => {
  let navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      key={item.index}
      onPress={() => {
        navigation.navigate(NavigationScreens.detailsPage, {
          itemID: item.index,
        });
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
