import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  settingContainer: {
    flex: 0.9,
    justifyContent: 'center',
  },
  themeSectionContainer: {
    flex: 0.5,
  },
  languageSectionContaienr: {
    margin: 20,
    padding: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    shadowColor: Colors.shadow,
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.3,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    width: '85%',
    alignSelf: 'center',
  },
  textStyle: {fontSize: 20},
  textHeaderStyle: {fontSize: 21, margin: 20, flexGrow: 0.5},
});

export default styles;
