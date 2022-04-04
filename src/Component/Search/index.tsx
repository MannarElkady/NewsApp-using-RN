import React, {Dispatch, SetStateAction} from 'react';
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

interface Props {
  clicked: boolean;
  searchWord: string;
  setSearchWord: Dispatch<SetStateAction<string>>;
  setClicked: Dispatch<SetStateAction<boolean>>;
  darkMode: boolean;
}

const SearchBar = ({
  clicked,
  searchWord,
  setSearchWord,
  setClicked,
  darkMode,
}: Props) => {
  return (
    <View style={styles.container}>
      <View
        style={clicked ? styles.searchBarClicked : styles.searchBarUnclicked}>
        <Image source={Images.searchIcon} style={styles.searchIcon} />
        <TextInput
          style={darkMode ? styles.darkInput : styles.input}
          placeholder="Search for New"
          placeholderTextColor={darkMode ? 'green' : 'grey'}
          value={searchWord}
          onChangeText={setSearchWord}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {clicked && (
          <Pressable onPress={() => setSearchWord('')}>
            <Image source={Images.crossIcon} style={styles.searchIcon} />
          </Pressable>
        )}
      </View>
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
