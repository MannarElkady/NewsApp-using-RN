import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    height: 300,
    shadowColor: Colors.shadow,
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.3,
    margin: 16,
  },
  imageContainer: {
    flex: 1,
    zIndex: 1,
    elevation: 1,
    resizeMode: 'stretch',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
  },
  textstyle: {
    color: 'black',
    backgroundColor: 'white',
    opacity: 0.7,
    fontSize: 21,
    zIndex: 2,
    elevation: 2,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: 5,
  },
  darkModeTextstyle: {
    color: 'green',
    backgroundColor: 'white',
    opacity: 0.7,
    fontSize: 21,
    zIndex: 2,
    elevation: 2,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: 5,
  },
});

export default styles;
