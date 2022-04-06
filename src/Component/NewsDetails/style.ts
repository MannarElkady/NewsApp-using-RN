import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageContainer: {
    width: '90%',
    aspectRatio: 3 / 2,
    resizeMode: 'stretch',
    borderRadius: 20,
    marginTop: 20,
    marginHorizontal: 20,
  },
  authorDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    margin: 10,
  },
  titleTextDark: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    margin: 10,
  },
  descriptionText: {
    color: 'black',
    fontSize: 16,
    margin: 10,
  },
  descriptionDarkText: {
    color: 'white',
    fontSize: 16,
    margin: 10,
  },
  authorText: {color: 'grey', fontSize: 10, width: '40%', margin: 10},
  authorTextDark: {color: 'white', fontSize: 10, width: '40%', margin: 10},
  textsContainer: {margin: 20},
  detailsLink: {color: 'blue', margin: 10, alignSelf: 'flex-end'},
});

export default styles;
