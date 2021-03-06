import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create<any>({
  settingContainer: (isDarkMode: boolean, isArabic: boolean) => ({
    backgroundColor: 'white',
    borderRadius: 20,
    width: '85%',
    height: '100%',
    direction: isArabic ? 'rtl' : 'ltr',
    alignSelf: 'center',
    justifyContent: 'space-around',
    shadowColor: isDarkMode ? Colors.white : Colors.shadow,
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.3,
  }),
  toggleOption: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 2,
  },
  textStyle: {fontSize: 20, color: 'black'},
  textHeaderStyle: {fontSize: 21, margin: 20, flexGrow: 0.5, color: 'black'},
});

export default styles;
