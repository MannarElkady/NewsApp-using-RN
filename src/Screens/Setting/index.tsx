import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Setting = () => {
  return (
    <View style={styles.settingContainer}>
      <Text>Setting</Text>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  settingContainer: {flex: 1, backgroundColor: 'blue'},
});
