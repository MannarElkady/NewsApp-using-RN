/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './src/Navigation';

const App = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export default App;
