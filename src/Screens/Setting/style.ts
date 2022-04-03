import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  settingContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    height: '70%',
    alignSelf: 'center',
    shadowColor: Colors.shadow,
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.3,
  },
  toggleOption: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textStyle: {fontSize: 20},
});

export default styles;
