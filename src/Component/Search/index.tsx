import React from 'react';
import styles from './styles';
import {
  TextInput,
  View,
  Keyboard,
  Button,
  Image,
  Pressable,
} from 'react-native';
import Images from '../../Images';

const SearchBar = ({clicked, searchWord, setSearchWord, setClicked}) => {
  return (
    <View style={styles.container}>
      <View
        style={clicked ? styles.searchBarClicked : styles.searchBarUnclicked}>
        {/* search Icon */}
        <Image source={Images.searchIcon} style={styles.searchIcon} />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search for New"
          value={searchWord}
          onChangeText={setSearchWord}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Pressable onPress={() => setSearchWord('')}>
            <Image source={Images.crossImg} style={styles.searchIcon} />
          </Pressable>
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          />
        </View>
      )}
    </View>
  );
};
export default SearchBar;
