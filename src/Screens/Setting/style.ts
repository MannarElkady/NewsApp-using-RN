import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  settingContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    flex: 0.7,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-around',
    shadowColor: Colors.shadow,
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.3,
  },
  toggleOption: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 2,
  },
  textStyle: {fontSize: 20},
  textHeaderStyle: {fontSize: 21, margin: 20, flexGrow: 0.5},
});

export default styles;
