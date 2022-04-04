import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  selectedTabBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabBarContainer: {
    height: '100%',
    bottom: 0,
    marginTop: 10,
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    backgroundColor: 'white',
  },

  darkTabBarContainer: {
    height: '100%',
    bottom: 0,
    marginTop: 10,
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    backgroundColor: 'black',
  },

  tabBarItem: (selectedIndex, index, darkMode) => ({
    borderBottomWidth: selectedIndex === index ? 2 : 0,
    borderColor: darkMode ? 'green' : 'grey',
  }),

  tabBarItemText: (selectedIndex, index, darkMode) => ({
    color: selectedIndex === index ? (darkMode ? 'green' : 'black') : 'grey',
    fontSize: 21,
    fontWeight: selectedIndex === index ? 'bold' : '100',
  }),

  tabBarIcon: {
    width: 26,
    height: '100%',
    resizeMode: 'contain',
  },
});

export default styles;
