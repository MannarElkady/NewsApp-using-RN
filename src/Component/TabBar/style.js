import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  selectedTabBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabBarContainer: {
    flex: 1,
    bottom: 0,
    marginTop: 10,
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    backgroundColor: 'white',
  },
  tabBarItem: (selectedIndex, index) => ({
    borderBottomWidth: selectedIndex === index ? 2 : 0,
    borderColor: 'grey',
  }),

  tabBarItemText: (selectedIndex, index) => ({
    color: selectedIndex === index ? 'black' : 'grey',
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
