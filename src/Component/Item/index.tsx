import {StyleSheet, View} from 'react-native';
import React from 'react';

const Item = ({item: {}}) => {
  return (
    <View style={{position: 'relative', zIndex: 0, backgroundColor: 'grey'}}>
      <View style={styles.itemContainer} />
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 20,
    padding: 10,
    zIndex: 1,
    elevation: 1,
  },
  textsViewContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    zIndex: 2,
    elevation: 2,
  },
  textstyle: {color: 'black', fontSize: 21},
  descriptionstyle: {color: 'grey', fontSize: 18, flex: 2, margin: 5},
});
