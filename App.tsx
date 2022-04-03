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
import {Provider as ReduxProvider} from 'react-redux';
import stores from './src/Redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  let {store, persistor} = stores();
  return (
    <SafeAreaView style={styles.Container}>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </ReduxProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export default App;
