import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '95%',
  },
  searchBarUnclicked: {
    padding: 10,
    flexDirection: 'row',
    width: '95%',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarClicked: {
    padding: 10,
    flexDirection: 'row',
    width: '80%',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: '90%',
  },
  darkInput: {
    fontSize: 20,
    marginLeft: 10,
    width: '90%',
    color: 'green',
  },
  searchIcon: {marginLeft: 1, width: 20, height: 20, resizeMode: 'contain'},
});

export default styles;
